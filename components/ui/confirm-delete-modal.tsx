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

export default function ConfirmDeleteModal({
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
              Delete user
            </h3>
            <p className="text-sm text-gray-600">
              {user.name} ({user.email})
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700 font-medium">
            ⚠️ This action is irreversible
          </p>
          <p className="mt-1 text-sm text-red-600">
            Deleting this user will permanently remove their account
            and all associated data. This cannot be undone.
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
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete user"}
          </button>
        </div>
      </div>
    </div>
  )
}
