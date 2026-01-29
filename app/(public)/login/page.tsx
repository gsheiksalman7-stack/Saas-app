'use client'
import PageLoader from '@/components/ui/pageLoader'
import { IMAGES } from '@/constants/images'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    const router = useRouter()
    const [form, setForm] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        const res = await signIn('credentials', {
            email: form.email,
            password: form.password,
            redirect: false
        })
        setLoading(false)

        if (!res || res.error) {
            setError('Invalid Email or Password')
            return
        }
        
        const sessionRes=await fetch('/api/auth/session')
        const session=await sessionRes.json()

        if(session?.user?.role === 'admin'){
            console.log('SESSION ROLE:',session.user.role)
            router.push('/admin')
        }else{
            router.push('/dashboard')
        }
    }
    return (
        <>
            <div className="fixed inset-0 -z-10">
                <Image src={IMAGES.HOMEPAGE_IMG} alt="Background" fill className="object-cover" priority />
            </div>
            <div className="min-h-screen mb-6 md:mb-6 py-8 flex items-center justify-center bg-transparent px-4">
                {loading && <PageLoader text='Signing in...' />}
                {/* Card */}
                <div className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] p-8">
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
                        Login
                    </h1>
                    <p className="text-center text-sm text-slate-600 mt-1">
                        Welcome back! Please enter your details.
                    </p>
                    {/* Form */}
                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        {/* Email */}
                        <div>
                            <label className="sr-only">Email</label>
                            <div className="relative">
                                <input type="email" placeholder="Email" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                            </div>
                        </div>
                        {/* Password */}
                        <div>
                            <label className="sr-only">Password</label>
                            <div className="relative">
                                <input type="password" placeholder="Password" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setForm({ ...form, password: e.target.value })} />
                                <Link href="/forgot-password" className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-indigo-500 hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        {error && (
                            <p className="text-sm text-red-600 text-center">{error}</p>
                        )}
                        {/* Sign in button */}
                        <button type="submit" disabled={loading} className={`w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition cursor-pointer ${loading
                            ? "bg-indigo-400 cursor-not-allowed"
                            : "bg-indigo-600 hover:bg-indigo-700"
                            }`}>
                            {loading ? 'Signing in...' : 'Sign in'}
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
                        <button className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 text-sm hover:bg-slate-50 transition cursor-pointer">
                            <FcGoogle size={20} />
                            Continue with Google
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 text-sm hover:bg-slate-50 transition cursor-pointer">
                            <FaGithub size={20} />
                            Continue with GitHub
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 text-sm hover:bg-slate-50 transition cursor-pointer">
                            <FaLinkedin size={20} className="text-blue-600" />
                            Continue with LinkedIn
                        </button>
                    </div>
                    {/* Footer */}
                    <p className="mt-6 text-center text-sm text-slate-600">
                        Don’t have an account?{" "}
                        <Link href="/signup" className="text-indigo-600 font-medium hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login