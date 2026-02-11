import Credentials from "next-auth/providers/credentials";
import { connectDB } from "./db";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";
import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const authOptions: NextAuthConfig = {
    debug: true,
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                console.log('CREDENTIALS:', credentials)

                const email =
                    typeof credentials?.email === "string"
                        ? credentials.email.trim().toLowerCase()
                        : ""

                const password =
                    typeof credentials?.password === "string"
                        ? credentials.password
                        : ""


                if (!email || !password) {
                    console.log('Missing email or password')
                    return null
                }

                try {
                    await connectDB()
                } catch (err) {
                    console.error("DB connection failed", err)
                    return null
                }

                let user
                try {
                    user = await User.findOne({ email }).lean()
                } catch (err) {
                    console.error("User lookup failed", err)
                    return null
                }
                console.log('USER FOUND:', user)

                if (!user) {
                    console.log('User not found')
                    return null
                }

                if (!user.password || typeof user.password !== "string") {
                    console.log("User has no password (OAuth user)")
                    return null
                }

                const isValid = await bcrypt.compare(password, user.password)
                console.log('PASSWORD VALUE:', isValid)

                if (!isValid) {
                    console.log('Password mismatch')
                    return null
                }

                console.log('LOGIN SUCCESS')

                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    image: user.image || "",
                }
            }
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            authorization: {
                params: {
                    scope: "read:user user:email"
                }
            }
        })
    ],

    session: {
        strategy: 'jwt'
    },

    callbacks: {
        async signIn({ user, account, profile }) {
            const email =
                user.email ||
                (profile as any)?.email ||
                (profile as any)?.emails?.[0]?.value;

            if (!email) {
                console.error("OAuth login failed: email not found");
                return false; // still block if email truly missing
            }
            await connectDB()

            let dbUser
            try {
                dbUser = await User.findOne({ email })
            } catch (err) {
                console.error("User lookup failed", err)
                return false
            }


            if (!dbUser) {
                dbUser = await User.create({
                    name: user.name,
                    email,
                    image: user.image || "",
                    role: "user",
                    provider: account?.provider,
                })
            }

            // 👇 ADD THESE 3 LINES (VERY IMPORTANT)
            ; (user as any).id = dbUser._id.toString()
                ; (user as any).role = dbUser.role
                ; (user as any).image = dbUser.image

            return true
        },

        async jwt({ token, user, trigger, session }) {
            // if (user) {
            //     token.role = user.role as Role
            //     token.id = user.id
            //     token.image = user.image
            //     token.name = user.name
            // }

            if (user) {
                token.id = (user as any).id
                token.role = (user as any).role
                token.image = user.image
                token.name = user.name
            }

            if (trigger === "update" && session) {
                if ("image" in session) {
                    token.image = session.image ?? null
                }

                if ("name" in session) {
                    token.name = session.name
                }
            }
            return token
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role as "user" | "admin"
                session.user.id = token.id as string
                session.user.image = token.image as string
                session.user.name = token.name as string
            }
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth } = NextAuth(authOptions)