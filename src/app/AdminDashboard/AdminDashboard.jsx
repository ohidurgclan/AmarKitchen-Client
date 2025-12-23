'use client'; // Ensure this is added for client-side rendering

import React, { useState } from "react"; // Add this line to import useState
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AdminOrder from "./AdminOrder";
import AdminKitchens from "./AdminKitchens";
import AdminRiders from "./AdminRiders";
import AdminCustomers from "./AdminCustomers";
import AdminSettings from "./AdminSettings";
import Dashboard from "./Dashboard"; // Import Dashboard component

// === SAMPLE DATA (later these will be replaced with DB/API data) ===
const orders = [
  { id: "AK-1001", customerName: "Bal uddian Uddin", kitchenName: "Dhaka Biryani House", status: "Delivered", amount: 780 },
  { id: "AK-1002", customerName: "Nusrat Jahan", kitchenName: "Pizza Point", status: "On the way", amount: 1250 },
  { id: "AK-1003", customerName: "Hasan Mahmud", kitchenName: "Burger Hub", status: "Preparing", amount: 620 },
  { id: "AK-1004", customerName: "Hasan Mahmud", kitchenName: "Burger Hub", status: "Preparing", amount: 620 },
  { id: "AK-1005", customerName: "Hasan Mahmud", kitchenName: "Burger Hub", status: "Preparing", amount: 620 },
];

const kitchens = [
  { id: 1, name: "Chattogram Grill", requestedDate: "10 Dec, 2025" },
  { id: 2, name: "Sylhet Cafe House", requestedDate: "09 Dec, 2025" },
  { id: 3, name: "abc", requestedDate: "19 Dec, 2025" },
   { id: 4, name: "fdsadsfdsfsdfa", requestedDate: "19 Dec, 2025" },
    { id: 5, name: "fdsadsfdsfsffffdfa", requestedDate: "19 Dec, 2025" },
];

const ridersVerification = [
  { id: 1, name: "Kamal Hossain", note: "NID & bike papers uploaded" },
  { id: 2, name: "Rafiul Islam", note: "Waiting for document upload" },
  { id: 3, name: "Ratul Hasan", note: "Waiting for document upload" },
];

const customers = [
  { id: "C-1001", name: "Rahim Uddin", email: "rahim@example.com", phone: "0123456789" },
  { id: "C-1002", name: "Shama Akter", email: "shama@exampl e.com", phone: "9876543210" },
];

const page = () => {
  const [activeSection, setActiveSection] = useState("dashboard"); // Active section to toggle between Orders, Kitchens, etc.

  // Content Rendering based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "orders":
        return <AdminOrder orders={orders} />;
      case "kitchens":
        return <AdminKitchens kitchens={kitchens} />;
      case "riders":
        return <AdminRiders riders={ridersVerification} />;
      case "customers":
        return <AdminCustomers customers={customers} />;
      case "settings":
        return <AdminSettings />;
      case "dashboard":
        return <Dashboard
          orders={orders}
          kitchens={kitchens}
          ridersVerification={ridersVerification}
          customers={customers}
        />;  // Pass props to Dashboard
      default:
        return <h2>Welcome to Admin Dashboard</h2>;
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
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-orange-50 text-orange-600 font-semibold"
            onClick={() => setActiveSection("dashboard")}
          >
            <span>🏠</span>
            <span>Dashboard</span>
          </Link>

          <p className="px-3 pt-4 text-[11px] font-semibold text-slate-400 mb-1">MANAGEMENT</p>
          <Link
            to="/orders"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("orders")}
          >
            <span>🧾</span>
            <span>Orders</span>
          </Link>
          <Link
            to="/kitchens"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("kitchens")}
          >
            <span>🍽️</span>
            <span>Kitchens</span>
          </Link>
          <Link
            to="/customers"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("customers")}
          >
            <span>👥</span>
            <span>Customers</span>
          </Link>
          <Link
            to="/riders"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("riders")}
          >
            <span>🚴</span>
            <span>Riders</span>
          </Link>

          <p className="px-3 pt-4 text-[11px] font-semibold text-slate-400 mb-1">SYSTEM</p>
          <Link
            to="/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("settings")}
          >
            <span>⚙️</span>
            <span>Settings</span>
          </Link>
          
        </nav>

        {/* Admin profile / logout */}
        <div className="border-t border-orange-100 px-4 py-3 flex items-center justify-between text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-700">Admin Panel</p>
            <p>admin@amarkitchen.com</p>
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
              Admin Dashboard
            </h1>
            <p className="text-xs md:text-sm text-slate-500">Control kitchens, orders, customers and riders.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 border border-orange-200 bg-white text-orange-600 text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-md hover:bg-orange-50">
              🔄 Refresh
            </button>
            <button className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-md hover:bg-orange-600">
              ⚙ Admin Settings
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

export default page;
