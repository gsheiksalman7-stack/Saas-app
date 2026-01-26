'use client'
import CompareFeautures from '@/components/pricingPage/CompareFeautures'
import { IMAGES } from '@/constants/images'
import Image from 'next/image'
import React, { useState } from 'react'

const PLANS = [
    {
        name: 'Basic',
        image: IMAGES.BASIC_PNG,
        price: 19,
        features: [
            '1 User',
            '5 Projects',
            '5GB Storage',
            'Basic Support',
            'Email Support',
        ],
        highlighted: false,
        buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
        name: 'Pro',
        image: IMAGES.PRO_PNG,
        price: 49,
        features: [
            '5 Users',
            '50 Projects',
            '50GB Storage',
            'Priority Support',
            'Advanced Reporting',
        ],
        highlighted: true,
        buttonStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    },
    {
        name: 'Enterprise',
        image: IMAGES.ENTERPRISE_PNG,
        price: 99,
        features: [
            'Unlimited Users',
            'Unlimited Projects',
            '200GB Storage',
            'Dedicated Support',
            'Custom Reports',
        ],
        highlighted: false,
        buttonStyle: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    },
]

const Subscriptions = () => {
    const [yearly, setYearly] = useState(false)

    return (
        <>
            <div className="fixed inset-0 -z-10">
                <Image src={IMAGES.HOMEPAGE_IMG} alt="Background" fill className="object-cover" priority />
            </div>
            <section className="relative mb-6 md:mb-0 py-14 md:py-14 bg-linear-to-b from-[#f3f6ff] to-[#eef2ff] overflow-hidden">
                {/* Soft cloud glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 left-1/2 h-125 w-300 -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h2 className="text-4xl font-extrabold text-slate-900">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Choose the perfect plan for your business. No hidden fees.
                    </p>
                    {/* Toggle */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <span className={!yearly ? 'font-semibold text-slate-900' : 'text-slate-500'}>
                            Monthly
                        </span>
                        <button onClick={() => setYearly(!yearly)} className="relative h-6 w-12 rounded-full bg-indigo-600 cursor-pointer">
                            <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${yearly ? 'left-7' : 'left-1'}`} />
                        </button>
                        <span className={yearly ? 'font-semibold text-slate-900' : 'text-slate-500'}>
                            Yearly <span className="ml-1 text-indigo-600 font-medium">(Save 50%)</span>
                        </span>
                    </div>
                    {/* Pricing Cards */}
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {PLANS.map((plan) => (
                            <div key={plan.name} className={`relative rounded-2xl bg-white px-8 py-10 text-left transition-all duration-300 ease-out hover:-translate-y-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]
              ${plan.highlighted ? 'scale-105 border-2 border-indigo-500' : ''}`}>
                                {plan.highlighted && (
                                    <div className='absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none'>
                                        <span className="absolute top-5 -right-6 rotate-45 bg-indigo-600 px-6 py-1 text-xs font-semibold text-white shadow-md">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className='flex justify-center'>
                                    <Image src={plan.image} alt={plan.name} width={160} height={160} loading="lazy" fetchPriority="low" className='object-contain' />
                                </div>
                                <h3 className="text-2xl text-center font-semibold text-slate-900">
                                    {plan.name}
                                </h3>
                                <div className="mt-4 flex justify-center items-end gap-2">
                                    <span className="text-4xl font-extrabold text-slate-900">
                                        ${yearly ? plan.price * 6 : plan.price}
                                    </span>
                                    <span className="text-slate-500">{yearly ? '/yr' : '/mo'}</span>
                                </div>
                                <p className="flex justify-center mt-2 text-sm text-slate-500 text-center">
                                    {yearly ? 'Billed yearly' : 'Billed monthly'}
                                </p>
                                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <span className="text-indigo-600">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`mt-8 w-full rounded-md py-2 font-medium ${plan.buttonStyle}`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CompareFeautures />
        </>
    )
}

export default Subscriptions