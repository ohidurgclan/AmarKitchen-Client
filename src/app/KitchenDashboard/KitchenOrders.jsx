// KitchenOrders.jsx
"use client";
import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";

const KitchenOrders = ({ orders = [] }) => {
  const [localOrders, setLocalOrders] = useState(orders);

  useEffect(() => {
    setLocalOrders(orders);
  }, [orders]);

  const badge = (status) => {
    const s = (status || "").toLowerCase();
    if (s === "delivered") return "bg-green-50 text-green-700 border-green-200";
    if (s === "on the way") return "bg-yellow-50 text-yellow-700 border-yellow-200";
    if (s === "preparing") return "bg-slate-100 text-slate-700 border-slate-200";
    if (s === "cancelled") return "bg-red-50 text-red-700 border-red-200";
    return "bg-slate-100 text-slate-700 border-slate-200";
  };

  const deliveredOrders = useMemo(
    () => localOrders.filter((o) => (o.status || "").toLowerCase() === "delivered"),
    [localOrders]
  );

  const activeOrders = useMemo(
    () =>
      localOrders.filter((o) => {
        const s = (o.status || "").toLowerCase();
        return s === "on the way" || s === "preparing";
      }),
    [localOrders]
  );

  const updateStatus = (orderId, nextStatus) => {
    setLocalOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: nextStatus } : o))
    );
  };

  const cancelOrder = (orderId) => {
    setLocalOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: "Cancelled" } : o))
    );
  };

  return (
    <div className="space-y-6">
      {/* ================= Current Orders ================= */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Current Orders</h2>
            <p className="text-xs text-slate-500 mt-1">Preparing / On the way</p>
          </div>
          <span className="text-xs text-slate-500">Total: {activeOrders.length}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-orange-50 text-slate-600">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {activeOrders.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 px-4 text-center text-slate-500">
                    No current orders found.
                  </td>
                </tr>
              ) : (
                activeOrders.map((o) => {
                  const statusLower = (o.status || "").toLowerCase();
                  const showStatusUpdate = statusLower === "preparing"; // ✅ only when preparing

                  return (
                    <tr key={o.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono text-slate-800">{o.id}</td>
                      <td className="py-3 px-4">{o.customerName}</td>

                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] border ${badge(
                            o.status
                          )}`}
                        >
                          {o.status}
                        </span>
                      </td>

                      <td className="py-3 px-4 font-semibold text-slate-900">
                        ৳ {Number(o.amount || 0).toLocaleString("en-BD")}
                      </td>

                      <td className="py-3 px-4">
                        {/* If Preparing -> Status Update + View + Cancel
                            If On the way -> View + Cancel (NO status update) */}
                        <div className="flex justify-end items-center gap-2">
                          {showStatusUpdate && (
                            <select
                              value={o.status}
                              onChange={(e) => updateStatus(o.id, e.target.value)}
                              className="text-xs px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-200"
                            >
                              <option value="Preparing">Preparing</option>
                              <option value="On the way">On the way</option>
                            </select>
                          )}

                          <Link
                            href={`/kitchen/orders/${o.id}`}
                            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
                          >
                            View
                          </Link>

                          <button
                            type="button"
                            onClick={() => cancelOrder(o.id)}
                            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-1"
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= Delivered Orders ================= */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Delivered Orders</h2>
            <p className="text-xs text-slate-500 mt-1">View only</p>
          </div>
          <span className="text-xs text-slate-500">Total: {deliveredOrders.length}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-orange-50 text-slate-600">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {deliveredOrders.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 px-4 text-center text-slate-500">
                    No delivered orders found.
                  </td>
                </tr>
              ) : (
                deliveredOrders.map((o) => (
                  <tr key={o.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono text-slate-800">{o.id}</td>
                    <td className="py-3 px-4">{o.customerName}</td>

                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] border ${badge(
                          o.status
                        )}`}
                      >
                        {o.status}
                      </span>
                    </td>

                    <td className="py-3 px-4 font-semibold text-slate-900">
                      ৳ {Number(o.amount || 0).toLocaleString("en-BD")}
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex justify-end">
                        <Link
                          href={`/kitchen/orders/${o.id}`}
                          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
                        >
                          View
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
    </div>
  );
};

export default KitchenOrders;
