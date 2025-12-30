// AdminOrder.jsx
"use client";

import React from "react";
import Link from "next/link";

// Receive orders as a prop
const AdminOrder = ({ orders }) => {
  console.log(orders); // logs the orders array for debugging

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

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-orange-50">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Orders</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-orange-50 text-slate-600">
            <tr>
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Customer Name</th>
              <th className="py-2 px-4">Item Name</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4 text-center">Status</th>
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
                <tr li key={order.order_id} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono text-sm text-slate-800">
                    #{order.order_id}
                  </td>
                  <td className="py-3 px-4">{order.user_name}</td>
                  <td className="py-3 px-4">{order.item_name}</td>
                  <td className="py-3 px-4">{order.quantity}</td>



                  <td className="py-3 px-4 font-semibold text-slate-900">
                    ৳ {Number(order.totalprice || 0).toLocaleString("en-BD")}
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-[11px] ${getStatusClasses(
                        order.totalprice
                      )}`}
                    >
                      {order.status}
                    </span>
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

export default AdminOrder;