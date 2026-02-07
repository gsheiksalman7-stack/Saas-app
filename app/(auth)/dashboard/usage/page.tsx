"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from "recharts";
import { Bell, Search, Info } from "lucide-react";
/* ------------------ mock data ------------------ */
const usageTrend = [
    { day: "Apr 1", value: 180 },
    { day: "Apr 5", value: 240 },
    { day: "Apr 10", value: 210 },
    { day: "Apr 15", value: 280 },
    { day: "Apr 20", value: 260 },
    { day: "Apr 25", value: 320 },
    { day: "Apr 30", value: 350 },
];

const dailyBreakdown = [
    { day: "Mon", value: 120 },
    { day: "Tue", value: 140 },
    { day: "Wed", value: 180 },
    { day: "Thu", value: 200 },
    { day: "Fri", value: 260 },
    { day: "Sat", value: 110 },
    { day: "Sun", value: 130 },
];

const apiKeys = [
    { key: "99a7c4f…", requests: 3210, lastUsed: "5 mins ago" },
    { key: "87ab2e5…", requests: 1470, lastUsed: "1 hour ago" },
    { key: "61dc992…", requests: 840, lastUsed: "2 days ago" },
];

const todayRequestsTrend = [
    { v: 420 },
    { v: 380 },
    { v: 410 },
    { v: 460 },
    { v: 520 },
    { v: 580 },
    { v: 642 },
];

const latencyTrend = [
    { v: 340 },
    { v: 330 },
    { v: 325 },
    { v: 335 },
    { v: 328 },
    { v: 322 },
    { v: 320 },
];

const errorTrend = [
    { v: 8 },
    { v: 12 },
    { v: 10 },
    { v: 14 },
    { v: 9 },
    { v: 11 },
    { v: 15 },
];

const monthlyLimitTrend = [
  { v: 520 },
  { v: 535 },
  { v: 550 },
  { v: 565 },
  { v: 585 },
  { v: 610 },
  { v: 642 },
];

/* ------------------ page ------------------ */
export default function ApiUsagePage() {
    return (
        <div className="min-h-screen bg-transparent">
            {/* Header */}
            <header className="flex items-center justify-between px-8 py-3.5 border-b bg-transparent">
                <h1 className="text-2xl font-semibold">API Usage</h1>
            </header>

            <main className="p-4 space-y-8">
                {/* Top stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <StatCard title="Requests This Month">
                        <p className="text-3xl font-bold">6,530 / 10,000</p>
                        <Progress value={65} />
                        <p className="text-sm text-blue-600 mt-2">65% of limit used</p>
                    </StatCard>

                    <StatCard title="Requests Today">
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-bold">642</p>
                            <p className="text-sm text-emerald-600 mt-1">▲ 110%</p>
                        </div>
                        <MiniAreaChart
                            data={todayRequestsTrend}
                            color="#22c55e"
                        />
                    </StatCard>

                    <StatCard title="Average Latency">
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-bold">320 ms</p>
                            <p className="text-sm text-indigo-600 mt-1">▼ 5ms</p>
                        </div>
                        <MiniAreaChart
                            data={latencyTrend}
                            color="#6366f1"
                        />
                    </StatCard>

                    <StatCard title="Errors Today">
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-bold">15</p>
                            <p className="text-sm text-orange-600 mt-1">0.2%</p>
                        </div>
                        <MiniAreaChart
                            data={errorTrend}
                            color="#f97316"
                        />
                    </StatCard>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* API Requests */}
                    <div className="xl:col-span-2 bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-semibold">API Requests</h2>
                            <div className="flex gap-2">
                                <FilterButton active>Last 30 Days</FilterButton>
                                <FilterButton>Last 7 Days</FilterButton>
                                <FilterButton>All Time</FilterButton>
                            </div>
                        </div>

                        <ResponsiveContainer width="100%" height={280}>
                            <LineChart data={usageTrend}>
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Monthly Limit */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <h2 className="font-semibold">Monthly Limit</h2>
                                <Info className="h-4 w-4 text-gray-400" />
                            </div>

                            <button className="text-sm px-3 py-1 rounded-lg bg-slate-100 text-gray-600">
                                Export
                            </button>
                        </div>
                        <div className='flex justify-between items-center'>
                        <p className="text-3xl font-bold">642</p>
                        <p className="text-sm text-emerald-600 mb-4">▲ 10%</p>
                        </div>

                        {/* Sparkline */}
                        <MiniAreaChart
                            data={monthlyLimitTrend}
                            color="#22c55e"   // blue like the image
                            height={80}
                        />

                        <div className="mt-6 border-t pt-4">
                            <p className="text-sm text-gray-500">Last Week</p>
                            <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold">320 ms</p>
                            <p className="text-sm text-indigo-600">▼ 5ms</p>
                            </div>
                            <MiniAreaChart
                            data={latencyTrend}
                            color="#6366f1"
                        />
                        </div>
                    </div>

                </div>

                {/* Bottom section */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {/* Daily Breakdown */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="font-semibold mb-4">Daily Breakdown</h2>

                        <ResponsiveContainer width="100%" height={220}>
                            <BarChart data={dailyBreakdown}>
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#93c5fd" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Most Active API Keys */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="font-semibold mb-4">Most Active API Keys</h2>

                        <table className="w-full text-sm">
                            <thead className="text-left text-gray-500">
                                <tr>
                                    <th>API Key</th>
                                    <th>Requests</th>
                                    <th>Last Used</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {apiKeys.map((k) => (
                                    <tr key={k.key}>
                                        <td className="py-3 font-medium">{k.key}</td>
                                        <td className="py-3">{k.requests}</td>
                                        <td className="py-3 text-gray-500">{k.lastUsed}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

/* ------------------ components ------------------ */

function StatCard({ title, children, }: { title: string; children: React.ReactNode; }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-2">{title}</p>
            {children}
        </div>
    );
}

function Progress({ value }: { value: number }) {
    return (
        <div className="w-full h-2 bg-slate-200 rounded-full mt-3">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${value}%` }} />
        </div>
    );
}

function FilterButton({ children, active, }: { children: React.ReactNode; active?: boolean; }) {
    return (
        <button
            className={`px-3 py-1 rounded-lg text-sm ${active ? "bg-blue-600 text-white" : "bg-slate-100 text-gray-600"}`}>
            {children}
        </button>
    );
}

function MiniAreaChart({
  data,
  color,
  height = 60,
}: {
  data: { v: number }[];
  color: string;
  height?: number;
}) {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <Area
            type="monotone"
            dataKey="v"
            stroke={color}
            fill={color}
            fillOpacity={0.12}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}


