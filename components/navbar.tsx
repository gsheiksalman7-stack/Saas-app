'use client'
import { useState } from "react"
import Button from "./ui/button"
import Link from "next/link"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="relative z-50 w-full bg-gray-50 border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href='/' className="flex items-center ml-12 gap-2">
                    <div className="h-8 w-8 bg-blue-600 rounded-md" />
                    <span className="font-bold text-lg">SaaSApp</span>
                </Link>
                {/* Center Links */}
                <div className="hidden md:flex items-center mx-24 gap-12 text-sm font-medium text-gray-600">
                    <Link href='/features' className="hover:text-black cursor-pointer">Features</Link>
                    <Link href='/subscriptions' className="hover:text-black cursor-pointer">Pricing</Link>
                    <Link href='/about' className="hover:text-black cursor-pointer">About</Link>
                    <Link href="/login" className="text-sm text-gray-600 hover:text-black">
                        Login
                    </Link>
                    <Button />
                </div>
                {/* Mobile Hamburger */}
                <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
                    ☰
                </button>
            </div>
            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-md">
                    <div className="flex justify-center items-center flex-col px-6 py-4 space-y-3 text-sm font-medium w-full ">
                        <Link href='/features' onClick={()=>setOpen(false)} className="hover:text-black text-center w-screen hover:bg-gray-300 p-2">Features</Link>
                        <Link href='/subscriptions' onClick={()=>setOpen(false)} className="hover:text-black text-center w-screen hover:bg-gray-300 p-2">Pricing</Link>
                        <a className="hover:text-black text-center w-screen hover:bg-gray-300 p-2">About</a>
                        <a href="/login" className="hover:text-black text-center w-screen hover:bg-gray-300 p-2">Login</a>
                        <a href="/register" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md w-screen">
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
