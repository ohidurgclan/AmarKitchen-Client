"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AdminOrder from "./AdminOrder";
import AdminKitchens from "./AdminKitchens";
import AdminRiders from "./AdminRiders";
import AdminCustomers from "./AdminCustomers";
import AdminSettings from "./AdminSettings";
import Dashboard from "./Dashboard";
import Revenue from "./Revenue";
import Reviews from "./Reviews";
import FullTransaction from "./FullTransaction";
import SignOutButton from "../AuthForms/SignupButton";

// ===================== SAMPLE DATA (later replace with DB/API) =====================

// Orders
// const orders = [
//   { id: "AK-1001", customerName: "Hedayet Uddin", kitchenName: "Dhaka Biryani House", status: "Delivered", amount: 780 },
//   { id: "AK-1002", customerName: "Nusrat Jahan", kitchenName: "Pizza Point", status: "On the way", amount: 1250 },
//   { id: "AK-1003", customerName: "Hasan Mahmud", kitchenName: "Burger Hub", status: "Preparing", amount: 620 },
//   { id: "AK-1004", customerName: "Mahmud Khan", kitchenName: "Karaachi Dastarkhwan", status: "Preparing", amount: 620 },
//   { id: "AK-1005", customerName: "Sajib Hasan", kitchenName: "ZAIQA", status: "Preparing", amount: 620 },
// ];

// Kitchens (Pending Approval)
const kitchensPendingSample = [
  { id: "K-1001", name: "Chattogram Grill", requestedDate: "10 Dec, 2025" },
  { id: "K-1002", name: "Sylhet Cafe House", requestedDate: "09 Dec, 2025" },
  { id: "K-1003", name: "King Kebab", requestedDate: "19 Dec, 2025" },
  { id: "K-1004", name: "Nasir Biriyani", requestedDate: "19 Dec, 2025" },
  { id: "K-1005", name: "Mekhab Ala ", requestedDate: "19 Dec, 2025" },
];

// Kitchens (All Kitchens Table)
const kitchens = [
  { id: "K-1001", name: "Chattogram Grill", rating: 4.6, status: "Active" },
  { id: "K-1002", name: "Sylhet Cafe House", rating: 3.9, status: "Inactive" },
  { id: "K-1003", name: "Dhaka Biryani House", rating: 4.2, status: "Active" },
  { id: "K-1004", name: "Pizza Point", rating: 4.1, status: "Active" },
  { id: "K-1005", name: "Burger Hub", rating: 3.6, status: "Inactive" },
];

// ✅ Riders (Pending Verification) - NEW
const ridersPendingSample = [
  { id: "R-2001", name: "Kamal Hossain", note: "NID & bike papers uploaded", state: "pending_docs" },
  { id: "R-2002", name: "Rafiul Islam", note: "Waiting for document upload", state: "waiting_docs" },
  { id: "R-2003", name: "Ratul Hasan", note: "Waiting for document upload", state: "waiting_docs" },
];

// ✅ Riders (All Riders Table) - NEW
const allRidersSample = [
  { id: "R-2001", name: "Kamal Hossain", rating: 4.7, status: "Active" },
  { id: "R-2002", name: "Rafiul Islam", rating: 3.8, status: "Inactive" },
  { id: "R-2003", name: "Ratul Hasan", rating: 4.2, status: "Active" },
  { id: "R-2004", name: "Sabbir Ahmed", rating: 4.0, status: "Active" },
];

// // Customers
// const customers = [
//   { id: "C-1001", name: "Rahim Uddin", email: "rahim@example.com", phone: "0123456789" },
//   { id: "C-1002", name: "Shama Akter", email: "shama@example.com", phone: "9876543210" },
// ];

// Reports
const kitchensReports = [
  { customerId: "C-1001", customerName: "Rahim Uddin", orderId: "AK-1001", kitchenName: "Dhaka Biryani House", report: "Food was cold" },
  { customerId: "C-1002", customerName: "Shama Akter", orderId: "AK-1002", kitchenName: "Pizza Point", report: "The food was stale" },
  { customerId: "C-1003", customerName: "Shama Akter", orderId: "AK-1002", kitchenName: "Pizza Point", report: "The food was stale" },
];

const ridersReports = [
  { customerId: "C-1001", customerName: "Rahim Uddin", orderId: "AK-1001", riderName: "Kamal Hossain", report: "Rider was rude" },
  { customerId: "C-1002", customerName: "Shama Akter", orderId: "AK-1002", riderName: "Rafiul Islam", report: "Rider took too long" },
];

// Revenue
const revenueData = [
  { date: "2025-12-15", earnings: 200 },
  { date: "2025-12-16", earnings: 100 },
  { date: "2025-12-17", earnings: 500 },
  { date: "2025-12-18", earnings: 700 },
  { date: "2025-12-19", earnings: 400 },
  { date: "2025-12-20", earnings: 800 },
  { date: "2025-12-21", earnings: 200 },
  { date: "2025-12-22", earnings: 100 },
  { date: "2025-12-23", earnings: 300 },
  { date: "2025-12-24", earnings: 250 },
];

