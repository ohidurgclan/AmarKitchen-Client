'use client'; // Ensure this is added for client-side rendering

import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Orders from "./Orders";
import Payments from "./Payments"; // Import other components

// === SAMPLE DATA (to be replaced with real API data later) ===
const orders = [
  { id: "AK-1001", kitchenName: "Dhaka Biryani House", status: "Delivered", amount: 780, date: "12 Dec, 2025" },
  { id: "AK-1002", kitchenName: "Pizza Point", status: "On the way", amount: 1250, date: "13 Dec, 2025" },
  { id: "AK-1003", kitchenName: "Burger Hub", status: "Preparing", amount: 620, date: "14 Dec, 2025" },
   { id: "AK-1004", kitchenName: "Burgergfgfgf Hub", status: "Preparing", amount: 620, date: "14 Dec, 2025" },
   { id: "AK-1005", kitchenName: "Burgergfgfgf Hub", status: "Preparing", amount: 620, date: "14 Dec, 2025" },
];

const customerInfo = {
  name: "Rahim Uddin",
  email: "rahim@example.com",
  phone: "0123456789",
};

const CustomerDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard"); // Active section to toggle between Dashboard, Profile, Orders, etc.

  const renderContent = () => {
    switch (activeSection) {
      case "orders":
        return <Orders orders={orders} />;
      case "profile":
        return <Profile customerInfo={customerInfo} />;
      case "payments":
        return <Payments />;
      case "dashboard":
        return <Dashboard orders={orders} />;
      default:
        return <h2>Welcome to Customer Dashboard</h2>;
    }
  };

  return (
    <div className="min-h-screen bg-[#fff7ef] flex">
      {/* SIDEBAR */}
      <aside className="hidden md:flex md:w-64 flex-col bg-white border-r border-orange-100">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-orange-100">
          <img src="Untitled-1.png" alt="Amarkitchen" className="h-8 object-contain" />
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-1 text-sm text-slate-700">
          <p className="px-3 text-[11px] font-semibold text-slate-400 mb-1">MAIN</p>
          <a
            href="#dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-orange-50 text-orange-600 font-semibold"
            onClick={() => setActiveSection("dashboard")}
          >
            <span>🏠</span>
            <span>Dashboard</span>
          </a>

          <p className="px-3 pt-4 text-[11px] font-semibold text-slate-400 mb-1">MY ACCOUNT</p>
          <a
            href="#profile"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("profile")}
          >
            <span>👤</span>
            <span>Profile</span>
          </a>
          <a
            href="#orders"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("orders")}
          >
            <span>🧾</span>
            <span>Orders</span>
          </a>
          <a
            href="#payments"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("payments")}
          >
            <span>💳</span>
            <span>Payments</span>
          </a>
        </nav>

        {/* User profile / logout */}
        <div className="border-t border-orange-100 px-4 py-3 flex items-center justify-between text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-700">Customer Panel</p>
            <p>{customerInfo.name}</p>
          </div>
          <button className="text-orange-500 font-semibold">Logout</button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b border-orange-100 flex items-center justify-between px-4 md:px-8">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">
              Customer Dashboard
            </h1>
            <p className="text-xs md:text-sm text-slate-500">Manage your orders, profile, and settings.</p>
          </div>
        </header>

        {/* MAIN BODY */}
        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-8">
          {/* RENDERING CONTENT BASED ON ACTIVE SECTION */}
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default CustomerDashboard;
