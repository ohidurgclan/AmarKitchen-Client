'use client'; 

import React, { useState } from "react";
import Dashboard from "./Dashboard"; 
import AssignedDeliveries from "./AssignedDeliveries";
import Revenue from "./Revenue"; 

const RiderDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  
  // State for deliveries data
  const [deliveries, setDeliveries] = useState([
    { id: "D-1001", customerName: "Rahim Uddin", kitchenName: "Dhaka Biryani House", status: "Assigned", amount: 780, earnings: 0, location: "Not Updated" },
    { id: "D-1002", customerName: "Nusrat Jahan", kitchenName: "Pizza Point", status: "Assigned", amount: 1250, earnings: 0, location: "Not Updated" },
    { id: "D-1003", customerName: "Hasan Mahmud", kitchenName: "Burger Hub", status: "Assigned", amount: 620, earnings: 0, location: "Not Updated" },
    { id: "D-1004", customerName: "Amin Uddin", kitchenName: "Kolkata Biryani", status: "Assigned", amount: 1000, earnings: 0, location: "Not Updated" },
    { id: "D-1005", customerName: "Amin Uddin", kitchenName: "Kolkata Biryani", status: "Assigned", amount: 1000, earnings: 0, location: "Not Updated" },
  ]);

  const dailyEarnings = {
    "2025-12-01": 1500,
    "2025-12-02": 2000,
  };

  const monthlyEarnings = {
    "December 2025": 5000,
  };

  const acceptOrder = (id) => {
    // Accept order logic here, update status to Accepted and update earnings
    setDeliveries(prevDeliveries => 
      prevDeliveries.map(order => 
        order.id === id ? { ...order, status: "Accepted", earnings: order.amount } : order
      )
    );
  };

  const declineOrder = (id) => {
    // Decline order logic here
    setDeliveries(prevDeliveries => 
      prevDeliveries.map(order => 
        order.id === id ? { ...order, status: "Declined" } : order
      )
    );
  };

  const updateLocation = (id, location) => {
    // Update location logic here
    setDeliveries(prevDeliveries => 
      prevDeliveries.map(order => 
        order.id === id ? { ...order, location } : order
      )
    );
  };

  // Content Rendering based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard totalDeliveries={deliveries.length} totalEarnings={5000} />;
      case "deliveries":
        return <AssignedDeliveries deliveries={deliveries} acceptOrder={acceptOrder} declineOrder={declineOrder} updateLocation={updateLocation} />;
      case "revenue":
        return <Revenue dailyEarnings={dailyEarnings} monthlyEarnings={monthlyEarnings} />;
      default:
        return <h2>Welcome to Rider Dashboard</h2>;
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
            href="#overview"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-orange-50 text-orange-600 font-semibold"
            onClick={() => setActiveSection("dashboard")}
          >
            <span>🏠</span>
            <span>Dashboard</span>
          </a>

          <p className="px-3 pt-4 text-[11px] font-semibold text-slate-400 mb-1">DELIVERIES</p>
          <a
            href="#deliveries"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("deliveries")}
          >
            <span>🧾</span>
            <span>Assigned Deliveries</span>
          </a>

          <p className="px-3 pt-4 text-[11px] font-semibold text-slate-400 mb-1">REVENUE</p>
          <a
            href="#revenue"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("revenue")}
          >
            <span>💰</span>
            <span>Revenue</span>
          </a>
        </nav>

        {/* Rider profile / logout */}
        <div className="border-t border-orange-100 px-4 py-3 flex items-center justify-between text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-700">Rider Panel</p>
            <p>rider@amarkitchen.com</p>
          </div>
          <button className="text-orange-500 font-semibold">Logout</button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b border-orange-100 flex items-center justify-between px-4 md:px-8">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">Rider Dashboard</h1>
            <p className="text-xs md:text-sm text-slate-500">Manage deliveries and track your earnings.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 border border-orange-200 bg-white text-orange-600 text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-md hover:bg-orange-50">
              🔄 Refresh
            </button>
            <button className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-md hover:bg-orange-600">
              ⚙ Rider Settings
            </button>
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

export default RiderDashboard;
