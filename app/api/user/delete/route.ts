import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"

export const runtime = "nodejs"

export async function DELETE() {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  await connectDB()
  await User.findByIdAndDelete(session.user.id)

  return NextResponse.json({ success: true })
}
