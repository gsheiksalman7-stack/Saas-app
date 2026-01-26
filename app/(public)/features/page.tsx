import FreeTrial from '@/components/freeTrial'
import Testimonials from '@/components/testimonials'
import { IMAGES } from '@/constants/images'
import Image from 'next/image'
import React from 'react'

const FEATURES = [
    {
        title: "Analytics Insights",
        description:
            "Track your performance with in-depth analytics and detailed reports.",
        image: IMAGES.INSIGHTS_PNG,
    },
    {
        title: "Team Collaboration",
        description:
            "Enhance teamwork with real-time collaboration tools for seamless communication.",
        image: IMAGES.COLLAB_PNG,
    },
    {
        title: "Automation Tools",
        description:
            "Save time by automating repetitive tasks workflows.",
        image: IMAGES.AUTOMATE_PNG,
    },
    {
        title: "Customizable Dashboard",
        description:
            "Build a custom dashboard to monitor the metrics that matter most to your business.",
        image: IMAGES.DASHBOARD_PNG,
    },
    {
        title: "Integrations & API",
        description:
            "Easily integrate with your favorite tools and extend functionality through our powerful API.",
        image: IMAGES.INTEGRATION_PNG,
    },
    {
        title: "Secure Data Protection",
        description:
            "Safeguard your data with industry-leading security measures compliance.",
        image: IMAGES.DATA_PNG,
    },
]

const FeaturesPage = () => {
    return (
        <>
            <div className="fixed inset-0 -z-10">
                <Image src={IMAGES.HOMEPAGE_IMG} alt="Background" fill className="object-cover" priority />
            </div>
            <section className="relative overflow-hidden bg-transparent mb-40 md:mb-0 py-10 md:py-10">
                {/* Decorative cloud background */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-24 left-1/2 h-125 w-300 -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
                    <div className="absolute top-40 left-1/2 h-150 w-350 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />
                </div>
                <div className="relative mx-auto max-w-7xl px-6">
                    {/* Header */}
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
                            Discover the Powerful Features
                            <br />
                            That Drive Your Success
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Everything you need to grow and manage your business efficiently and effectively.
                        </p>
                    </div>
                    {/* Features Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {FEATURES.map((feature) => (
                            <div key={feature.title} className="rounded-2xl bg-white px-8 py-10 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition hover:-translate-y-1">
                                <div className="mx-auto mb-6 flex h-26 w-26 items-center justify-center rounded-xl bg-indigo-50">
                                    <Image src={feature.image} alt={feature.title} width={106} height={106} />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Testimonials />
            <FreeTrial />
        </>
    )
}

export default FeaturesPage