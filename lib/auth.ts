import Credentials from "next-auth/providers/credentials";
import { connectDB } from "./db";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";
import { NextAuthConfig } from "next-auth";

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
                if (!credentials?.email || !credentials?.password) return null

                const email = credentials.email as string
                const password = credentials.password as string

                if (!email || !password) return null

                await connectDB()

                const user = await User.findOne({ email })

                if (!user) return null

                const isValid = await bcrypt.compare(password, user.password)

                if (!isValid) return null

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