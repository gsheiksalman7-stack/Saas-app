'use client'
import React from 'react'

export default function InvoicesCard() {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.12)]">
            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-900">Invoices</h3>

            {/* Stats */}
            <div className="mt-4 flex items-center gap-8">
                <div className='flex items-center'>
                    <p className="text-2xl font-bold text-gray-900 mr-1">3</p>
                    <p className="text-lg text-gray-500">Paid</p>
                </div>

                <div className='flex items-center'>
                    <p className="text-2xl font-bold text-gray-900 mr-1">1</p>
                    <p className="text-lg text-gray-500">Due</p>
                </div>
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-gray-100" />

            {/* Amount & Button */}
            <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-gray-900">$89.00</p>

                <button className="rounded-lg bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 transition hover:bg-amber-200">
                    Pay Invoice
                </button>
            </div>
        </div>
    )
}
