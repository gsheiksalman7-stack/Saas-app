'use client'
import AnimatedSectionRight from '@/components/ui/animated section-right';
import AnimatedSectionUp from '@/components/ui/animated-section-up';
import AnimatedSectionLeft from '@/components/ui/animation-section-left';
import { AVATAR, IMAGES } from '@/constants/images'
import Image from 'next/image'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const WHY_CHOOSE_US = [
  {
    title: "Experienced Team",
    description: "Delivering measurable business value.",
    image: IMAGES.EXPERIENCED_PNG,
  },
  {
    title: "Cutting-Edge Technology",
    description: "Modern tools for scalable growth.",
    image: IMAGES.CUTTING_PNG,
  },
  {
    title: "Customer Satisfaction",
    description: "We prioritize long-term success.",
    image: IMAGES.SATISFACTION_PNG,
  },
  {
    title: "Proven Results",
    description: "Trusted by businesses worldwide.",
    image: IMAGES.RESULTS_PNG,
  },
];

const LEADERS = [
  {
    name: "John Doe",
    role: "CEO",
    image: AVATAR.AVATAR_5,
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: AVATAR.AVATAR_6,
  },
  {
    name: "Mark Johnson",
    role: "CFO",
    image: AVATAR.AVATAR_7,
  },
  {
    name: "Sarah Lee",
    role: "COO",
    image: AVATAR.AVATAR_8,
  },
];

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
      mass: 0.8,
    },
  },
}


const About = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image src={IMAGES.HOMEPAGE_IMG} alt="Background" fill className="object-cover" priority />
      </div>
      <AnimatedSectionRight>
        <section className="pt-8 md:pt-14 pb-16 px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            About Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-md mx-auto">
            Learn more about our company, our mission, and our team.
          </p>
          <p className="mt-4 text-xs text-slate-400">
            Home / <span className="text-indigo-500">About Us</span>
          </p>
        </section>
      </AnimatedSectionRight>
      {/* ================= WHO WE ARE ================= */}
      <section className="px-4 py-4 max-w-7xl mx-auto grid gap-10 md:grid-cols-2 md:items-center">
        {/* Image */}
        <AnimatedSectionLeft>
          <div className="rounded-2xl bg-white/80 backdrop-blur shadow-lg">
            <Image src={IMAGES.ABOUT_IMG} alt="Company" width={500} height={380} className="rounded-xl w-full h-auto" />
          </div>
        </AnimatedSectionLeft>
        {/* Content */}
        <AnimatedSectionRight>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Who We Are
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              We build reliable SaaS products focused on performance, security,
              and great user experience for teams worldwide.
            </p>
            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { value: "10+", label: "Years" },
                { value: "500+", label: "Customers" },
                { value: "50k+", label: "Users" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-2xl font-bold text-indigo-600">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSectionRight>
      </section>

      <section className="px-4 py-16 max-w-7xl mx-auto grid gap-10 md:grid-cols-2 md:items-center">
        <AnimatedSectionLeft>
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Our Mission
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              To help businesses grow faster with modern, scalable and
              user-friendly technology.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Innovative Solutions",
                "Customer Focused",
                "Continuous Improvement",
                "Reliable Support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="h-5 w-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSectionLeft>
        <AnimatedSectionRight>
          <div className="order-1 md:order-2 rounded-2xl bg-white/80 backdrop-blur shadow-lg">
            <Image src={IMAGES.MISSION_IMG} alt="Mission" width={500} height={380} className="rounded-xl w-full h-auto" />
          </div>
        </AnimatedSectionRight>
      </section>
      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-4 py-3 md:py-10 max-w-7xl mx-auto">
        <AnimatedSectionUp>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-slate-900 mb-10">
            Why Choose Us
          </h2>
        </AnimatedSectionUp>
        <motion.div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4" variants={gridVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          {WHY_CHOOSE_US.map((item) => (
            <motion.div variants={cardVariants} key={item.title} className="rounded-2xl bg-white/80 backdrop-blur shadow-md p-4 sm:p-6 text-center transition hover:-translate-y-1">
              <div className="relative w-full h-28 sm:h-32 mb-4">
                <Image src={item.image} alt={item.title} fill className="object-contain" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mb-5 md:mb-0 px-4 py-6 max-w-7xl mx-auto">
        <AnimatedSectionRight>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-slate-900 mb-10">
            Our Leadership
          </h2>
        </AnimatedSectionRight>
        <motion.div className="grid gap-8 grid-cols-2 lg:grid-cols-4" variants={gridVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          {LEADERS.map((leader) => (
            <motion.div key={leader.name} variants={cardVariants} className="rounded-2xl bg-white/80 backdrop-blur shadow-md p-6 text-center">
              <Image src={leader.image} alt={leader.name} width={92} height={92} className="mx-auto rounded-full" />
              <h3 className="mt-4 font-semibold text-slate-900 text-sm">
                {leader.name}
              </h3>
              <p className="text-xs text-indigo-500">{leader.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}

export default About