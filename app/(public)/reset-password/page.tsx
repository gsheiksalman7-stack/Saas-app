import { Suspense } from "react"
import ResetPasswordClient from "./ResetPasswordClient"

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading reset page…</p>
      </div>
    }>
      <ResetPasswordClient />
    </Suspense>
  )
}
