// AdminOrder.jsx
"use client";

import React from "react";
import Link from "next/link";

const AdminOrder = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-orange-50">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Orders</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-orange-50 text-slate-600">
            <tr>
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Customer Name</th>
              <th className="py-2 px-4">Kitchen Name</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {orders.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 px-4 text-center text-slate-500">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
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
                    ৳ {Number(order.amount || 0).toLocaleString("en-BD")}
                  </td>

                  {/* ✅ Center aligned actions */}
                  <td className="py-3 px-4 text-center">
                    <div className="inline-flex gap-2">
                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
                      >
                        View
                      </Link>

                      <Link
                        href={`/admin/orders/${order.id}/edit`}
                        className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1"
                      >
                        Edit
                      </Link>
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
