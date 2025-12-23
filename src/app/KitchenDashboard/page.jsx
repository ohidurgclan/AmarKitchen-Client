// app/(kitchen)/kitchen-dashboard/page.jsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// ✅ Import your Kitchen Dashboard components
import KitchenDashboard from "./KitchenDashboard";
import KitchenOrders from "./KitchenOrders";
import KitchenCustomers from "./KitchenCustomers";
import KitchenRiders from "./KitchenRiders";
import KitchenMenu from "./KitchenMenu";
import KitchenSettings from "./KitchenSettings";
import KitchenRevenue from "./KitchenRevenue";
import KitchenReviews from "./KitchenReviews";
import FullTransaction from "./FullTransaction"; // ✅ IMPORTANT (so setActiveSection works)

// ===================== SAMPLE DATA (later replace with DB/API) =====================

// Orders (Kitchen side)
const kitchenOrdersSample = [
  { id: "KO-1001", customerName: "Rahim Uddin", status: "Delivered", amount: 780, date: "21 Dec, 2025" },
  { id: "KO-1002", customerName: "Shama Akter", status: "On the way", amount: 1250, date: "21 Dec, 2025" },
  { id: "KO-1003", customerName: "Hasan Mahmud", status: "Preparing", amount: 620, date: "20 Dec, 2025" },
  { id: "KO-1004", customerName: "Hasan Mahmud", status: "Preparing", amount: 620, date: "20 Dec, 2025" },
  { id: "KO-1005", customerName: "Hasan Mahmud", status: "Delivered", amount: 620, date: "20 Dec, 2025" },
];

// Customers (Kitchen side)
const kitchenCustomersSample = [
  { id: "C-1001", name: "Rahim Uddin", email: "rahim@example.com", phone: "0123456789" },
  { id: "C-1002", name: "Shama Akter", email: "shama@example.com", phone: "9876543210" },
];

// Riders (assigned / available for this kitchen)
const kitchenRidersSample = [
  { id: "R-2001", name: "Kamal Hossain", status: "Active", rating: 4.7 },
  { id: "R-2002", name: "Rafiul Islam", status: "Active", rating: 4.1 },
  { id: "R-2003", name: "Ratul Hasan", status: "Inactive", rating: 3.9 },
];

// Menu (Kitchen items)
const kitchenMenuSample = [
  { id: "M-001", name: "Chicken Biryani", price: 220, status: "Available" },
  { id: "M-002", name: "Beef Tehari", price: 250, status: "Available" },
  { id: "M-003", name: "Burger Combo", price: 180, status: "Unavailable" },
];

// Reviews (Kitchen feedback)
const kitchenReviewsSample = [
  { id: "RV-01", customerName: "Rahim Uddin", orderId: "KO-1001", rating: 4, comment: "Food was tasty but slightly cold." },
  { id: "RV-02", customerName: "Shama Akter", orderId: "KO-1002", rating: 2, comment: "Late delivery and food quality not good." },
];

// Revenue (chart data)
const kitchenRevenueSample = [
  { date: "2025-12-15", earnings: 200 },
  { date: "2025-12-16", earnings: 100 },
  { date: "2025-12-17", earnings: 500 },
  { date: "2025-12-18", earnings: 700 },
  { date: "2025-12-19", earnings: 400 },
  { date: "2025-12-20", earnings: 800 },
  { date: "2025-12-21", earnings: 200 },
  { date: "2025-12-22", earnings: 1000 },
];

