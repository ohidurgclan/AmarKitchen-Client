// KitchenRiders.jsx
"use client";
import React from "react";
import Link from "next/link";

const KitchenRiders = ({ riders = [] }) => {
  const statusPill = (status) => {
    if (status === "Active") return "bg-green-50 text-green-700";
    if (status === "Inactive") return "bg-slate-100 text-slate-700";
    return "bg-slate-100 text-slate-700";
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-900">Riders</h2>
        <span className="text-xs text-slate-500">Total: {riders.length}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-orange-50 text-slate-600">
            <tr>
              <th className="py-3 px-4">Rider ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Rating</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {riders.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 px-4 text-center text-slate-500">
                  No riders found.
                </td>
              </tr>
            ) : (
              riders.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono text-slate-800">{r.id}</td>
                  <td className="py-3 px-4">{r.name}</td>
                  <td className="py-3 px-4">{r.rating ?? "-"}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-[11px] ${statusPill(r.status)}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end">
                      <Link
                        href={`/kitchen/riders/${r.id}`}
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
                      >
                        View
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

export default KitchenRiders;
