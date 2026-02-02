"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Bell, Search, Chrome, Facebook, Twitter, Linkedin, } from "lucide-react";

const salesData = [
  { name: "Apr 1", thisMonth: 800, lastMonth: 500 },
  { name: "Apr 8", thisMonth: 2200, lastMonth: 1200 },
  { name: "Apr 15", thisMonth: 3600, lastMonth: 2000 },
  { name: "Apr 22", thisMonth: 5200, lastMonth: 3800 },
  { name: "Apr 30", thisMonth: 5800, lastMonth: 4200 },
];

const userGrowth = [
  { name: "Jan", users: 120 },
  { name: "Feb", users: 220 },
  { name: "Mar", users: 300 },
  { name: "Apr", users: 420 },
  { name: "May", users: 620 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen pb-4 md:pb-0 bg-transparent">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-3.5 border-b bg-white">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </header>

      <main className="p-4 md:p-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard title="Total Revenue" value="$12,540" sub="+15% This Month" color="from-emerald-500 to-emerald-700" />
          <StatCard title="New Users" value="1,250" sub="+8% This Month" color="from-blue-500 to-blue-700" />
          <StatCard title="Active Subscriptions" value="3,452" sub="+2% This Month" color="from-purple-500 to-purple-700" />
          <StatCard title="Support Tickets" value="87" sub="5 Open" color="from-orange-500 to-orange-700" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Sales Overview */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold mb-4">Sales Overview</h2>

            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={salesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="thisMonth" stroke="#2563eb" strokeWidth={3} />
                <Line type="monotone" dataKey="lastMonth" stroke="#94a3b8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* User Growth */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">User Growth</h2>
              <span className="text-sm bg-slate-100 px-3 py-1 rounded-lg">
                +320 This Month
              </span>
            </div>

            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={userGrowth}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#7c3aed" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Jane Smith upgraded to Pro Plan</span>
                <span className="text-gray-500">2 hours ago</span>
              </li>
              <li className="flex justify-between">
                <span>New ticket from Mike Johnson</span>
                <span className="text-gray-500">5 hours ago</span>
              </li>
              <li className="flex justify-between">
                <span>Payment of $299 received</span>
                <span className="text-gray-500">1 day ago</span>
              </li>
              <li className="flex justify-between">
                <span>Server maintenance completed</span>
                <span className="text-gray-500">2 days ago</span>
              </li>
              <li className="flex justify-between">
                <span>Anna Lee registered an account</span>
                <span className="text-gray-500">3 days ago</span>
              </li>
            </ul>
          </div>

          {/* Top Referrals */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold mb-4">Top Referrals</h2>
            <table className="w-full text-sm">
              <tbody className="divide-y">
                <Row icon={<Chrome className="h-4 w-4 text-blue-500" />} source="Google" clicks="1,024" />
                <Row icon={<Facebook className="h-4 w-4 text-blue-600" />} source="Facebook" clicks="768" />
                <Row icon={<Twitter className="h-4 w-4 text-sky-500" />} source="Twitter"
                  clicks="430" />
                <Row icon={<Linkedin className="h-4 w-4 text-blue-700" />} source="LinkedIn" clicks="310"
                />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, sub, color }: { title: string; value: string; sub: string; color: string; }) {
  return (
    <div className={`rounded-xl p-6 text-white bg-linear-to-br ${color}`}>
      <p className="text-sm opacity-90">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
      <p className="text-sm mt-2 opacity-90">{sub}</p>
    </div>
  );
}

function Row({ icon, source, clicks,}: { icon: React.ReactNode; source: string; clicks: string;}) {
  return (
    <tr>
      <td className="py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
            {icon}
          </span>
          <span className="font-medium">{source}</span>
        </div>
      </td>
      <td className="py-3 text-right font-semibold">{clicks}</td>
    </tr>
  );
}

