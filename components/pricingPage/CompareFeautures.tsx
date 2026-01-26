import React from 'react'

const FEATURES = [
    {
        label: 'Users',
        basic: '1 User',
        pro: '5 Users',
        enterprise: 'Unlimited Users',
    },
    {
        label: 'Projects',
        basic: '5 Project',
        pro: '50 Projects',
        enterprise: 'Unlimited Projects',
    },
    {
        label: 'Storage',
        basic: '5GB',
        pro: '50GB',
        enterprise: '200GB',
    },
    {
        label: 'Support',
        basic: 'Email Support',
        pro: 'Priority Support',
        enterprise: 'Dedicated Support',
    },
    {
        label: 'Reporting',
        basic: '—',
        pro: 'Advanced Reporting',
        enterprise: 'Customizable Reports',
    },
]

const Check = ({ color = 'text-indigo-600' }) => (
    <span className={`font-semibold ${color}`}>✓</span>
)

const CompareFeautures = () => {
    return (
        <>
            <section className="relative mb-15 md:mb-0 py-0 md:py-20 bg-transparent">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading */}
                    <h2 className="text-center text-3xl font-extrabold text-slate-900">
                        Compare Features
                    </h2>
                    {/* Table */}
                    <div className="mt-12 overflow-x-auto">
                        <div className="min-w-225 rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
                            {/* Header Row */}
                            <div className="grid grid-cols-4 border-b">
                                <div className="p-6 text-sm font-semibold text-slate-500">
                                    Features
                                </div>
                                <div className="p-6 text-center font-semibold text-indigo-600 bg-indigo-50 rounded-tl-xl">
                                    Basic
                                </div>
                                <div className="p-6 text-center font-semibold text-white bg-indigo-400">
                                    Pro
                                </div>
                                <div className="p-6 text-center font-semibold text-yellow-600 bg-yellow-100 rounded-tr-xl">
                                    Enterprise
                                </div>
                            </div>
                            {/* Feature Rows */}
                            {FEATURES.map((row, idx) => (
                                <div key={row.label} className={`grid grid-cols-4 items-center ${idx !== FEATURES.length - 1 ? 'border-b' : ''}`}>
                                    <div className="p-6 text-sm font-medium text-slate-700">
                                        {row.label}
                                    </div>
                                    <div className="p-6 text-center text-sm text-slate-600">
                                        {row.basic === '—' ? '—' : <Check />} {row.basic}
                                    </div>
                                    <div className="p-6 text-center text-sm text-slate-600">
                                        <Check /> {row.pro}
                                    </div>
                                    <div className="p-6 text-center text-sm text-slate-600">
                                        <Check color="text-yellow-600" /> {row.enterprise}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompareFeautures