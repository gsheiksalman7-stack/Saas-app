'use client'
import React from 'react'
import { Plus, CreditCard, LifeBuoy, FileText } from 'lucide-react'

export default function QuickActionsCard() {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.12)]">
            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-900">Quick Actions</h3>

            {/* Actions */}
            <div className="mt-4 grid grid-cols-2 gap-3">
                {/* Create API Key */}
                <button className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 text-left transition hover:bg-gray-50">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
                        <Plus size={16} className="text-indigo-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                        Create API Key
                    </span>
                </button>

                {/* Upgrade Plan */}
                <button className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 text-left transition hover:bg-gray-50">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                        <CreditCard size={16} className="text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                        Upgrade Plan
                    </span>
                </button>

                {/* Contact Support */}
                <button className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 text-left transition hover:bg-gray-50">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                        <LifeBuoy size={16} className="text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                        Contact Support
                    </span>
                </button>

                {/* View Docs */}
                <button className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 text-left transition hover:bg-gray-50">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                        <FileText size={16} className="text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                        View Docs
                    </span>
                </button>
            </div>
        </div>
    )
}
