'use client'
import PageLoader from '@/components/ui/pageLoader'
import { IMAGES } from '@/constants/images'
import { signupUser } from '@/lib/signupActions'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
    const router = useRouter()
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        const result = await signupUser(form)

        if (!result.ok) {
            setError(result.message)
            return
        }
        router.push('/login')
    }

    return (
        <>
            <div className="fixed inset-0 -z-10">
                <Image src={IMAGES.HOMEPAGE_IMG} alt="Background" fill className="object-cover" priority />
            </div>
            <div className="min-h-screen flex items-center justify-center bg-transparent mb-6 md:mb-0 px-4">
                {loading && <PageLoader text='Creating your account...' />}
                {/* Card */}
                <div className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] p-8 my-4">
                    {/* Header Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="h-14 w-14 rounded-full bg-indigo-500 flex items-center justify-center">
                            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a6.5 6.5 0 0113 0" />
                            </svg>
                        </div>
                    </div>
                    {/* Title */}
                    <h1 className="text-center text-2xl font-semibold text-slate-900">
                        Create Account
                    </h1>
                    <p className="text-center text-sm text-slate-600 mt-1">
                        Sign up to get started with your account.
                    </p>
                    {/* Form */}
                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        {/* Username */}
                        <div>
                            <input type="text" placeholder="Username" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </div>
                        {/* Email */}
                        <div>
                            <input type="email" placeholder="Email" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        </div>
                        {/* Password */}
                        <div>
                            <input type="password" placeholder="Password" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setForm({ ...form, password: e.target.value })} />
                        </div>
                        {/* Signup button */}
                        <button type="submit" className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition cursor-pointer">
                            Create account
                        </button>
                    </form>
                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-slate-200" />
                        <span className="px-3 text-xs text-slate-400">or</span>
                        <div className="flex-1 h-px bg-slate-200" />
                    </div>
                    {/* OAuth Buttons */}
                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 text-sm hover:bg-slate-50 transition">
                            <FcGoogle size={20} />
                            Continue with Google
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 text-sm hover:bg-slate-50 transition">
                            <FaGithub size={20} />
                            Continue with GitHub
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 text-sm hover:bg-slate-50 transition">
                            <FaLinkedin size={20} className="text-blue-600" />
                            Continue with LinkedIn
                        </button>
                    </div>
                    {/* Footer */}
                    <p className="mt-6 text-center text-sm text-slate-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-indigo-600 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUp