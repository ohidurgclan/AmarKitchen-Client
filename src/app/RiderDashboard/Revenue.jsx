"use client";

import React, { useMemo, useState } from "react";

const Revenue = ({ transactions = [] }) => {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const statusPill = (status) => {
    const s = (status || "").toLowerCase();
    if (s === "paid") return "bg-green-50 text-green-700 border-green-200";
    if (s === "pending") return "bg-yellow-50 text-yellow-700 border-yellow-200";
    if (s === "failed") return "bg-red-50 text-red-700 border-red-200";
    return "bg-slate-50 text-slate-600 border-slate-200";
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return transactions.filter((t) => {
      const matchesQuery =
        !q ||
        String(t.transactionId || "").toLowerCase().includes(q) ||
        String(t.orderId || "").toLowerCase().includes(q) ||
        String(t.method || "").toLowerCase().includes(q);

      const matchesStatus =
        statusFilter === "All" ||
        String(t.status || "").toLowerCase() === statusFilter.toLowerCase();

      return matchesQuery && matchesStatus;
    });
  }, [transactions, query, statusFilter]);

  const summary = useMemo(() => {
    const totalTx = filtered.length;
    const totalAmount = filtered.reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
    const totalEarnings = filtered.reduce((sum, t) => sum + (Number(t.riderEarnings) || 0), 0);
    const paidCount = filtered.filter((t) => (t.status || "").toLowerCase() === "paid").length;

    return { totalTx, totalAmount, totalEarnings, paidCount };
  }, [filtered]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">Revenue</h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Track your transactions and earnings from completed deliveries.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by TRX / Order ID / Method..."
              className="w-full sm:w-[280px] rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-orange-200"
          >
            <option>All</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-orange-50 shadow-sm p-5">
          <p className="text-xs font-semibold text-slate-500">Transactions</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{summary.totalTx}</p>
        </div>

        <div className="bg-white rounded-2xl border border-orange-50 shadow-sm p-5">
          <p className="text-xs font-semibold text-slate-500">Paid</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">{summary.paidCount}</p>
        </div>

        <div className="bg-white rounded-2xl border border-orange-50 shadow-sm p-5">
          <p className="text-xs font-semibold text-slate-500">Total Amount</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">
            ৳ {summary.totalAmount.toLocaleString("en-BD")}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-orange-50 shadow-sm p-5">
          <p className="text-xs font-semibold text-slate-500">Your Earnings</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">
            ৳ {summary.totalEarnings.toLocaleString("en-BD")}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-[#fff7ef]">
          <p className="text-sm font-semibold text-slate-900">Transaction History</p>
          <p className="text-xs text-slate-500 mt-1">
            Showing <span className="font-semibold">{filtered.length}</span> record(s)
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-orange-50 text-slate-600">
              <tr>
                <th className="px-6 py-4 font-semibold">Payment Date</th>
                <th className="px-6 py-4 font-semibold">Transaction ID</th>
                <th className="px-6 py-4 font-semibold">Order ID</th>
                <th className="px-6 py-4 font-semibold">Method</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Amount</th>
                <th className="px-6 py-4 font-semibold text-right">Earnings</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-slate-500">
                    No transactions found.
                  </td>
                </tr>
              ) : (
                filtered.map((t) => (
                  <tr key={t.transactionId} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-mono text-xs text-slate-700">
                      {t.paymentDate || "—"}
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-800">
                      {t.transactionId}
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-800">
                      {t.orderId}
                    </td>
                    <td className="px-6 py-4">{t.method || "—"}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] border ${statusPill(t.status)}`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-slate-900">
                      ৳ {Number(t.amount || 0).toLocaleString("en-BD")}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-green-700">
                      ৳ {Number(t.riderEarnings || 0).toLocaleString("en-BD")}
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

export default Revenue;
