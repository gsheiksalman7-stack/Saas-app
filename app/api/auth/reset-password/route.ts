import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"

export async function POST(req: Request) {
  await connectDB()

  const { token, email, password } = await req.json()

  if (!token || !email || !password) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    )
  }

  const user = await User.findOne({ email })

  if (!user || !user.resetPasswordToken) {
    return NextResponse.json(
      { message: "Invalid or expired reset link" },
      { status: 400 }
    )
  }

  const isValid = await bcrypt.compare(token, user.resetPasswordToken)

  if (!isValid || Date.now() > user.resetPasswordExpiry) {
    return NextResponse.json(
      { message: "Invalid or expired reset link" },
      { status: 400 }
    )
  }

  // Update password
  user.password = await bcrypt.hash(password, 10)
  user.resetPasswordToken = undefined
  user.resetPasswordExpiry = undefined

  await user.save()

  return NextResponse.json({
    message: "Password reset successful",
  })
}
