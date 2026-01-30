import { VisaLogo } from "@/components/ui/visaLogo";

export default function BillingPage() {
    return (
        <div className="min-h-screen bg-transparent px-4 py-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Billing
                    </h1>
                </div>

                {/* Current Plan */}
                <div className="rounded-xl border bg-white p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Current Plan
                    </h2>

                    <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <span className="inline-flex rounded-md bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                                Pro Plan
                            </span>

                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600">
                                <li>Up to 10 Projects</li>
                                <li>Priority Support</li>
                                <li>Analytics</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
                            <button className="rounded-lg border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                Cancel Subscription
                            </button>

                            <div className="flex items-center gap-3">
                                <button className="w-full sm:w-auto rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                                    Manage Plan
                                </button>
                                <VisaLogo className="h-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Information */}
                <div className="rounded-xl border bg-white p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Payment Information
                    </h2>

                    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <span className="rounded bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                                VISA
                            </span>

                            <div className="text-sm text-gray-700">
                                **** **** **** 4242
                                <div className="text-xs text-gray-500">Exp: 04/25</div>
                            </div>
                        </div>

                        <button className="w-full sm:w-auto rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                            Update Payment Method
                        </button>
                    </div>
                </div>

                {/* Invoice History */}
                <div className="rounded-xl border bg-white p-5 sm:p-6">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Invoice History
                        </h2>

                        <span className="text-sm text-gray-500">
                            Rows per page: <b>5</b> · 1–5 of 21
                        </span>
                    </div>

                    {/* Scroll on mobile */}
                    <div className="-mx-4 overflow-x-auto sm:mx-0">
                        <table className="min-w-160 w-full border-collapse text-sm">
                            <thead>
                                <tr className="border-b text-left text-gray-500">
                                    <th className="py-3 px-4 sm:px-0">Invoice ID</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th className="text-right px-4 sm:px-0">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    { id: "#1003", date: "May 1, 2024", status: "Unpaid" },
                                    { id: "#1002", date: "April 20, 2024", status: "Paid" },
                                    { id: "#1001", date: "April 1, 2024", status: "Paid" },
                                    { id: "#0005", date: "March 15, 2024", status: "Paid" },
                                    { id: "#0004", date: "February 28, 2024", status: "Paid" },
                                ].map((invoice) => (
                                    <tr key={invoice.id} className="border-b last:border-0">
                                        <td className="py-3 px-4 sm:px-0 font-medium text-gray-900">
                                            {invoice.id}
                                        </td>
                                        <td className="text-gray-600">{invoice.date}</td>
                                        <td className="font-medium">$29.00</td>
                                        <td>
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${invoice.status === "Paid"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                    }`}
                                            >
                                                {invoice.status}
                                            </span>
                                        </td>
                                        <td className="text-right px-4 sm:px-0">
                                            <button className="text-indigo-600 hover:underline">
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex items-center justify-end gap-2 text-sm text-gray-500">
                        <button className="rounded px-2 py-1 hover:bg-gray-100">‹</button>
                        <button className="rounded bg-indigo-600 px-3 py-1 text-white">
                            1
                        </button>
                        <button className="rounded px-3 py-1 hover:bg-gray-100">
                            2
                        </button>
                        <button className="rounded px-2 py-1 hover:bg-gray-100">›</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
