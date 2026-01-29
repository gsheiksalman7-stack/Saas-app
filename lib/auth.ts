import Credentials from "next-auth/providers/credentials";
import { connectDB } from "./db";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";
import NextAuth, { NextAuthConfig } from "next-auth";

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

                if (!email || !password){
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

                if (!isValid){
                    console.log('Password mismatch')
                return null
                }

                console.log('LOGIN SUCCESS')

                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role,
                }
            }
        })
    ],

    session: {
        strategy: 'jwt'
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role as Role
                token.id = user.id
            }
            return token
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role as Role
                session.user.id = token.id as string
            }
            return session
        }
    },
    pages: {
        signIn: '/login',
    }
}

export const { auth, handlers } = NextAuth(authOptions)