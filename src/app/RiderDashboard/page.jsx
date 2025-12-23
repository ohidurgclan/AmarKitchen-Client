"use client";

import React, { useState } from "react";
import Dashboard from "./Dashboard";
import AssignedDeliveries from "./AssignedDeliveries";
import Revenue from "./Revenue";
import Settings from "./Settings"; // ✅ create this component

const Page = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  // Deliveries DB (deliveries table)
  const [deliveries, setDeliveries] = useState([
    {
      id: "D-1001",
      customerName: "Rahim Uddin",
      kitchenName: "Dhaka Biryani House",
      status: "Assigned",
      amount: 780,
      earnings: 0,
      location: "Not Updated",
    },
    {
      id: "D-1002",
      customerName: "Nusrat Jahan",
      kitchenName: "Pizza Point",
      status: "Assigned",
      amount: 1250,
      earnings: 0,
      location: "Not Updated",
    },
  ]);

  // ✅ Transactions DB (separate table in DB)
  const riderTransactions = [
    {
      paymentDate: "12 Dec, 2025",
      transactionId: "TRX-9001",
      orderId: "AK-1001",
      method: "bKash",
      status: "Paid",
      amount: 780,
      riderEarnings: 120,
    },
    {
      paymentDate: "13 Dec, 2025",
      transactionId: "TRX-9002",
      orderId: "AK-1002",
      method: "Nagad",
      status: "Paid",
      amount: 1250,
      riderEarnings: 180,
    },
  ];

  const acceptOrder = (id) => {
    setDeliveries((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, status: "Accepted", earnings: d.amount } : d
      )
    );
  };

  const declineOrder = (id) => {
    setDeliveries((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: "Declined" } : d))
    );
  };

  const updateLocation = (id, location) => {
    setDeliveries((prev) =>
      prev.map((d) => (d.id === id ? { ...d, location } : d))
    );
  };

  const handleLogout = () => {
    // later: clear token + redirect
    alert("Logged out!");
  };

  const totalEarnings = riderTransactions.reduce(
    (s, t) => s + (Number(t.riderEarnings) || 0),
    0
  );

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard totalDeliveries={deliveries.length} totalEarnings={totalEarnings} />;

      case "deliveries":
        return (
          <AssignedDeliveries
            deliveries={deliveries}
            acceptOrder={acceptOrder}
            declineOrder={declineOrder}
            updateLocation={updateLocation}
          />
        );

      case "revenue":
        return <Revenue transactions={riderTransactions} />;

      case "settings":
        return <Settings />;

      default:
        return <h2 className="text-slate-800 font-semibold">Welcome to Rider Dashboard</h2>;
    }
  };

  return (
    <div className="min-h-screen bg-[#fff7ef] flex">
      {/* SIDEBAR (desktop only) */}
      <aside className="hidden md:flex md:w-64 flex-col bg-white border-r border-orange-100">
        <div className="h-16 flex items-center px-6 border-b border-orange-100">
          <img
            src="Untitled-1.png"
            alt="Amarkitchen"
            className="h-8 object-contain"
          />
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 text-sm text-slate-700">
          <p className="px-3 text-[11px] font-semibold text-slate-400 mb-1">MAIN</p>

          {[
            ["dashboard", "🏠", "Dashboard"],
            ["deliveries", "🧾", "Assigned Deliveries"],
            ["revenue", "💰", "Revenue"],
            ["settings", "⚙️", "Settings"], // ✅ added
          ].map(([key, icon, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveSection(key)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                activeSection === key
                  ? "bg-orange-50 text-orange-600 font-semibold"
                  : "hover:bg-slate-50"
              }`}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </nav>

        {/* Sidebar footer (desktop logout like previous) */}
        <div className="border-t border-orange-100 px-4 py-3 flex items-center justify-between text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-700">Rider Panel</p>
            <p>rider@amarkitchen.com</p>
          </div>

          <button
            onClick={handleLogout}
            className="border border-orange-500 text-orange-500 font-semibold px-4 py-1.5 rounded-md hover:bg-orange-50 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b border-orange-100 flex items-center justify-between px-4 md:px-8">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">
              Rider Dashboard
            </h1>
            <p className="text-xs md:text-sm text-slate-500">
              Manage deliveries and track your earnings.
            </p>
          </div>

          {/* ✅ Responsive actions (mobile logout + settings button) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSection("settings")}
              className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-md hover:bg-orange-600"
            >
              ⚙ Settings
            </button>

            {/* mobile logout only */}
            <button
              onClick={handleLogout}
              className="md:hidden inline-flex items-center gap-2 border border-orange-500 text-orange-600 text-xs font-semibold px-3 py-2 rounded-md hover:bg-orange-50"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Page;
