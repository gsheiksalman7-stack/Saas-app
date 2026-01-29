import ApiUsageCard from "@/components/dashboard/api-usage-card";
import CurrentPlanCard from "@/components/dashboard/current-plan-card";
import InvoicesCard from "@/components/dashboard/invoices-card";
import QuickActionsCard from "@/components/dashboard/quick-actions-card";
import RecentActivityCard from "@/components/dashboard/recent-activity-card";
import SupportTicketsCard from "@/components/dashboard/support-tickets-card";
import UpcomingPaymentCard from "@/components/dashboard/upcoming-payment-card";

export default function DashboardPage() {
  return (
    <div className="bg-transparent space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-900">
        Dashboard
      </h1>

      {/* Top Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <CurrentPlanCard />
        <ApiUsageCard used={6530} total={10000} />
        <InvoicesCard />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentActivityCard />
        <SupportTicketsCard />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <QuickActionsCard />
        <UpcomingPaymentCard />
      </div>
    </div>
  );
}