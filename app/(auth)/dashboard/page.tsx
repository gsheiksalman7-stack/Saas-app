import CurrentPlanCard from "@/components/dashoard/current-plan-card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CurrentPlanCard />
        <StatCard title="API Usage" value="6,530 / 10,000" subtitle="65% used" />
        <StatCard title="Invoices" value="$89.00" subtitle="1 Due" action="Pay Invoice" />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Recent Activity">
          <ul className="space-y-3 text-sm text-gray-600">
            <li>API usage exceeded 80% — 2 days ago</li>
            <li>Payment of $29.00 for Pro Plan — Apr 20</li>
            <li>Support ticket responded — Apr 19</li>
          </ul>
        </Card>

        <Card title="Support Tickets">
          <p className="text-3xl font-semibold">1</p>
          <p className="text-sm text-gray-500">Open ticket</p>
        </Card>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Quick Actions">
          <div className="flex gap-3">
            <button className="btn-secondary">Invite Member</button>
            <button className="btn-secondary">Create Project</button>
          </div>
        </Card>

        <Card title="Upcoming Payment">
          <p className="text-sm text-gray-600">Due on May 15, 2024</p>
          <p className="text-2xl font-semibold">$29.00</p>
          <button className="btn-primary mt-4">Manage Billing</button>
        </Card>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  action,
}: {
  title: string;
  value: string;
  subtitle: string;
  action?: string;
}) {
  return (
    <div className="bg-white rounded-xl border p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>

      {action && (
        <button className="mt-4 px-4 py-2 rounded-lg bg-gray-100 text-sm hover:bg-gray-200 transition">
          {action}
        </button>
      )}
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border p-5">
      <h3 className="font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}