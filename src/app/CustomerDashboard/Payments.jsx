"use client";

import React, { useMemo } from "react";

export default function Payments({ transactions = [] }) {
  const totalPaid = useMemo(
    () => transactions.reduce((sum, t) => sum + (Number(t.amount) || 0), 0),
    [transactions]
  );

  const badge = (status) => {
    if (status === "Paid") return "bg-green-50 text-green-700 border-green-200";
    if (status === "Pending") return "bg-yellow-50 text-yellow-700 border-yellow-200";
    if (status === "Failed") return "bg-red-50 text-red-700 border-red-200";
    return "bg-slate-50 text-slate-700 border-slate-200";
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">All Transactions</h2>
          <p className="text-xs text-slate-500 mt-1">
            Total: <span className="font-semibold">{transactions.length}</span> • Paid:{" "}
            <span className="font-semibold">৳ {totalPaid.toLocaleString("en-BD")}</span>
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-orange-50 text-slate-600">
            <tr>
              <th className="py-3 px-4">Payment Date</th>
              <th className="py-3 px-4">Transaction ID</th>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Method</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Amount</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 px-4 text-center text-slate-500">
                  No transactions found.
                </td>
              </tr>
            ) : (
              transactions.map((t) => (
                <tr key={t.trxId} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono text-xs text-slate-700">{t.paymentDate}</td>
                  <td className="py-3 px-4 font-mono text-slate-800">{t.trxId}</td>
                  <td className="py-3 px-4 font-mono text-slate-800">{t.orderId}</td>
                  <td className="py-3 px-4">{t.method}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-[11px] border ${badge(t.status)}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-semibold text-slate-900">
                    ৳ {Number(t.amount || 0).toLocaleString("en-BD")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
