'use client'
import { AVATAR } from '@/constants/images'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const testimonials = [
    {
        name: 'John Doe',
        role: 'CEO of TechCorp',
        image: AVATAR.AVATAR_1,
        quote: 'This platform transformed our business. Highly recommend!',
    },
    {
        name: 'Sarah Lee',
        role: 'Product Manager',
        image: AVATAR.AVATAR_2,
        quote: 'Amazing UX and powerful features. Our team loves it.',
    },
    {
        name: 'Michael Chen',
        role: 'Founder, Startly',
        image: AVATAR.AVATAR_3,
        quote: 'Helped us scale faster with less effort. Great SaaS!',
    },
    {
        name: 'Aisha Khan',
        role: 'CTO, InnovateX',
        image: AVATAR.AVATAR_4,
        quote: 'Clean design, solid performance, and great support.',
    },
]

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1)
        }, 5000)
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [])

    const prev = () => {
        if (timerRef.current) clearInterval(timerRef.current)
        setIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)
    }

    const next = () => {
        if (timerRef.current) clearInterval(timerRef.current)
        setIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1)
    }

    return (
        <section className="relative bottom-38 md:bottom-0 py-0 md:py-10 bg-transparent">
            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    What Our Customers Say
                </h2>
                {/* Slider */}
                <div className="relative mt-12">
                    {/* Card */}
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${index * 100}%)` }}>
                            {testimonials.map((item, i) => (
                                <div key={i} className="min-w-full px-4">
                                    <div className="rounded-xl bg-white py-2 px-8 shadow-[0_15px_10px_rgba(0,0,0,0.12)]">
                                        <p className="relative p-2 md:p-0 top-14 md:top-14 ml-16 text-gray-600 text-sm md:text-lg italic">
                                            “{item.quote}”
                                        </p>
                                        <div className="relative bottom-2 md:bottom-0 h-16 md:h-22 w-16 md:w-22 aspect-square overflow-hidden rounded-lg bg-gray-100">
                                            <Image src={item.image} alt={item.name} fill sizes="48px" className="object-cover" />
                                        </div>
                                        <div className="text-center mb-4 md:mb-0 ml-14 md:ml-0 md:text-left">
                                            <p className="font-semibold text-gray-900">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Arrows */}
                    <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-blue-50">
                        <ChevronLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-blue-50">
                        <ChevronRight className="h-5 w-5 text-gray-700" />
                    </button>
                </div>
                {/* Dots */}
                <div className="mt-6 flex justify-center gap-2">
                    {testimonials.map((_, i) => (
                        <span key={i} className={`h-2 w-2 rounded-full transition ${i === index ? 'bg-blue-600' : 'bg-gray-300'}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials