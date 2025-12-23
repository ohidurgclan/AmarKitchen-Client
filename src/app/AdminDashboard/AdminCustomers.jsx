// AdminCustomers.jsx
"use client";

import React from "react";
import Link from "next/link";

const AdminCustomers = ({ customers = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-900">Customer List</h2>
        <span className="text-xs text-slate-500">Total: {customers.length}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-orange-50 text-slate-600">
            <tr>
              <th className="py-3 px-4">Customer ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {customers.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 px-4 text-center text-slate-500">
                  No customers found.
                </td>
              </tr>
            ) : (
              customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono text-sm text-slate-800">
                    {customer.id}
                  </td>
                  <td className="py-3 px-4">{customer.name}</td>
                  <td className="py-3 px-4">{customer.email}</td>
                  <td className="py-3 px-4">{customer.phone}</td>

                  {/* ✅ View (Blue) + Block (Red) */}
                  <td className="py-3 px-4 text-center">
                    <div className="inline-flex gap-2">
                      <Link
                        href={`/admin/customers/${customer.id}`}
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
                      >
                        View
                      </Link>

                      <Link
                        href={`/admin/customers/${customer.id}/block`}
                        className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-1"
                      >
                        Block
                      </Link>
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

export default AdminCustomers;
