function CurrentPlanCard() {
  return (
    <div className="bg-white rounded-xl border p-6 flex flex-col justify-between">
      {/* Title */}
      <h3 className="text-sm font-medium text-gray-500 mb-4">
        Current Plan
      </h3>

      {/* Plan box */}
      <div className="rounded-lg bg-gray-50 p-4 border">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-indigo-100 text-indigo-600">
            Pro
          </span>
          <span className="font-medium text-gray-900">
            Pro Plan
          </span>
        </div>

        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Up to 10 Projects</li>
          <li>• Priority Support</li>
          <li>• Analytics</li>
        </ul>
      </div>

      {/* Action */}
      <div className="flex justify-end mt-6">
        <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
          Upgrade
        </button>
      </div>
    </div>
  );
}

export default CurrentPlanCard