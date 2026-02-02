'use client'
import Avatar from "@/components/ui/avatar"
import ConfirmDeleteModal from "@/components/ui/confirm-delete-modal"
import ConfirmMakeAdminModal from "@/components/ui/make-admin-modal"
import Portal from "@/components/ui/portal"
import { MoreVertical } from "lucide-react"
import { useRef, useState } from "react"

type User = { _id: string, name: string, email: string, role: string, image?: string }

export default function AdminSettingsClient({ users }: { users: User[] }) {
    const [openMenu, setOpenMenu] = useState<string | null>(null)
    const [menuPosition, setMenuPosition] = useState<{ top: number, left: number } | null>(null)
    const [deleteUser, setDeleteUser] = useState<User | null>(null)
    const [deleting, setDeleting] = useState(false)
    const [makeAdminUser, setMakeAdminUser] = useState<User | null>(null)
    const [updatingRole, setUpdatingRole] = useState(false)

    const menuRef = useRef<HTMLTableCellElement | null>(null)

    const confirmDelete = async () => {
        if (!deleteUser) return

        setDeleting(true)

        const res = await fetch(`/api/admin/users/${deleteUser._id}`, {
            method: "DELETE",
        })

        const data = await res.json()

        setDeleting(false)

        if (!res.ok) {
            alert(data.message || "Delete failed")
            return
        }

        setDeleteUser(null)
        window.location.reload()
    }

    const confirmMakeAdmin = async () => {
        if (!makeAdminUser) return

        setUpdatingRole(true)

        const res = await fetch(`/api/admin/users/${makeAdminUser._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ role: "admin" }),
        })

        const data = await res.json()

        setUpdatingRole(false)

        if (!res.ok) {
            alert(data.message || "Failed to update role")
            return
        }

        setMakeAdminUser(null)
        window.location.reload()
    }


    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
            {openMenu && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                        setOpenMenu(null)
                        setMenuPosition(null)
                    }}
                />
            )}

            <div className="relative z-10 mx-auto max-w-6xl space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Admin Settings
                    </h1>
                </div>
                {/* Manage Users */}
                <div className="rounded-xl border bg-white p-5 sm:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Manage Users
                        </h2>

                        <div className="flex gap-3">
                            <input type="text" placeholder="Search users..." className="hidden sm:block rounded-lg border px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none" />
                            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                                Invite User
                            </button>
                        </div>
                    </div>

                    {/* Users Table */}
                    <div className="-mx-4 mt-4 overflow-x-auto sm:mx-0">
                        <table className="min-w-180 w-full border-collapse text-sm">
                            <thead>
                                <tr className="border-b text-left text-gray-500">
                                    <th className="py-3 px-4 sm:px-0">Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th className="text-right px-4 sm:px-0">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Array.isArray(users) && users.map((user) => (
                                    <tr key={user._id} className="border-b last:border-0">
                                        <td className="flex items-center gap-3 py-3 px-4 sm:px-0 font-medium text-gray-900">
                                            <Avatar image={user.image} />
                                            {user.name}
                                        </td>
                                        <td className="text-gray-600">{user.email}</td>
                                        <td>{user.role}</td>
                                        <td ref={menuRef} className="text-right px-4 sm:px-0 relative">
                                            <button onClick={(e) => {
                                                e.stopPropagation()
                                                const rect = e.currentTarget.getBoundingClientRect()
                                                setMenuPosition({
                                                    top: rect.bottom + window.scrollY,
                                                    left: rect.right + window.scrollX - 160, // menu width
                                                })
                                                setOpenMenu(openMenu === user._id ? null : user._id)
                                            }} className="p-1 rounded hover:bg-gray-100">
                                                <MoreVertical size={16} />
                                            </button>
                                            {openMenu === user._id && menuPosition && (
                                                <Portal>
                                                    <div className="fixed z-50 w-40 rounded-lg border bg-white shadow-lg overflow-hidden" style={{ top: menuPosition.top, left: menuPosition.left, }} onClick={(e) => e.stopPropagation()}>
                                                        <button onClick={() => {
                                                            setOpenMenu(null)
                                                            setMenuPosition(null)
                                                            setMakeAdminUser(user)
                                                        }} className="block w-full px-4 py-2 text-left text-sm text-violet-800 hover:bg-gray-100">
                                                            Make as Admin
                                                        </button>

                                                        <button onClick={() => {
                                                            setOpenMenu(null)
                                                            setMenuPosition(null)
                                                            setDeleteUser(user)
                                                        }} className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </Portal>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex items-center justify-end gap-2 text-sm text-gray-500">
                        <button className="rounded px-2 py-1 hover:bg-gray-100">‹</button>
                        <button className="rounded bg-indigo-600 px-3 py-1 text-white">
                            1
                        </button>
                        <button className="rounded px-3 py-1 hover:bg-gray-100">
                            2
                        </button>
                        <button className="rounded px-2 py-1 hover:bg-gray-100">›</button>
                    </div>
                </div>

                {/* System Settings */}
                <div className="rounded-xl border bg-white p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                        System Settings
                    </h2>

                    <div className="mt-4 space-y-4">
                        {[
                            { label: "Application Name", value: "SaaS" },
                            { label: "Application URL", value: "https://www.example.com" },
                        ].map((item) => (
                            <div key={item.label} className="grid gap-3 sm:grid-cols-[200px_1fr_auto]">
                                <label className="text-sm font-medium text-gray-700">
                                    {item.label}
                                </label>
                                <input defaultValue={item.value} className="rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none" />
                                <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
                                    Update
                                </button>
                            </div>
                        ))}

                        <div className="grid gap-3 sm:grid-cols-[200px_1fr_auto]">
                            <label className="text-sm font-medium text-gray-700">
                                Default User Role
                            </label>
                            <select className="rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none">
                                <option>Employee</option>
                                <option>Manager</option>
                                <option>Admin</option>
                            </select>
                            <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
                                Update
                            </button>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-[200px_1fr_auto]">
                            <label className="text-sm font-medium text-gray-700">
                                Maintenance Mode
                            </label>
                            <select className="rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none">
                                <option>Disabled</option>
                                <option>30 minutes</option>
                                <option>1 hour</option>
                            </select>
                            <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmDeleteModal open={!!deleteUser} user={deleteUser} loading={deleting} onClose={() => setDeleteUser(null)} onConfirm={confirmDelete} />
            <ConfirmMakeAdminModal open={!!makeAdminUser} user={makeAdminUser} loading={updatingRole} onClose={() => setMakeAdminUser(null)} onConfirm={confirmMakeAdmin} />
        </div>
    )
}