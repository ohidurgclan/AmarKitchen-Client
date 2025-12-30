// Dashboard.jsx
"use client";

import React from "react";
import Link from "next/link";

const Dashboard = ({ orders, kitchens, ridersVerification, customers }) => {
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
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {/* ================= Overview Cards ================= */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Total Customers</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">
          {customers.length}
        </p>
        <p className="text-[11px] text-slate-500 mt-1">+230 this week</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Active Kitchens</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">
          {kitchens.length}
        </p>
        <p className="text-[11px] text-slate-500 mt-1">
          {kitchens.length} pending approval
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Today's Orders</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">
          {orders.length}
        </p>
        <p className="text-[11px] text-green-600 mt-1">
          +18% vs yesterday
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Riders Online</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">
          {ridersVerification.length}
        </p>
        <p className="text-[11px] text-slate-500 mt-1">
          Avg delivery: 27 min
        </p>
      </div>

      {/* ================= Latest Orders ================= */}
      <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm md:text-base font-semibold text-slate-900">
            Latest Orders
          </h2>
          <Link
            href="#orders"
            className="text-xs text-orange-500 font-semibold hover:underline"
          >
            View all orders
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm text-left">
            <thead className="text-slate-500 border-b border-slate-100">
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

      {/* ================= Kitchens & Riders ================= */}
      <div className="space-y-6 lg:grid lg:grid-rows-2">
        {/* Kitchens */}
        <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm md:text-base font-semibold text-slate-900">
              Kitchens (Pending Approval)
            </h2>
            <Link
              href="#kitchens"
              className="text-xs text-orange-500 font-semibold hover:underline"
            >
              Manage kitchens
            </Link>
          </div>

          <div className="space-y-2 text-xs md:text-sm">
            {kitchens.map((kitchen) => (
              <div
                key={kitchen.id}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-slate-900">
                    {kitchen.name}
                  </p>
                  <p className="text-slate-500 text-[11px]">
                    Requested: {kitchen.requestedDate}
                  </p>
                </div>

                <div className="flex gap-1">
                  <Link
                    href={`/admin/kitchens/${kitchen.id}/approve`}
                    className="rounded-lg bg-green-600 px-3 py-1 text-[11px] font-medium text-white hover:bg-green-700"
                  >
                    Approve
                  </Link>
                  <Link
                    href={`/admin/kitchens/${kitchen.id}/reject`}
                    className="rounded-lg bg-red-600 px-3 py-1 text-[11px] font-medium text-white hover:bg-red-700"
                  >
                    Reject
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Riders */}
        <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm md:text-base font-semibold text-slate-900">
              Riders (Verification)
            </h2>
            <Link
              href="#riders"
              className="text-xs text-orange-500 font-semibold hover:underline"
            >
              Manage riders
            </Link>
          </div>

          <div className="space-y-2 text-xs md:text-sm">
            {ridersVerification.map((rider) => (
              <div
                key={rider.id}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-slate-900">{rider.name}</p>
                  <p className="text-slate-500 text-[11px]">{rider.note}</p>
                </div>

                <div className="flex gap-1">
                  <button className="rounded-lg bg-green-600 px-3 py-1 text-[11px] font-medium text-white hover:bg-green-700">
                    Verify
                  </button>
                  <button className="rounded-lg bg-red-600 px-3 py-1 text-[11px] font-medium text-white hover:bg-red-700">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
