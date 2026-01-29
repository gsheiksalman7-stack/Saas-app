import DashboardSidebar from "@/components/dashboard-sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) redirect("/login");
    if (session.user.role !== "user") redirect("/admin");

    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardSidebar />
            <main className='flex-1 p-6 md:ml-64'>{children}</main>
        </div>
    );
}
