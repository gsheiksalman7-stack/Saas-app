import { IMAGES } from '@/constants/images'
import Image from 'next/image'
import React from 'react'
import Button from './ui/button'
import { FaPlayCircle } from 'react-icons/fa'

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* ===== MOBILE IMAGE ===== */}
            <div className="relative block md:hidden aspect-9/16">
                <Image src={IMAGES.HERO_MOBILE} alt="SaaS dashboard mobile illustration" fill priority sizes="100vw" className="object-cover" />
            </div>
            {/* ===== DESKTOP IMAGE ===== */}
            <div className="relative hidden md:block h-[90vh]">
                <Image src={IMAGES.HERO_DESKTOP} alt="SaaS dashboard illustration" fill priority sizes="1200px" quality={100} className="object-cover" /></div>
            {/* ===== OVERLAY ===== */}
            <div className="absolute inset-0 bg-linear-to-b" />
            {/* ===== TEXT ===== */}
            <div className="absolute inset-0 z-10 flex items-start pt-8 text-center md:text-left md:pt-10">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-26">
                    <div className="max-w-md md:max-w-xl text-white m-0 md:m-4">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl font-bold leading-tight mb-0 md:mb-6">
                            Grow your Business with our Powerful SaaS Platform
                        </h1>
                        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-200 mb-0 md:mb-6">
                            All-in-one solution to boost your productivity and streamline your workflow.
                        </p>
                        <div className='relative mt-4 md:mt-4'>
                            <Button />
                            <button
                                className="inline-flex items-center gap-3 rounded-lg border border-white/40 px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 md:bg-transparent md:backdrop-blur-sm transition md:hover:bg-white/10 ml-2 cursor-pointer">
                                {/* Play icon circle */}
                                <span className="flex w-5 items-center justify-center rounded-full">
                                    <FaPlayCircle size={14} className="text-white ml-0.5" />
                                </span>
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero