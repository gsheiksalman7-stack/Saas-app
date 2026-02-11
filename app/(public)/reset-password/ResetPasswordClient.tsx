"use client"
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

export default function ResetPasswordClient() {
  const params = useSearchParams()
  const router = useRouter()

  const token = params.get("token")
  const email = params.get("email")

  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Safety check
  if (!token || !email) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Invalid or expired reset link</p>
      </div>
    )
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError("")

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, email, password }),
    })

    const data = await res.json()
    setLoading(false)

    if (!res.ok) {
      setError(data.message || "Reset failed")
      return
    }

    router.push("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
        <h1 className="text-xl font-semibold text-center">
          Reset Password
        </h1>

        <input
          type="password"
          placeholder="New password"
          className="mt-4 w-full rounded-lg border px-4 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-white cursor-pointer"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </div>
  )
}
