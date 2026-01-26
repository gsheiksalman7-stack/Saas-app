'use client'
import { IMAGES } from '@/constants/images'
import Image from 'next/image'
import React from 'react'

const Features = () => {
    const features = [
        {
            image: IMAGES.INSIGHTS_PNG,
            title: 'Analytics Insights',
            description: 'Track your performance with in-depth analytics.',
        },
        {
            image:IMAGES.COLLAB_PNG,
            title: 'Collaborate Easily',
            description: 'Work together with your team in real-time.',
        },
        {
            image:IMAGES.AUTOMATE_PNG,
            title: 'Automate Tasks',
            description: 'Save time with powerful automation tools.',
        },
    ]

    return (
        <section className="relative py-5 bg-transparent bottom-40 md:top-0 z-10 md:z-0">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-0 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Key Features
                    </h2>
                    <p className="mt-2 mb-4 md:mb-0 text-gray-500">
                        Everything you need in one platform
                    </p>
                </div>
                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const images = feature.image
                        return (
                            <div
                                key={index} className="rounded-xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                                {/* Icon */}
                                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-blue-100">
                                    <Image src={feature.image} alt={feature.title} width={80} height={80} loading="lazy" fetchPriority="low" className='object-contain' />
                                </div>
                                {/* Content */}
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features