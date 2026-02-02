import { auth } from "@/lib/auth"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"
import { NextResponse } from "next/server"
import cloudinary from "cloudinary"

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
})

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const formData = await req.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ message: "No file" }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())

  const upload = await new Promise<any>((resolve, reject) => {
    cloudinary.v2.uploader.upload_stream(
      { folder: "avatars" },
      (err, result) => {
        if (err) reject(err)
        resolve(result)
      }
    ).end(buffer)
  })

  await connectDB()
  await User.findByIdAndUpdate(session.user.id, {
    image: upload.secure_url,
  })

  return NextResponse.json({ image: `${upload.secure_url}?v=${Date.now()}` })
}


export async function DELETE() {
  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    )
  }

  await connectDB()

  const user = await User.findById(session.user.id)

  if (!user) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    )
  }

  // OPTIONAL: delete from storage (Cloudinary / local)
  // if (user.image) await deleteFromCloudinary(user.image)

  user.image = null
  await user.save()

  return NextResponse.json({ image: null })
}

