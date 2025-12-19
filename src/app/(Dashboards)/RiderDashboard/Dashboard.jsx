import React from "react";

const Dashboard = ({ totalDeliveries, totalEarnings }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {/* Overview Cards */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Total Deliveries</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">{totalDeliveries}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Total Earnings</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">৳ {totalEarnings.toLocaleString("en-BD")}</p>
      </div>
    </div>
  );
};

export default Dashboard;
