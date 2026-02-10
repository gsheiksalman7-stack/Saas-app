import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children, }: { children: React.ReactNode }) {
    const session = await auth()
    console.log("SESSION IN LAYOUT:", session);
    
    if(!session) redirect('/login')

    return <>{children}</>

}