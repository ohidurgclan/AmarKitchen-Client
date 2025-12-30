// components/AdminKitchens.jsx
"use client";

import React from "react";
import Link from "next/link";

const AdminKitchens = ({ kitchensPending = [], allKitchens = [] }) => {
  
  return (
    <div className="space-y-8">
      {/* ================= Pending Approval ================= */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Kitchens Pending Approval
          </h2>
          <span className="text-xs text-slate-500">
            Total: {kitchensPending.length}
          </span>
        </div>

        <div className="space-y-4">
          {kitchensPending.length === 0 ? (
            <div className="py-10 text-center text-sm text-slate-500">
              No pending kitchens found.
            </div>
          ) : (
            kitchensPending.map((kitchen) => (
              <div
                key={kitchen.id}
                className="flex items-center justify-between gap-4 p-4 bg-slate-50 rounded-lg shadow-sm hover:bg-slate-100 transition"
              >
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    {kitchen.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    Requested: {kitchen.requestedDate}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/admin/kitchens/${kitchen.id}`}
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
                  >
                    View
                  </Link>

                  <Link
                    href={`/admin/kitchens/${kitchen.id}/approve`}
                    className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-1"
                  >
                    Approve
                  </Link>

                  <Link
                    href={`/admin/kitchens/${kitchen.id}/reject`}
                    className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-1"
                  >
                    Reject
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ================= All Kitchens Table ================= */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">All Kitchens</h2>
          <span className="text-xs text-slate-500">
            Total: {allKitchens.length}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-orange-50 text-slate-600">
              <tr>
                <th className="py-2 px-4">Kitchen ID</th>
                <th className="py-2 px-4">Kitchen Name</th>
                <th className="py-2 px-4">Rating</th>
                <th className="py-2 px-4 text-center">Status</th>
                <th className="py-2 px-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {allKitchens.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 px-4 text-center text-slate-500">
                    No kitchens found.
                  </td>
                </tr>
              ) : (
                allKitchens.map((k) => (
                  <tr key={k.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono text-slate-800">#{k.id}</td>
                    <td className="py-3 px-4">{k.name}</td>

                    <td className="py-3 px-4">
                      <span className="font-semibold text-slate-900">
                        {typeof k.rating === "number" ? k.rating.toFixed(1) : "N/A"}
                      </span>{" "}
                      <span className="text-xs text-slate-500">/ 5</span>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-[11px] ${
                          k.status === "Active"
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {k.status || "Inactive"}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <div className="inline-flex gap-2">
                        <Link
                          href={`/admin/kitchens/${k.id}/activate`}
                          className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-1"
                        >
                          Active
                        </Link>

                        <Link
                          href={`/admin/kitchens/${k.id}/deactivate`}
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
    </div>
  );
};

export default AdminKitchens;
