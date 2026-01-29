'use client'
interface ApiUsageCardProps {
    used: number,
    total: number
}

export default function ApiUsageCard({ used = 6530, total = 10000 }: ApiUsageCardProps) {
    const percentage = Math.round((used / total) * 100)

    return (
        <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.12)]">
            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-900">API Usage</h3>

            {/* Usage count */}
            <div className="mt-3 text-2xl font-bold text-gray-900">
                {used.toLocaleString()} <span className="text-gray-400">/ {total.toLocaleString()}</span>
            </div>

            <p className="mt-1 text-sm text-gray-500">API Requests used</p>

            {/* Progress bar */}
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {/* Percentage text */}
            <p className="mt-2 text-sm text-blue-600 font-medium">
                {percentage}% of limit used
            </p>
        </div>
    )
}