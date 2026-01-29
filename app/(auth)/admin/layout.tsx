import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import Footer from "@/components/footer";
import { adminNav, userNav } from "@/config/sidebar-nav";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();

    if (!session || session.user.role !== "admin") redirect("/login");

    const isAdmin = session?.user?.role === 'admin'

    return (
        <div className="min-h-screen bg-linear-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e9eef5] dark:from-[#0b1220] dark:via-[#0f172a] dark:to-[#020617]">
            <DashboardSidebar items={isAdmin ? adminNav : userNav} />
            <main className='flex-1 p-0 md:ml-64'>{children}</main>
            <div className="flex-1 p-4 md:p-0 md:ml-64"><Footer /></div>
        </div>
    );
}
