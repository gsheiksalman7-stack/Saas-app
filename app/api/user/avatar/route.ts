import { auth } from "@/lib/auth"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"
import { UploadApiErrorResponse } from "cloudinary"
import { UploadApiResponse } from "cloudinary"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

function getCloudinary() {
  const cloudinary = require("cloudinary").v2

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
  })

  return cloudinary
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get("file") as File | null

    if (!file) {
      return NextResponse.json({ message: "No file" }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const cloudinary = getCloudinary()

    const upload = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "avatars" },
          (
            err: UploadApiErrorResponse | undefined,
            result: UploadApiResponse | undefined
          ) => {
            if (err) return reject(err)
            if (!result) return reject(new Error("No upload result"))
            resolve(result)
          }
        )
        .end(buffer)
    })


    await connectDB()
    await User.findByIdAndUpdate(session.user.id, {
      image: upload.secure_url,
    })

    return NextResponse.json({
      image: `${upload.secure_url}?v=${Date.now()}`,
    })
  } catch (error) {
    console.error("Avatar upload error:", error)
    return NextResponse.json(
      { message: "Upload failed" },
      { status: 500 }
    )
  }
}

export async function DELETE() {
  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  await connectDB()
  const user = await User.findById(session.user.id)

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 })
  }

  user.image = null
  await user.save()

  return NextResponse.json({ image: null })
}
