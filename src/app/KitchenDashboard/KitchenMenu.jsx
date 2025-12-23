// KitchenMenu.jsx
"use client";
import React from "react";
import Link from "next/link";

const KitchenMenu = ({ menuItems = [], onDeleteItem }) => {
  const pill = (status) => {
    if (status === "Available") return "bg-green-50 text-green-700 border-green-200";
    if (status === "Unavailable") return "bg-slate-100 text-slate-700 border-slate-200";
    return "bg-slate-100 text-slate-700 border-slate-200";
  };

  const handleDelete = (id) => {
    if (typeof onDeleteItem === "function") return onDeleteItem(id);
    alert(`Delete clicked for Item: ${id} (connect API/DB later)`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Menu</h2>
          <span className="text-xs text-slate-500">Total: {menuItems.length}</span>
        </div>

        {/* ✅ Add Item Button */}
        <Link
          href="/kitchen-dashboard/additemfrom"
          className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-1"
        >
          ➕ Add Item
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-orange-50 text-slate-600">
            <tr>
              <th className="py-3 px-4">Item ID</th>
              <th className="py-3 px-4">Item</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {menuItems.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 px-4 text-center text-slate-500">
                  No menu items found.
                </td>
              </tr>
            ) : (
              menuItems.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono text-slate-800">{m.id}</td>
                  <td className="py-3 px-4">{m.name}</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">
                    ৳ {Number(m.price || 0).toLocaleString("en-BD")}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-[11px] border ${pill(m.status)}`}>
                      {m.status}
                    </span>
                  </td>

                  {/* ✅ View (Blue) | Update (White) | Delete (Red) */}
                  <td className="py-3 px-4">
                    <div className="flex justify-end gap-2">
                      {/* View - Blue */}
                      <Link
                        href={`/kitchen/menu/${m.id}`}
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
                      >
                        View
                      </Link>

                      {/* Update - White */}
                      <Link
                        href={`/kitchen-dashboard/menu/update/${m.id}`}
                        className="inline-flex items-center justify-center rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-800 border border-slate-200 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1"
                      >
                        Update
                      </Link>

                      {/* Delete - Red */}
                      <button
                        type="button"
                        onClick={() => handleDelete(m.id)}
                        className="inline-flex items-center justify-center rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-1"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KitchenMenu;
