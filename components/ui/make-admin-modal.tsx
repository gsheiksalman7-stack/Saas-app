"use client"
import Avatar from "@/components/ui/avatar"

type Props = {
  open: boolean
  user: {
    name: string
    email: string
    image?: string
  } | null
  onClose: () => void
  onConfirm: () => void
  loading?: boolean
}

export default function ConfirmMakeAdminModal({
  open,
  user,
  onClose,
  onConfirm,
  loading = false,
}: Props) {
  if (!open || !user) return null

  return (
    <div className="fixed inset-0 z-10000 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <Avatar
            image={user.image}
            name={user.name}
            email={user.email}
            size={40}
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Make user an admin
            </h3>
            <p className="text-sm text-gray-600">
              {user.name} ({user.email})
            </p>
          </div>
        </div>

        {/* Info / Warning */}
        <div className="mt-4 rounded-lg border border-indigo-200 bg-indigo-50 p-4">
          <p className="text-sm font-medium text-indigo-700">
            🛡️ Admin permissions
          </p>
          <ul className="mt-2 list-disc pl-5 text-sm text-indigo-600 space-y-1">
            <li>Can manage users</li>
            <li>Can change roles</li>
            <li>Can access admin settings</li>
          </ul>
          <p className="mt-2 text-sm text-indigo-600">
            Only grant admin access to trusted users.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Updating..." : "Make admin"}
          </button>
        </div>
      </div>
    </div>
  )
}
