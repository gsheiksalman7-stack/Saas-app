'use client'
import { Crown } from 'lucide-react'
import React from 'react'

const plans = [
    {
        name: 'Basic',
        price: '$19',
        period: '/mo',
        features: ['Essential features'],
        highlighted: false,
    },
    {
        name: 'Pro',
        price: '$49',
        period: '/mo',
        features: ['Advanced tools'],
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: '$99',
        period: '/mo',
        features: ['Custom solutions'],
        highlighted: false,
    },
]

const Pricing = () => {
    return (
        <section className="relative bottom-25 md:bottom-0 py-0 md:py-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Pricing Plans
                </h2>
                <p className="mt-2 text-gray-500">
                    Choose the Plan That’s Right for You
                </p>
                {/* Cards */}
                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {plans.map((plan, i) => (
                        <div key={i} className={`relative overflow-hidden rounded-2xl p-8 transform transition-all duration-300 ease-out hover:-translate-y-2 ${plan.highlighted ? 'bg-linear-to-b from-blue-600 to-blue-500 text-white shadow-[0_25px_60px_rgba(59,130,246,0.45)] scale-105 hover:scale-[1.07]' : 'bg-white text-gray-900 shadow-[0_15px_40px_rgba(0,0,0,0.1)]'}`}>
                            {/* ===== CURVED WAVE (PRO ONLY) ===== */}
                            {plan.highlighted && (
                                <>
                                    {/* Crown icon */}
                                    <div className="absolute -top-1 -right-1 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 shadow-lg">
                                        <Crown className="h-5 w-5 text-yellow-900" />
                                    </div>
                                    {/* Popular banner */}
                                    <div className="absolute w-1/2 top-2 left-1/2 z-20 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-semibold text-yellow-900 shadow">
                                        Most Popular
                                    </div>
                                    {/* Main wave */}
                                    <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[170%] -translate-x-1/2 rounded-t-[100%] bg-blue-700/90" />
                                    {/* Secondary wave for depth */}
                                    <div className="pointer-events-none absolute -bottom-36 left-1/2 h-72 w-[190%] -translate-x-1/2 rounded-t-[100%] bg-blue-800/50" />
                                </>
                            )}
                            {/* ===== CARD CONTENT ===== */}
                            <div className="relative z-10">
                                <h3 className="text-2xl pt-2 font-semibold">
                                    {plan.name}
                                </h3>
                                <div className="mt-4 flex items-end justify-center gap-1">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                                        {plan.period}
                                    </span>
                                </div>
                                <ul className="mt-6 space-y-2 text-sm">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`mt-8 w-full rounded-lg py-2 text-sm font-medium transition ${plan.highlighted ? 'bg-white text-blue-600 hover:bg-blue-100' : 'bg-blue-600 text-white hover:bg-blue-800'}`}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
