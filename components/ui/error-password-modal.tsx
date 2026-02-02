"use client"
import { X } from "lucide-react"

type ModalProps = {
    open: boolean
    title?: string
    message: string
    onClose: () => void
}

export default function ErrorPasswordModal({
    open,
    title = "Error",
    message,
    onClose,
}: ModalProps) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Modal box */}
            <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
                <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {title}
                    </h3>
                    <button onClick={onClose}>
                        <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                    </button>
                </div>

                <p className="mt-4 text-sm text-gray-600">
                    {message}
                </p>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}
