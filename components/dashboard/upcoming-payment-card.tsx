'use client'
import React from 'react'

export default function UpcomingPaymentCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.12)]">
      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-900">Upcoming Payment</h3>

      {/* Due date */}
      <p className="mt-3 text-sm text-gray-500">
        Due on May 15, 2026
      </p>

      {/* Amount */}
      <p className="mt-2 text-2xl font-bold text-gray-900">
        $29.00
      </p>

      {/* Plan recommendation */}
      <p className="mt-1 text-sm text-gray-500">
        Recommended <span className="font-medium text-gray-700">Pro Plan</span>
      </p>

      {/* CTA */}
      <button className="mt-5 w-full rounded-lg bg-gray-100 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200">
        Manage Billing
      </button>
    </div>
  )
}