// ===================== PAGE =====================
const Page = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("dashboard");
    const [orders, setOrders] = useState([]);
    const [kitchens,setKitchens] = useState([]);
    const [customers,setCustomer] = useState([]);
    useEffect(() => {
      async function fetchItems() {
        const res = await fetch("http://localhost:5085/v1/order/getOrdersforAdmin"); // via Next proxy
        const data = await res.json();
        setOrders(data.data);
      }
      fetchItems();
    }, []);

    useEffect(() => {
      async function fetchKitchen() {
        const res = await fetch("http://localhost:5085/v1/kitchen/allkitchens"); // via Next proxy
        const data = await res.json();
        setKitchens(data.data);
      }
      fetchKitchen();
    }, []);

    useEffect(() => {
      async function fetchCustomer() {
        const res = await fetch("http://localhost:5085/v1/users/customer"); // via Next proxy
        const data = await res.json();
        setCustomer(data.data);
      }
      fetchCustomer();
    }, []);

  const handleLogout = () => {
    router.push("/");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "orders":
        return <AdminOrder orders={orders} />;

      case "kitchens":
        return (
          <AdminKitchens
            kitchensPending={kitchensPendingSample}
            allKitchens={kitchens}
          />
        );

      case "riders":
        // ✅ UPDATED: pass BOTH pending + all riders
        return (
          <AdminRiders
            ridersPending={ridersPendingSample}
            allRiders={allRidersSample}
          />
        );

      case "customers":
        return <AdminCustomers customers={customers} />;

      case "settings":
        return <AdminSettings />;

      case "dashboard":
        return (
          <Dashboard
            orders={orders}
            kitchens={kitchensPendingSample}
            ridersVerification={ridersPendingSample}
            customers={customers}
          />
        );

      case "revenue":
        return (
          <Revenue
            revenueData={revenueData}
            setActiveSection={setActiveSection}
          />
        );

      case "fullTransaction":
        return <FullTransaction setActiveSection={setActiveSection} />;

      case "report":
        return (
          <Reviews kitchensReports={kitchensReports} ridersReports={ridersReports} />
        );

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

          <button
            type="button"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${activeSection === "dashboard"
                ? "bg-orange-50 text-orange-600 font-semibold"
                : "hover:bg-slate-50"
              }`}
            onClick={() => setActiveSection("dashboard")}
          >
            <span>🏠</span>
            <span>Dashboard</span>
          </button>

          <p className="px-3 pt-4 text-[11px] font-semibold text-slate-400 mb-1">MANAGEMENT</p>

          <button
            type="button"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${activeSection === "orders"
                ? "bg-orange-50 text-orange-600 font-semibold"
                : "hover:bg-slate-50"
              }`}
            onClick={() => setActiveSection("orders")}
          >
            <span>🧾</span>
            <span>Orders</span>
          </button>

          <button
            type="button"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${activeSection === "kitchens"
                ? "bg-orange-50 text-orange-600 font-semibold"
                : "hover:bg-slate-50"
              }`}
            onClick={() => setActiveSection("kitchens")}
          >
            <span>🍽️</span>
            <span>Kitchens</span>
          </button>

          <button
            type="button"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${activeSection === "customers"
                ? "bg-orange-50 text-orange-600 font-semibold"
                : "hover:bg-slate-50"
              }`}
            onClick={() => setActiveSection("customers")}
          >
            <span>👥</span>
            <span>Customers</span>
          </button>

          <button
            type="button"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${activeSection === "riders"
                ? "bg-orange-50 text-orange-600 font-semibold"
                : "hover:bg-slate-50"
              }`}
            onClick={() => setActiveSection("riders")}
          >
            <span>🚴</span>
            <span>Riders</span>
          </button>

          <p className="px-3 pt-4 text-[11px] font-semibold text-slate-400 mb-1">SYSTEM</p>

          <button
            type="button"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${activeSection === "settings"
                ? "bg-orange-50 text-orange-600 font-semibold"
                : "hover:bg-slate-50"
              }`}
            onClick={() => setActiveSection("settings")}
          >
            <span>⚙️</span>
            <span>Settings</span>
          </button>

          <button
            type="button"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${activeSection === "revenue"
                ? "bg-orange-50 text-orange-600 font-semibold"
                : "hover:bg-slate-50"
              }`}
            onClick={() => setActiveSection("revenue")}
          >
            <span>📊</span>
            <span>Revenue</span>
          </button>

          <button
            type="button"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${activeSection === "report"
                ? "bg-orange-50 text-orange-600 font-semibold"
                : "hover:bg-slate-50"
              }`}
            onClick={() => setActiveSection("report")}
          >
            <span>📋</span>
            <span>Report</span>
          </button>
        </nav>

        {/* Admin profile / logout */}
        <div className="border-t border-orange-100 px-4 py-3 flex items-center justify-between text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-700">Admin Panel</p>
            <p>admin@amarkitchen.com</p>
          </div>

          <button
            onClick={handleLogout}
            className="border border-orange-500 text-orange-500 font-semibold px-4 py-1.5 rounded-md hover:bg-orange-50 transition"
          >
            Logout
          </button>
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
            <p className="text-xs md:text-sm text-slate-500">
              Control kitchens, orders, customers and riders.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SignOutButton />
            <button className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-md hover:bg-orange-600">
              ⚙ Admin Settings
            </button>
          </div>
        </header>

        {/* MAIN BODY */}
        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Page;