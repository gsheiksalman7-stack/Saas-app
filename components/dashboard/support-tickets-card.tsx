'use client'
import React from 'react'
import { Check } from 'lucide-react'

export default function SupportTicketsCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.12)]">
      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-900">Support Tickets</h3>

      {/* Open count */}
      <div className="mt-3 flex items-baseline gap-2">
        <p className="text-2xl font-bold text-gray-900">1</p>
        <p className="text-sm text-gray-500">Open</p>
      </div>

      {/* Ticket preview */}
      <div className="mt-4 flex items-start gap-3">
        {/* Check icon */}
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100">
          <Check size={14} className="text-blue-600" />
        </div>

        {/* Placeholder lines */}
        <div className="flex-1 space-y-2">
          <div className="h-2 w-3/4 rounded bg-gray-200" />
          <div className="h-2 w-1/2 rounded bg-gray-200" />
        </div>
      </div>

      {/* Subtle placeholders */}
      <div className="mt-4 space-y-2">
        <div className="h-2 w-5/6 rounded bg-gray-100" />
        <div className="h-2 w-4/6 rounded bg-gray-100" />
      </div>
    </div>
  )
}
