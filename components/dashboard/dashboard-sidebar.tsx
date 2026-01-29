"use client";
import Link from "next/link";
import { LogOut, Menu, X } from "lucide-react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { AVATAR } from "@/constants/images";
import { icons, NavItem } from "@/config/sidebar-nav";

export default function DashboardSidebar({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ✅ MOBILE TOP BAR */}
      <div className="md:hidden h-14 flex items-center justify-between px-4 border-b bg-white">
        <span className="font-semibold">Dashboard</span>
        <button onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </div>

      {/* ✅ OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ✅ SIDEBAR (DESKTOP + MOBILE SLIDE) */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-linear-to-b from-[#0f172a] via-[#111827] to-[#020617] text-slate-200
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:flex flex-col`}
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-transparent" />
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <span className="text-white font-semibold">SaaS</span>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* User */}
        <div className="px-6 py-4 border-b border-slate-800">
          <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-white/10">
            <Image src={AVATAR.AVATAR_1} alt="John Doe" fill className="object-cover" />
          </div>
          <p className="text-sm font-medium text-white">John Doe</p>
          <p className="text-xs text-slate-400">john@example.com</p>
        </div>


        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {items.map((item) => {
            const Icon = icons[item.icon]
            const active = pathname === item.href
            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={()=>setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${active ? "bg-slate-100 font-medium text-black" : "text-slate-600 hover:bg-slate-50"}`}>
                  <Icon size={18} />
                  {item.label}
                </Link >
              </div>
            )
          })}
        </nav >

        {/* Logout */}
        < div className="p-4 border-t border-slate-800" >
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg cursor-pointer">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

function NavLink({ href, icon, label, active, }: { href: string; icon: React.ReactNode; label: string; active: boolean; }) {
  return (
    <Link href={href} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
      ${active ? "bg-linear-to-r from-indigo-500/20 to-indigo-500/5 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}>
      {icon}
      {label}
    </Link>
  );
}
