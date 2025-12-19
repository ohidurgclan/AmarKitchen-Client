import React from "react";

const Orders = ({ orders }) => {
  const handleCancelOrder = (orderId) => {
    // Handle order cancellation logic here
    alert(`Order ${orderId} has been cancelled.`);
  };

  const handleViewOrder = (orderId) => {
    // Handle view order logic here (maybe navigate to an order detail page)
    alert(`Viewing details of order ${orderId}`);
  };

  return (
    <div>
      <h2>Orders</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Order ID</th>
            <th className="px-4 py-2 text-left">Customer</th>
            <th className="px-4 py-2 text-left">Kitchen</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t border-gray-200">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.customerName}</td>
              <td className="px-4 py-2">{order.kitchenName}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-flex px-2 py-1 rounded-full text-[11px] ${
                    order.status === "Delivered"
                      ? "bg-green-50 text-green-700"
                      : order.status === "On the way"
                      ? "bg-yellow-50 text-yellow-700"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-4 py-2 font-semibold">৳ {order.amount}</td>
              <td className="px-4 py-2 flex gap-2">
                {/* View button */}
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  onClick={() => handleViewOrder(order.id)}
                >
                  View
                </button>

                {/* Cancel button (only visible if the order is "Preparing") */}
                {order.status === "Preparing" && (
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    onClick={() => handleCancelOrder(order.id)}
                  >
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
