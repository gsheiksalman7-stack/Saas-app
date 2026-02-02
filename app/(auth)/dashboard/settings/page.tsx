import { auth } from "@/lib/auth"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"
import UserSettingsClient from "./settings-client"

export default async function UserSettingsPage() {
  const session = await auth()

  if (!session?.user?.id) {
    return <div className="p-6">Unauthorized</div>
  }

  await connectDB()

  const user = await User.findById(session.user.id)
    .select("name email image")
    .lean()

  if (!user) {
    return <div className="p-6">User not found</div>
  }

  // 👇 convert Mongo ObjectId to string
  const safeUser = {
    id: user._id.toString(),
    email: user.email,
    image: user.image ?? null,
  }

  return <UserSettingsClient user={safeUser} />
}