// ===================== PAGE =====================
const Page = () => {
  const router = useRouter();

  // ✅ controls sidebar navigation
  const [activeSection, setActiveSection] = useState("dashboard");

  // ✅ kitchen status + menu toggle (DB later)
  const [kitchenStatus, setKitchenStatus] = useState("Inactive"); // "Active" | "Inactive"
  const [menuItems, setMenuItems] = useState(kitchenMenuSample);

  const handleLogout = () => {
    router.push("/");
  };

  // ✅ called from KitchenDashboard
  const onToggleKitchen = (nextStatus) => {
    setKitchenStatus(nextStatus);
    // TODO: call API to save kitchen status
  };

  // ✅ called from KitchenDashboard (and you can reuse in KitchenMenu page too)
  const onToggleMenuItem = (menuId, nextStatus) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === menuId ? { ...item, status: nextStatus } : item))
    );
    // TODO: call API to save menu item status
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <KitchenDashboard
            kitchenStatus={kitchenStatus}
            onToggleKitchen={onToggleKitchen}
            onToggleMenuItem={onToggleMenuItem}
            orders={kitchenOrdersSample}
            customers={kitchenCustomersSample}
            riders={kitchenRidersSample}
            menu={menuItems}
            reviews={kitchenReviewsSample}
            revenueData={kitchenRevenueSample}
          />
        );

      case "orders":
        return <KitchenOrders orders={kitchenOrdersSample} />;

      case "customers":
        return <KitchenCustomers customers={kitchenCustomersSample} />;

      case "riders":
        return <KitchenRiders riders={kitchenRidersSample} />;

      case "menu":
        // ✅ pass toggler so you can control available/unavailable from menu page too
        return (
          <KitchenMenu
            menuItems={menuItems}
            kitchenStatus={kitchenStatus}
            onToggleMenuItem={onToggleMenuItem}
          />
        );

      case "revenue":
        // ✅ IMPORTANT: pass setActiveSection so button works
        return <KitchenRevenue revenueData={kitchenRevenueSample} setActiveSection={setActiveSection} />;

      case "fullTransaction":
        // ✅ IMPORTANT: pass setActiveSection so Back button works
        return <FullTransaction setActiveSection={setActiveSection} />;

      case "reviews":
        return <KitchenReviews reviews={kitchenReviewsSample} />;

      case "settings":
        return <KitchenSettings />;

      default:
        return <h2 className="text-slate-800 font-semibold">Welcome to Kitchen Dashboard</h2>;
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
          <p className="px-3 text-[11px] font-semibold text-slate-400 mb-1">KITCHEN PANEL</p>

          {[
            ["dashboard", "🏠", "Dashboard"],
            ["orders", "🧾", "Orders"],
            ["customers", "👥", "Customers"],
            ["riders", "🚴", "Riders"],
            ["menu", "📦", "Menu"],
            ["revenue", "📊", "Revenue"],
            ["reviews", "⭐", "Reviews"],
            ["settings", "⚙️", "Settings"],
          ].map(([key, icon, label]) => (
            <button
              key={key}
              type="button"
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                activeSection === key
                  ? "bg-orange-50 text-orange-600 font-semibold"
                  : "hover:bg-slate-50"
              }`}
              onClick={() => setActiveSection(key)}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </nav>

        {/* Profile / logout */}
        <div className="border-t border-orange-100 px-4 py-3 flex items-center justify-between text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-700">Kitchen Panel</p>
            <p>kitchen@amarkitchen.com</p>
          </div>

          <button
            onClick={handleLogout}
            className="border border-orange-500 text-orange-500 font-semibold px-4 py-1.5 rounded-md hover:bg-orange-50 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b border-orange-100 flex items-center justify-between px-4 md:px-8">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">Kitchen Dashboard</h1>
            <p className="text-xs md:text-sm text-slate-500">
              Manage orders, menu, riders, and customer feedback.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`hidden sm:inline-flex text-xs px-3 py-1 rounded-full border ${
                kitchenStatus === "Active"
                  ? "bg-green-50 text-green-700 border-green-200"
                  : "bg-slate-50 text-slate-600 border-slate-200"
              }`}
            >
              Kitchen: {kitchenStatus}
            </span>

            <button className="hidden sm:inline-flex items-center gap-2 border border-orange-200 bg-white text-orange-600 text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-md hover:bg-orange-50">
              🔄 Refresh
            </button>

            <button
              type="button"
              onClick={() => setActiveSection("settings")}
              className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-md hover:bg-orange-600"
            >
              ⚙ Kitchen Settings
            </button>
          </div>
        </header>

        {/* BODY */}
        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-8">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Page;
