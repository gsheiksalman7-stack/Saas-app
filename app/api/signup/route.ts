import { connectDB } from "@/lib/db"
import { User } from "@/models/User"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { name, email, password } = await req.json()

    await connectDB()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
        return NextResponse.json(
            { message: 'User already exists' },
            { status: 400 }
        )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await User.create({ name, email, password: hashedPassword })

    return NextResponse.json({ message: 'user created' }, { status: 201 })
}