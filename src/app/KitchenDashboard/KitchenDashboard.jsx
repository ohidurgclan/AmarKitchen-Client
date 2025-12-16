'use client'; 

import React, { useState } from "react";

// Sample data from the kitchen JSON dataset
const kitchenData = [
  {
    name: "Prithu Kitchen",
    user_name: "deadbody",
    location: { address: "23 Manda Road", nearby: "Hidar Ali School & College", thana: "Mugda", city: "Dhaka", postal_code: "1214", country: "Miyanmar" },
    contact_info: { phone: "01234571589", email: "prithukitchen@gmail.com", social_media: { facebook: "https://www.facebook.com/prithumrinmoy", instagram: "" } },
    cuisine_type: "Bangla Khabar",
    opening_hours: { monday: "9:00 AM - 9:00 PM", tuesday: "9:00 AM - 9:00 PM", wednesday: "9:00 AM - 9:00 PM", thursday: "9:00 AM - 9:00 PM", friday: "9:00 AM - 9:00 PM", saturday: "10:00 AM - 10:00 PM", sunday: "Closed" },
    open_status: true,
    ratings: { value: 4.5 },
    delivery_available: true,
    delivery_radius_km: 15,
    payment_methods: ["Credit Card", "Cash on Delivery", "Mobile Wallets"],
    average_preparation_time_minutes: 30,
    kitchen_manager: { Owner: "Abdullah Al Mamun", Manager: "", contact: "+1234567890", email: "manager@kitchen.com" }
  },
  // Add more kitchen objects here if needed
];

const KitchenDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-slate-900">Kitchen Info</h3>
              <p><strong>Name:</strong> {kitchenData[0].name}</p>
              <p><strong>Cuisine Type:</strong> {kitchenData[0].cuisine_type}</p>
              <p><strong>Location:</strong> {kitchenData[0].location.address}, {kitchenData[0].location.city}</p>
              <p><strong>Contact:</strong> {kitchenData[0].contact_info.phone}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-slate-900">Opening Hours</h3>
              <ul>
                {Object.keys(kitchenData[0].opening_hours).map((day, index) => (
                  <li key={index} className="py-1">
                    <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong> {kitchenData[0].opening_hours[day]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      case "delivery_info":
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-slate-900">Delivery Information</h3>
            <p><strong>Delivery Radius:</strong> {kitchenData[0].delivery_radius_km} km</p>
            <p><strong>Payment Methods:</strong> {kitchenData[0].payment_methods.join(", ")}</p>
            <p><strong>Delivery Available:</strong> {kitchenData[0].delivery_available ? "Yes" : "No"}</p>
          </div>
        );
        
      case "ratings":
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-slate-900">Ratings</h3>
            <p><strong>Average Rating:</strong> {kitchenData[0].ratings.value} / 5</p>
          </div>
        );

      case "manager_info":
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-slate-900">Manager Information</h3>
            <p><strong>Owner:</strong> {kitchenData[0].kitchen_manager.Owner}</p>
            <p><strong>Contact:</strong> {kitchenData[0].kitchen_manager.contact}</p>
            <p><strong>Email:</strong> {kitchenData[0].kitchen_manager.email}</p>
          </div>
        );

      default:
        return <h2>Welcome to Kitchen Dashboard</h2>;
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
            onClick={() => setActiveSection("overview")}
          >
            <span>🏠</span>
            <span>Overview</span>
          </a>

          <p className="px-3 pt-4 text-[11px] font-semibold text-slate-400 mb-1">DELIVERY INFO</p>
          <a
            href="#delivery_info"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("delivery_info")}
          >
            <span>🚚</span>
            <span>Delivery Info</span>
          </a>

          <p className="px-3 pt-4 text-[11px] font-semibold text-slate-400 mb-1">RATINGS</p>
          <a
            href="#ratings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("ratings")}
          >
            <span>⭐</span>
            <span>Ratings</span>
          </a>

          <p className="px-3 pt-4 text-[11px] font-semibold text-slate-400 mb-1">MANAGER INFO</p>
          <a
            href="#manager_info"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
            onClick={() => setActiveSection("manager_info")}
          >
            <span>👨‍🍳</span>
            <span>Manager Info</span>
          </a>
        </nav>

        {/* Admin profile / logout */}
        <div className="border-t border-orange-100 px-4 py-3 flex items-center justify-between text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-700">Kitchen Panel</p>
            <p>manager@kitchen.com</p>
          </div>
          <button className="text-orange-500 font-semibold">Logout</button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b border-orange-100 flex items-center justify-between px-4 md:px-8">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">Kitchen Dashboard</h1>
            <p className="text-xs md:text-sm text-slate-500">Manage kitchen operations.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 border border-orange-200 bg-white text-orange-600 text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-md hover:bg-orange-50">
              🔄 Refresh
            </button>
            <button className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-md hover:bg-orange-600">
              ⚙ Settings
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

export default KitchenDashboard;
