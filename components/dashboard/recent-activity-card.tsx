'use client'
import React from 'react'
import { BarChart3, CreditCard, LifeBuoy } from 'lucide-react'

export default function RecentActivityCard() {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.12)]">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">Recent Activity</h3>
                <button className="text-sm font-medium text-indigo-600 hover:underline">
                    View All
                </button>
            </div>

            {/* Activity list */}
            <div className="mt-5 space-y-4">
                {/* Item 1 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
                            <BarChart3 size={16} className="text-indigo-600" />
                        </div>
                        <p className="text-sm text-gray-700">
                            API usage exceeded 80% of the limit
                        </p>
                    </div>
                    <span className="text-sm text-right text-gray-400">2 days ago</span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                            <CreditCard size={16} className="text-gray-600" />
                        </div>
                        <p className="text-sm text-gray-700">
                            Payment of $29.00 for Pro Plan
                        </p>
                    </div>
                    <span className="text-sm text-right text-gray-400">April 20</span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                            <LifeBuoy size={16} className="text-gray-600" />
                        </div>
                        <p className="text-sm text-gray-700">
                            Support ticket responded by Mike Johnson
                        </p>
                    </div>
                    <span className="text-sm text-right text-gray-400">April 19</span>
                </div>
            </div>
        </div>
    )
}
