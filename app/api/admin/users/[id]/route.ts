import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"

export const runtime = "nodejs"

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = await params
    console.log("DELETE USER ID:", id)
    const session = await auth()
    console.log("SESSION:", session)
    if (!session || session.user.role !== "admin") {
        console.log("UNAUTHORIZED DELETE")
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    await connectDB()
    const result = await User.findByIdAndDelete(id)
    console.log("DELETE RESULT:", result)

    return NextResponse.json({ success: true })
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = await params
    console.log("PATCH USER ID:", id)
    const session = await auth()
    console.log("SESSION:", session)
    if (!session || session.user.role !== "admin") {
        console.log("UNAUTHORIZED PATCH")
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { role } = await req.json()
    console.log("BODY:", role)

    await connectDB()
    const result = await User.findByIdAndUpdate(id, { role })
    console.log("PATCH RESULT:", result)

    return NextResponse.json({ success: true })
}
