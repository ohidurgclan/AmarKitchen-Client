// Reviews.jsx
"use client";

import React from "react";
import Link from "next/link";

const Reviews = ({ kitchensReports = [], ridersReports = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-orange-50 space-y-10">
      {/* ================= Kitchen Feedback ================= */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Kitchen Feedback
          </h2>
          <span className="text-xs text-slate-500">
            Total: {kitchensReports.length}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-orange-50 text-slate-600">
              <tr>
                <th className="py-2 px-4">Customer ID</th>
                <th className="py-2 px-4">Customer Name</th>
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Kitchen Name</th>
                <th className="py-2 px-4">Report</th>
                <th className="py-2 px-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {kitchensReports.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-8 px-4 text-center text-slate-500"
                  >
                    No kitchen feedback found.
                  </td>
                </tr>
              ) : (
                kitchensReports.map((report, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono text-slate-800">
                      {report.customerId}
                    </td>
                    <td className="py-3 px-4">{report.customerName}</td>
                    <td className="py-3 px-4 font-mono text-slate-800">
                      {report.orderId}
                    </td>
                    <td className="py-3 px-4">{report.kitchenName}</td>

                    <td className="py-3 px-4 text-slate-700 whitespace-normal wrap-break-word max-w-[420px]">
                      {report.report}
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex justify-end">
                        <Link
                          href={`/admin/reviews/kitchen/${report.orderId}`}
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
      </section>

      {/* ================= Rider Feedback ================= */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Rider Feedback</h2>
          <span className="text-xs text-slate-500">
            Total: {ridersReports.length}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-orange-50 text-slate-600">
              <tr>
                <th className="py-2 px-4">Customer ID</th>
                <th className="py-2 px-4">Customer Name</th>
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Rider Name</th>
                <th className="py-2 px-4">Report</th>
                <th className="py-2 px-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {ridersReports.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-8 px-4 text-center text-slate-500"
                  >
                    No rider feedback found.
                  </td>
                </tr>
              ) : (
                ridersReports.map((report, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono text-slate-800">
                      {report.customerId}
                    </td>
                    <td className="py-3 px-4">{report.customerName}</td>
                    <td className="py-3 px-4 font-mono text-slate-800">
                      {report.orderId}
                    </td>
                    <td className="py-3 px-4">{report.riderName}</td>

                    <td className="py-3 px-4 text-slate-700 whitespace-normal wrap-break-word max-w-[420px]">
                      {report.report}
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex justify-end">
                        <Link
                          href={`/admin/reviews/rider/${report.orderId}`}
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
      </section>
    </div>
  );
};

export default Reviews;
