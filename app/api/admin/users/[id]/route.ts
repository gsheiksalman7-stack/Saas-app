import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  const session = await auth()
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  await connectDB()
  await User.findByIdAndDelete(id)

  return NextResponse.json({ success: true })
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  const session = await auth()
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const { role } = await req.json()

  await connectDB()
  await User.findByIdAndUpdate(id, { role })

  return NextResponse.json({ success: true })
}
