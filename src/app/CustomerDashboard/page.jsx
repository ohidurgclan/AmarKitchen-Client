"use client";

import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Orders from "./Orders";
import Payments from "./Payments";

// ===== SAMPLE DATA (replace with API later) =====
const orders = [
  { id: "AK-1001", kitchenName: "Dhaka Biryani House", status: "Delivered", amount: 780, date: "12 Dec, 2025" },
  { id: "AK-1002", kitchenName: "Pizza Point", status: "On the way", amount: 1250, date: "13 Dec, 2025" },
  { id: "AK-1003", kitchenName: "Burger Hub", status: "Preparing", amount: 620, date: "14 Dec, 2025" },
];

const transactions = [
  { trxId: "TRX-9001", orderId: "AK-1001", paymentDate: "12 Dec, 2025", method: "bKash", status: "Paid", amount: 780 },
  { trxId: "TRX-9002", orderId: "AK-1002", paymentDate: "13 Dec, 2025", method: "Nagad", status: "Paid", amount: 1250 },
];

const customerInfo = {
  name: "Rahim Uddin",
  email: "rahim@example.com",
  phone: "0123456789",
};

export default function Page() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleLogout = () => {
    // later: clear token + redirect
    alert("Logged out!");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "orders":
        return <Orders orders={orders} />;
      case "profile":
        return <Profile customerInfo={customerInfo} />;
      case "payments":
        return <Payments transactions={transactions} />;
      case "dashboard":
        return <Dashboard orders={orders} />;
      default:
        return <h2 className="text-slate-800 font-semibold">Welcome to Customer Dashboard</h2>;
    }
  };

  const navBtn = (key) =>
    `w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition ${
      activeSection === key
        ? "bg-orange-50 text-orange-600 font-semibold"
        : "hover:bg-slate-50 text-slate-700"
    }`;

  return (
    <div className="min-h-screen bg-[#fff7ef] flex">
      {/* SIDEBAR (desktop only) */}
      <aside className="hidden md:flex md:w-64 flex-col bg-white border-r border-orange-100">
        <div className="h-16 flex items-center px-6 border-b border-orange-100">
          <img src="Untitled-1.png" alt="Amarkitchen" className="h-8 object-contain" />
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 text-sm">
          <p className="px-3 text-[11px] font-semibold text-slate-400 mb-1">MAIN</p>

          <button type="button" className={navBtn("dashboard")} onClick={() => setActiveSection("dashboard")}>
            <span>🏠</span>
            <span>Dashboard</span>
          </button>

          <p className="px-3 pt-4 text-[11px] font-semibold text-slate-400 mb-1">MY ACCOUNT</p>

          <button type="button" className={navBtn("profile")} onClick={() => setActiveSection("profile")}>
            <span>👤</span>
            <span>Profile</span>
          </button>

          <button type="button" className={navBtn("orders")} onClick={() => setActiveSection("orders")}>
            <span>🧾</span>
            <span>Orders</span>
          </button>

          <button type="button" className={navBtn("payments")} onClick={() => setActiveSection("payments")}>
            <span>💳</span>
            <span>Payments</span>
          </button>
        </nav>

        {/* Desktop logout */}
        <div className="border-t border-orange-100 px-4 py-3 flex items-center justify-between text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-700">Customer Panel</p>
            <p>{customerInfo.name}</p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="border border-orange-500 text-orange-600 font-semibold px-4 py-1.5 rounded-md hover:bg-orange-50 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-orange-100 flex items-center justify-between px-4 md:px-8">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">Customer Dashboard</h1>
            <p className="text-xs md:text-sm text-slate-500">Manage your orders, profile, and payments.</p>
          </div>

          {/* Mobile logout (because sidebar is hidden on mobile) */}
          <button
            type="button"
            onClick={handleLogout}
            className="md:hidden border border-orange-500 text-orange-600 font-semibold px-4 py-2 rounded-md hover:bg-orange-50 transition text-xs"
          >
            Logout
          </button>
        </header>

        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-8">{renderContent()}</main>
      </div>
    </div>
  );
}
