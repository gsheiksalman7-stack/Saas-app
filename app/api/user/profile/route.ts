import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"

export const runtime = "nodejs"

export async function PATCH(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const { name } = await req.json()

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ message: "Invalid name" }, { status: 400 })
  }

  await connectDB()

  const updatedUser = await User.findByIdAndUpdate(
    session.user.id,
    { name: name.trim() },
    { new: true }
  ).select("name")

  return NextResponse.json({ name:updatedUser.name })
}
