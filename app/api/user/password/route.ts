import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"
import bcrypt from "bcryptjs"

export const runtime = "nodejs"

export async function PATCH(req: Request) {
  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const { currentPassword, newPassword, confirmPassword } = await req.json()

  if (!currentPassword || !newPassword || !confirmPassword) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    )
  }

  if (newPassword !== confirmPassword) {
    return NextResponse.json(
      { message: "Passwords do not match" },
      { status: 400 }
    )
  }

  if (newPassword.length < 6) {
    return NextResponse.json(
      { message: "Password must be at least 6 characters" },
      { status: 400 }
    )
  }

  await connectDB()

  const user = await User.findById(session.user.id)

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 })
  }

  const isMatch = await bcrypt.compare(currentPassword, user.password)

  if (!isMatch) {
    return NextResponse.json(
      { message: "Current password is incorrect" },
      { status: 400 }
    )
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10)

  user.password = hashedPassword
  await user.save()

  return NextResponse.json({ success: true })
}
