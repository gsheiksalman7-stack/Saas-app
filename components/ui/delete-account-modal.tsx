"use client"

type DeleteAccountModalProps = {
  open: boolean
  loading?: boolean
  onClose: () => void
  onConfirm: () => void
}

export default function DeleteAccountModal({
  open,
  loading,
  onClose,
  onConfirm,
}: DeleteAccountModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-900">
          Delete account?
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          This action is irreversible. All your data will be permanently deleted.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="cursor-pointer rounded-lg bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? "Deleting..." : "Delete Account"}
          </button>
        </div>
      </div>
    </div>
  )
}
