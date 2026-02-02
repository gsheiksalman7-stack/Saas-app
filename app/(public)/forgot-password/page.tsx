"use client"

import { useState } from "react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()
    setLoading(false)

    setMessage(data.message)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl bg-white p-6 shadow"
      >
        <h1 className="text-xl font-semibold text-center">
          Forgot Password
        </h1>

        <p className="mt-2 text-sm text-gray-600 text-center">
          Enter your email to receive a password reset link
        </p>

        <input
          type="email"
          required
          placeholder="Email address"
          className="mt-4 w-full rounded-lg border px-4 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-white"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        {message && (
          <p className="mt-3 text-sm text-center text-gray-600">
            {message}
          </p>
        )}
      </form>
    </div>
  )
}
