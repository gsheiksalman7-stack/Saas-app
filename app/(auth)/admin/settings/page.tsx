import { auth } from "@/lib/auth"
import AdminSettingsClient from "./settings-client"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"

export default async function AdminSettingsPage() {
    const session = await auth()

    if (!session || session.user.role !== 'admin') {
        return <div className='p-6'>UnAuthorized</div>
    }

    await connectDB()

    const users = await User.find({}).select("name email role image").sort({ createdAt: -1 }).lean()

    const safeUsers = users.map((user) => ({
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        image: user.image ?? null,
    }))

    return <AdminSettingsClient users={safeUsers} />
}
