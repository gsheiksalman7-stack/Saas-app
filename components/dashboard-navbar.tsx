import Link from "next/link";

export default function DashboardNavbar() {
  return (
    <header className="h-16 border-b bg-white flex items-center px-6 justify-between">
      <h2 className="font-semibold">Dashboard</h2>

      <nav className="flex gap-6 text-sm text-gray-600">
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard/profile">Profile</Link>
        <Link href="/dashboard/settings">Settings</Link>
        <button className="text-red-500">Logout</button>
      </nav>
    </header>
  );
}
