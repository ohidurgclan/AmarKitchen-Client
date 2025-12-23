"use client";

import React from "react";

const Orders = ({ orders = [] }) => {
  const handleCancelOrder = (orderId) => {
    alert(`Order ${orderId} has been cancelled.`);
  };

  const handleViewOrder = (orderId) => {
    alert(`Viewing details of order ${orderId}`);
  };

  const badge = (status) => {
    if (status === "Delivered")
      return "bg-green-50 text-green-700 border border-green-200";
    if (status === "On the way")
      return "bg-yellow-50 text-yellow-700 border border-yellow-200";
    if (status === "Preparing")
      return "bg-slate-50 text-slate-700 border border-slate-200";
    return "bg-slate-50 text-slate-700 border border-slate-200";
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Orders</h2>
          <p className="text-xs text-slate-500 mt-1">
            Total: <span className="font-semibold">{orders.length}</span>
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="bg-[#fff2e6] text-slate-600">
              <th className="px-6 py-4 font-semibold rounded-l-xl">Order ID</th>
              <th className="px-6 py-4 font-semibold">Customer</th>
              <th className="px-6 py-4 font-semibold">Kitchen</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Amount</th>
              <th className="px-6 py-4 font-semibold text-right rounded-r-xl">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-10 text-center text-slate-500"
                >
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr
                  key={order.id}
                  className="bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)] border border-slate-100"
                >
                  <td className="px-6 py-4 rounded-l-xl font-mono text-slate-800">
                    {order.id}
                  </td>

                  <td className="px-6 py-4 text-slate-800">
                    {order.customerName}
                  </td>

                  <td className="px-6 py-4 text-slate-800">
                    {order.kitchenName}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium ${badge(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right font-semibold text-slate-900">
                    ৳ {Number(order.amount || 0).toLocaleString("en-BD")}
                  </td>

                  <td className="px-6 py-4 text-right rounded-r-xl">
                    <div className="inline-flex items-center gap-2">
                      {/* View (Blue) */}
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
                        onClick={() => handleViewOrder(order.id)}
                      >
                        View
                      </button>

                      {/* Cancel (Red) - only Preparing */}
                      {order.status === "Preparing" && (
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-1"
                          onClick={() => handleCancelOrder(order.id)}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
