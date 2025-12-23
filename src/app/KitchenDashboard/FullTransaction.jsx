"use client";

export default function FullTransaction({ setActiveSection }) {
  const transactions = [
    {
      customerId: "C-1001",
      customerName: "Rahim Uddin",
      orderId: "AK-1001",
      orderDate: "2025-12-20",
      kitchenId: "K-201",
      riderName: "Kamal Hossain",
      orderAmount: 780,
      deliveryCharge: 60,
      companyRevenue: 120,
    },
    {
      customerId: "C-1002",
      customerName: "Shama Akter",
      orderId: "AK-1002",
      orderDate: "2025-12-21",
      kitchenId: "K-145",
      riderName: "Rafiul Islam",
      orderAmount: 1250,
      deliveryCharge: 80,
      companyRevenue: 180,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">
          Full Transaction Report
        </h2>

        <button
          onClick={() => setActiveSection("revenue")}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          ← Back to Revenue
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-separate border-spacing-y-2">
          <thead className="bg-orange-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Order Date</th>
              <th className="px-4 py-3 font-semibold">Customer ID</th>
              <th className="px-4 py-3 font-semibold">Customer</th>
              <th className="px-4 py-3 font-semibold">Order ID</th>
              <th className="px-4 py-3 font-semibold">Kitchen ID</th>
              <th className="px-4 py-3 font-semibold">Rider</th>
              <th className="px-4 py-3 font-semibold">Order Amount (৳)</th>
              <th className="px-4 py-3 font-semibold">Delivery (৳)</th>
              <th className="px-4 py-3 font-semibold">Company Revenue (৳)</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item, index) => (
              <tr
                key={index}
                className="bg-white shadow-sm border border-slate-100 rounded-lg"
              >
                <td className="px-4 py-3 font-mono text-xs">
                  {item.orderDate}
                </td>
                <td className="px-4 py-3 font-mono text-xs">
                  {item.customerId}
                </td>
                <td className="px-4 py-3 font-medium">
                  {item.customerName}
                </td>
                <td className="px-4 py-3 font-mono text-xs">
                  {item.orderId}
                </td>
                <td className="px-4 py-3 font-mono text-xs">
                  {item.kitchenId}
                </td>
                <td className="px-4 py-3">
                  {item.riderName}
                </td>
                <td className="px-4 py-3 font-semibold">
                  {item.orderAmount.toLocaleString("en-BD")}
                </td>
                <td className="px-4 py-3">
                  {item.deliveryCharge.toLocaleString("en-BD")}
                </td>
                <td className="px-4 py-3 font-semibold text-green-600">
                  {item.companyRevenue.toLocaleString("en-BD")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
