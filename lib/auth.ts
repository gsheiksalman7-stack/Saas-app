import Credentials from "next-auth/providers/credentials";
import { connectDB } from "./db";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";
import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

type Role = 'user' | 'admin'

export const authOptions: NextAuthConfig = {
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                console.log('CREDENTIALS:', credentials)

                const email = credentials?.email?.toString().trim().toLowerCase()
                const password = credentials?.password?.toString()

                if (!email || !password) {
                    console.log('Missing email or password')
                    return null
                }

                await connectDB()
                console.log('DB connected')

                const user = await User.findOne({ email })
                console.log('USER FOUND:', user)

                if (!user) {
                    console.log('User not found')
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
            authorization:{
                params:{
                    scope:"read:user user:email"
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

            await connectDB();

            const existingUser = await User.findOne({ email: user.email });

            if (!existingUser) {
                await User.create({
                    name: user.name,
                    email: user.email,
                    image: user.image || "",
                    role: "user",
                    provider: account?.provider, // google or github
                });
            }

            return true;
        },

        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            return `${baseUrl}/dashboard`;
        },

        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.role = user.role as Role
                token.id = user.id
                token.image = user.image
                token.name = user.name
            }

            if (user?.email) {
                const dbUser = await User.findOne({ email: user.email });

                if (dbUser) {
                    token.id = dbUser._id.toString();
                    token.role = dbUser.role;
                    token.image = dbUser.image;
                    token.name = dbUser.name;
                }
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
                session.user.role = token.role as Role
                session.user.id = token.id as string
                session.user.image = token.image as string
                session.user.name = token.name as string
            }
            return session
        }
    },
    pages: {
        signIn: '/login',
    }
}


export const { auth, handlers } = NextAuth(authOptions)