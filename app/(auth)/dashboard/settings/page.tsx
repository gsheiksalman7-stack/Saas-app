export default function UserSettingsPage() {
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
                            <img
                                src="https://i.pravatar.cc/120"
                                alt="profile"
                                className="h-28 w-28 rounded-full"
                            />
                            <button className="rounded-lg border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                Change
                            </button>
                        </div>

                        {/* Form */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="John Doe"
                                    className="mt-1 w-full rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    defaultValue="john.doe@example.com"
                                    className="mt-1 w-full rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    This is the email address you use to log in.
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Bio
                                </label>
                                <textarea
                                    rows={3}
                                    defaultValue="Product manager and full-stack developer with 8 years of experience building SaaS applications."
                                    className="mt-1 w-full rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>

                            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <button className="bg-gray-100 p-2 rounded-lg text-sm font-medium text-red-600 hover:underline cursor-pointer">
                                    Delete Account →
                                </button>

                                <button className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                                    Update Profile
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
                        <input
                            type="password"
                            placeholder="Current Password"
                            className="w-full rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            className="w-full rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            className="sm:col-span-2 w-full md:w-1/2 rounded-lg border px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <button className="mt-4 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                        Update Password
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
        </div>
    );
}
