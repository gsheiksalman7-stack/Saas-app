'use client'
import Avatar from "@/components/ui/avatar"
import DeleteAccountModal from "@/components/ui/delete-account-modal"
import ErrorPasswordModal from "@/components/ui/error-password-modal"
import { signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"

type User = { id: string, email: string }

export default function UserSettingsClient({ user }: { user: User }) {
    const [uploading, setUploading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState(user.email)
    const [saving, setSaving] = useState(false)
    const { data: session, update } = useSession()
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordLoading, setPasswordLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalMessage, setModalMessage] = useState("")
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)

    useEffect(() => {
        if (typeof session?.user?.name === "string") {
            setName(session.user.name)
        }
    }, [session?.user?.name])

    async function handleAvatarChange(file: File) {
        const formData = new FormData()
        formData.append("file", file)
        setUploading(true)

        const res = await fetch("/api/user/avatar", {
            method: "POST",
            body: formData,
        })

        const data = await res.json()
        setUploading(false)

        if (!res.ok) {
            alert(data.message || "Upload failed")
            return
        }

        await update({
            image: data.image
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        User Settings
                    </h1>
                </div>
                {/* Profile Information */}
                <div className="rounded-xl border bg-white p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Profile Information
                    </h2>

                    <div className="mt-6 grid gap-6 md:grid-cols-[200px_1fr]">
                        {/* Avatar */}
                        <div className="flex flex-col items-center gap-3">
                            <Avatar image={session?.user?.image || null} size={68} />

                            {/* CHANGE IMAGE */}
                            <div className="flex gap-2">
                                {/* CHANGE */}
                                <label className="text-violet-800 hover:bg-gray-100 cursor-pointer rounded-lg border px-4 py-2 text-sm">
                                    {uploading ? "Uploading..." : "Change"}
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        onChange={(e) => {
                                            if (e.target.files?.[0]) {
                                                handleAvatarChange(e.target.files[0])
                                            }
                                        }}
                                    />
                                </label>

                                {/* REMOVE */}
                                <button
                                    type="button"
                                    disabled={!session?.user?.image}
                                    onClick={async () => {
                                        const ok = confirm("Remove profile image?")
                                        if (!ok) return

                                        const res = await fetch("/api/user/avatar", {
                                            method: "DELETE",
                                        })

                                        if (!res.ok) {
                                            const data = await res.json()
                                            setModalMessage(data.message || "Failed to remove image")
                                            setModalOpen(true)
                                            return
                                        }

                                        // 🔥 update session immediately
                                        await update({ image: null })
                                    }}
                                    className="rounded-lg border border-red-300 px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input value={name} type="text" className="mt-1 w-full rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input type="email" value={email} disabled className="hover:cursor-not-allowed bg-gray-200 mt-1 w-full rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                                <p className="mt-1 text-xs text-gray-500">
                                    This is the email address you use to log in.
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Bio
                                </label>
                                <textarea rows={3} defaultValue="Product manager and full-stack developer with 8 years of experience building SaaS applications." className="mt-1 w-full rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                            </div>

                            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                                {/* DELETE ACCOUNT */}
                                <button
                                    onClick={() => setDeleteOpen(true)}
                                    className="text-sm text-red-600 hover:underline bg-gray-200 p-2 rounded-lg cursor-pointer"
                                >
                                    Delete Account →
                                </button>

                                {/* UPDATE NAME */}
                                <button onClick={async () => {
                                    setSaving(true)
                                    const res = await fetch("/api/user/profile", {
                                        method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name }),
                                    })
                                    setSaving(false)

                                    if (!res.ok) {
                                        alert("Update failed")
                                        return
                                    }
                                    const data = await res.json()
                                    setName(data.name)
                                    await update({ name: data.name })
                                }} className="rounded-lg bg-indigo-600 px-5 py-2 text-sm text-white cursor-pointer">
                                    {saving ? "Saving..." : "Update Profile"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Change Password */}
                <div className="rounded-xl border bg-white p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Change Password
                    </h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <input type="password" placeholder="Current Password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="w-full rounded-lg border px-4 py-2 text-sm" />

                        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full rounded-lg border px-4 py-2 text-sm" />

                        <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="sm:col-span-2 w-full md:w-1/2 rounded-lg border px-4 py-2 text-sm" />
                    </div>

                    <button
                        onClick={async () => {
                            if (!currentPassword || !newPassword || !confirmPassword) {
                                setModalMessage("All fields are required")
                                setModalOpen(true)
                                return
                            }

                            if (newPassword !== confirmPassword) {
                                setModalMessage("New passwords do not match")
                                setModalOpen(true)
                                return
                            }

                            setPasswordLoading(true)

                            const res = await fetch("/api/user/password", {
                                method: "PATCH",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    currentPassword,
                                    newPassword,
                                    confirmPassword,
                                }),
                            })
                            setPasswordLoading(false)

                            if (!res.ok) {
                                const data = await res.json()
                                alert(data.message || "Password update failed")
                                return
                            }

                            // 🔐 force re-login after password change
                            await signOut({ callbackUrl: "/login" })
                        }}
                        className="mt-4 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white"
                    >
                        {passwordLoading ? "Updating..." : "Update Password"}
                    </button>
                </div>

                {/* Two Factor Authentication */}
                <div className="rounded-xl border bg-white p-5 sm:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Two-Factor Authentication
                            </h2>
                            <p className="mt-1 text-sm text-gray-600">
                                Secure your account by enabling 2FA (Two-Factor Authentication).
                            </p>
                        </div>

                        <button className="rounded-lg border px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Enable 2FA
                        </button>
                    </div>
                </div>
            </div>
            <ErrorPasswordModal
                open={modalOpen}
                title="Password Error"
                message={modalMessage}
                onClose={() => setModalOpen(false)}
            />
            <DeleteAccountModal
                open={deleteOpen}
                loading={deleteLoading}
                onClose={() => setDeleteOpen(false)}
                onConfirm={async () => {
                    try {
                        setDeleteLoading(true)

                        const res = await fetch("/api/user/delete", {
                            method: "DELETE",
                        })

                        if (!res.ok) {
                            alert("Delete failed")
                            return
                        }

                        await signOut({ callbackUrl: "/login" })
                    } finally {
                        setDeleteLoading(false)
                        setDeleteOpen(false)
                    }
                }}
            />

        </div>
    );
}
