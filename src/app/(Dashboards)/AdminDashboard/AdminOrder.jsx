import React from "react";

const AdminOrder = ({ orders }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-orange-50">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Orders</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-slate-500 bg-slate-100">
            <tr>
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Customer Name</th>
              <th className="py-2 px-4">Kitchen Name</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-sm text-slate-800">
                  #{order.id}
                </td>
                <td className="py-3 px-4">{order.customerName}</td>
                <td className="py-3 px-4">{order.kitchenName}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex px-2 py-1 rounded-full text-[11px] ${getStatusClasses(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4 font-semibold text-slate-900">
                  ৳ {order.amount.toLocaleString("en-BD")}
                </td>
                <td className="py-3 px-4 flex gap-2">
                  <button className="text-xs px-3 py-1 rounded border border-slate-200 text-slate-600 hover:bg-slate-50">
                    View
                  </button>
                  <button className="text-xs px-3 py-1 rounded border border-slate-200 text-slate-600 hover:bg-slate-50">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Helper function to determine the order status classes
const getStatusClasses = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-green-50 text-green-700";
    case "On the way":
      return "bg-yellow-50 text-yellow-700";
    case "Preparing":
    default:
      return "bg-slate-100 text-slate-700";
  }
};

export default AdminOrder;
