'use client'
import PageLoader from '@/components/ui/pageLoader'
import { IMAGES } from '@/constants/images'
import { getPasswordStrength } from '@/lib/passwordStrength'
import { signupUser } from '@/lib/signupActions'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
    const router = useRouter()
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        image: ''
    })
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<{ name?: string, email?: string, password?: string }>({})
    const [passwordStrength, setPasswordStrength] = useState<{ score: number, label: "Weak" | "Medium" | "Strong" } | null>(null)
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({})
        setLoading(true)

        const result = await signupUser(form)

        if (!result.ok) {
            setErrors(result.errors)
            setLoading(false)
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
                        {errors.name &&
                            <p className="text-sm font-bold text-red-600 text-center mt-2">
                                {errors.name}
                            </p>
                        }
                        {/* Email */}
                        <div>
                            <input type="email" placeholder="Email" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        </div>
                        {errors.email &&
                            <p className="text-sm font-bold text-red-600 text-center mt-2">
                                {errors.email}
                            </p>
                        }
                        {/* Password */}
                        <div className='relative'>
                            <div className="flex items-center w-full rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none"
                                    onChange={(e) => {
                                        const value = e.target.value
                                        setForm({ ...form, password: value })
                                        setPasswordStrength(value ? getPasswordStrength(value) : null)
                                    }}
                                />
                                {/* Eye icon */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="text-slate-500 hover:text-slate-700">
                                    {showPassword ? (
                                        // Eye OFF
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.956 9.956 0 012.64-6.675M6.18 6.18A9.956 9.956 0 0112 5c5.523 0 10 4.477 10 10a9.956 9.956 0 01-4.043 8.043M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 3l18 18"
                                            />
                                        </svg>
                                    ) : (
                                        // Eye ON
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {passwordStrength && (
                                <div className="mt-2">
                                    {/* Bar */}
                                    <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                                        <div className="h-full transition-all duration-300"
                                            style={{
                                                width: passwordStrength.label === "Strong"
                                                    ? "100%"
                                                    : passwordStrength.label === "Medium"
                                                        ? "66%"
                                                        : "33%",
                                                backgroundColor:
                                                    passwordStrength.label === "Strong"
                                                        ? "#22c55e" // green-500
                                                        : passwordStrength.label === "Medium"
                                                            ? "#eab308" // yellow-500
                                                            : "#ef4444", // red-500
                                            }}
                                        />
                                    </div>
                                    {/* Text */}
                                    <p className="mt-1 text-xs font-medium" style={{
                                        color:
                                            passwordStrength.label === "Strong"
                                                ? "#16a34a" // green-600
                                                : passwordStrength.label === "Medium"
                                                    ? "#ca8a04" // yellow-600
                                                    : "#dc2626", // red-600
                                    }}
                                    >
                                        Password strength: {passwordStrength.label}
                                    </p>
                                </div>
                            )}
                        </div>
                        {errors.password &&
                            <p className="text-sm font-bold text-red-600 text-center mt-2">
                                {errors.password}
                            </p>
                        }
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
                        <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 text-sm hover:bg-slate-50 transition">
                            <FcGoogle size={20} />
                            Continue with Google
                        </button>
                        <button onClick={() => signIn('github', { callbackUrl: '/dashboard' })} className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 text-sm hover:bg-slate-50 transition">
                            <FaGithub size={20} />
                            Continue with GitHub
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