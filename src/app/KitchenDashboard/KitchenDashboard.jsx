// KitchenDashboard.jsx
"use client";
import React, { useMemo } from "react";

const KitchenDashboard = ({
  orders = [],
  customers = [],
  riders = [],
  menu = [],
  reviews = [],
  revenueData = [],

  kitchenStatus = "Inactive", // "Active" | "Inactive"
  onToggleKitchen = () => {},
  onToggleMenuItem = () => {},
}) => {
  const monthEarnings = useMemo(
    () => revenueData.reduce((sum, r) => sum + (Number(r.earnings) || 0), 0),
    [revenueData]
  );

  const orderSummary = useMemo(() => {
    const total = orders.length;
    const delivered = orders.filter((o) => o.status?.toLowerCase() === "delivered").length;
    const preparing = orders.filter((o) => o.status?.toLowerCase() === "preparing").length;
    const onTheWay = orders.filter((o) => o.status?.toLowerCase() === "on the way").length;
    return { total, delivered, preparing, onTheWay };
  }, [orders]);

  const menuSummary = useMemo(() => {
    const total = menu.length;
    const available = menu.filter((m) => m.status?.toLowerCase() === "available").length;
    const unavailable = total - available;
    return { total, available, unavailable };
  }, [menu]);

  const currentOrders = useMemo(() => {
    const current = orders.filter((o) => o.status?.toLowerCase() !== "delivered");
    return current.slice(0, 5);
  }, [orders]);

  const latestReviews = useMemo(() => reviews.slice(0, 4), [reviews]);

  const isKitchenActive = kitchenStatus === "Active";

  return (
    <div className="space-y-6">
      {/* TOP: Kitchen Activation */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Kitchen Overview</h2>
            <p className="text-xs text-slate-500 mt-1">
              First activate your kitchen, then choose which menu items you want to sell.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`text-xs px-3 py-1 rounded-full border ${
                isKitchenActive
                  ? "bg-emerald-950/10 text-emerald-900 border-emerald-900/20"
                  : "bg-rose-950/10 text-rose-900 border-rose-900/20"
              }`}
            >
              Status: {kitchenStatus}
            </span>

            {/* ✅ Dark Green / Dark Red button */}
            <button
              type="button"
              onClick={() => onToggleKitchen(isKitchenActive ? "Inactive" : "Active")}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isKitchenActive
                  ? "bg-rose-800 text-white hover:bg-rose-900 focus:ring-rose-300"
                  : "bg-emerald-800 text-white hover:bg-emerald-900 focus:ring-emerald-300"
              }`}
            >
              {isKitchenActive ? "Deactivate Kitchen" : "Activate Kitchen"}
            </button>
          </div>
        </div>

        {!isKitchenActive && (
          <div className="mt-4 p-4 rounded-xl bg-orange-50 border border-orange-100">
            <p className="text-sm font-semibold text-slate-900">Kitchen is currently inactive</p>
            <p className="text-xs text-slate-600 mt-1">Turn on your kitchen to start receiving orders.</p>
          </div>
        )}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="p-4 rounded-xl bg-white border border-orange-50 shadow-sm">
          <p className="text-xs text-slate-600">Total Orders</p>
          <p className="text-2xl font-extrabold text-slate-900">{orderSummary.total}</p>
          <p className="text-[11px] text-slate-500 mt-1">
            Preparing: <span className="font-semibold">{orderSummary.preparing}</span> • On the way:{" "}
            <span className="font-semibold">{orderSummary.onTheWay}</span>
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-orange-50 shadow-sm">
          <p className="text-xs text-slate-600">Customers</p>
          <p className="text-2xl font-extrabold text-slate-900">{customers.length}</p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-orange-50 shadow-sm">
          <p className="text-xs text-slate-600">Riders</p>
          <p className="text-2xl font-extrabold text-slate-900">{riders.length}</p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-orange-50 shadow-sm">
          <p className="text-xs text-slate-600">Menu Items</p>
          <p className="text-2xl font-extrabold text-slate-900">{menuSummary.total}</p>
          <p className="text-[11px] text-slate-500 mt-1">
            Available: <span className="font-semibold">{menuSummary.available}</span> • Hidden:{" "}
            <span className="font-semibold">{menuSummary.unavailable}</span>
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-orange-50 shadow-sm">
          <p className="text-xs text-slate-600">Reviews</p>
          <p className="text-2xl font-extrabold text-slate-900">{reviews.length}</p>
        </div>
      </div>

      {/* MENU QUICK CONTROL */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Menu Control</h3>
            <p className="text-xs text-slate-500 mt-1">
              You can keep some items unavailable if you don’t want to sell them today.
            </p>
          </div>

          <span className="text-xs px-3 py-1 rounded-full border bg-slate-50 text-slate-600 border-slate-200">
            Available: {menuSummary.available}/{menuSummary.total}
          </span>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-orange-50 text-slate-600">
              <tr>
                <th className="py-3 px-4">Item</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {menu.slice(0, 6).map((item) => {
                const isAvailable = item.status?.toLowerCase() === "available";
                return (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-900">{item.name}</td>
                    <td className="py-3 px-4">{Number(item.price).toLocaleString("en-BD")} ৳</td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full border ${
                          isAvailable
                            ? "bg-emerald-950/10 text-emerald-900 border-emerald-900/20"
                            : "bg-slate-50 text-slate-600 border-slate-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="py-3 px-4">
                      {/* ✅ Dark Green / Dark Red button */}
                      <button
                        type="button"
                        disabled={!isKitchenActive}
                        onClick={() => onToggleMenuItem(item.id, isAvailable ? "Unavailable" : "Available")}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          !isKitchenActive
                            ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                            : isAvailable
                            ? "bg-rose-800 text-white hover:bg-rose-900 focus:ring-rose-300"
                            : "bg-emerald-800 text-white hover:bg-emerald-900 focus:ring-emerald-300"
                        }`}
                      >
                        {isAvailable ? "Hide" : "Make Available"}
                      </button>

                      {!isKitchenActive && (
                        <p className="text-[10px] text-slate-400 mt-1">Activate kitchen first</p>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {menu.length > 6 && (
            <p className="text-xs text-slate-500 mt-3">
              Showing 6 items. Go to <span className="font-semibold">Menu</span> to manage all.
            </p>
          )}
        </div>
      </div>

      {/* CURRENT ORDERS + LATEST REVIEWS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Orders */}
        <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Current Orders</h3>
            <span className="text-xs px-3 py-1 rounded-full border bg-slate-50 text-slate-600 border-slate-200">
              Active: {currentOrders.length}
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {currentOrders.length === 0 ? (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-600">
                No current orders right now.
              </div>
            ) : (
              currentOrders.map((o) => (
                <div
                  key={o.id}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{o.customerName}</p>
                    <p className="text-xs text-slate-500">
                      Order <span className="font-mono">{o.id}</span> • {o.date || "—"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">
                      {Number(o.amount || 0).toLocaleString("en-BD")} ৳
                    </p>
                    <p className="text-xs text-orange-600 font-semibold">{o.status}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Latest Reviews */}
        <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Latest Reviews</h3>
            <span className="text-xs px-3 py-1 rounded-full border bg-slate-50 text-slate-600 border-slate-200">
              Total: {reviews.length}
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {latestReviews.length === 0 ? (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-600">
                No reviews yet.
              </div>
            ) : (
              latestReviews.map((r) => (
                <div key={r.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">{r.customerName}</p>
                    <p className="text-xs text-slate-500 font-mono">Order: {r.orderId}</p>
                  </div>
                  <p className="text-xs text-orange-600 font-semibold mt-1">Rating: {r.rating}/5</p>
                  <p className="text-xs text-slate-600 mt-2">{r.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Revenue Snapshot */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-sm font-semibold text-slate-900">Revenue Snapshot</p>
        <p className="text-xs text-slate-600 mt-1">
          Days tracked: <span className="font-semibold">{revenueData.length}</span> • Total (shown):{" "}
          <span className="font-semibold">{monthEarnings.toLocaleString("en-BD")} ৳</span>
        </p>
      </div>
    </div>
  );
};

export default KitchenDashboard;
