export default function AdminSettingsPage() {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-6">
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
                            <input
                                type="text"
                                placeholder="Search users..."
                                className="hidden sm:block rounded-lg border px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                            />
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
                                    <th>Status</th>
                                    <th className="text-right px-4 sm:px-0">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    {
                                        name: "John Doe",
                                        email: "john.doe@example.com",
                                        role: "Admin",
                                        status: "Active",
                                    },
                                    {
                                        name: "Jane Smith",
                                        email: "jane.smith@example.com",
                                        role: "Manager",
                                        status: "Active",
                                    },
                                    {
                                        name: "Mark Wilson",
                                        email: "mark.w@email.com",
                                        role: "Employee",
                                        status: "Suspended",
                                    },
                                    {
                                        name: "Sarah Brown",
                                        email: "sarah.b@email.com",
                                        role: "Employee",
                                        status: "Suspended",
                                    },
                                    {
                                        name: "Alex Johnson",
                                        email: "alex.j@email.com",
                                        role: "Employee",
                                        status: "Active",
                                    },
                                ].map((user) => (
                                    <tr key={user.email} className="border-b last:border-0">
                                        <td className="flex items-center gap-3 py-3 px-4 sm:px-0 font-medium text-gray-900">
                                            <img
                                                src="https://i.pravatar.cc/32"
                                                className="h-8 w-8 rounded-full"
                                                alt=""
                                            />
                                            {user.name}
                                        </td>
                                        <td className="text-gray-600">{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${user.status === "Active"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                    }`}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="text-right px-4 sm:px-0">
                                            <button className="text-indigo-600 hover:underline">
                                                Edit
                                            </button>
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
                            <div
                                key={item.label}
                                className="grid gap-3 sm:grid-cols-[200px_1fr_auto]"
                            >
                                <label className="text-sm font-medium text-gray-700">
                                    {item.label}
                                </label>
                                <input
                                    defaultValue={item.value}
                                    className="rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                />
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
        </div>
    );
}
