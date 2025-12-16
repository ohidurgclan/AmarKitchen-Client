import React from "react";

const Dashboard = ({ orders }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {/* Overview Cards */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Total Orders</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">{orders.length}</p>
        <p className="text-[11px] text-slate-500 mt-1">+230 this week</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Active Orders</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">
          {orders.filter(order => order.status === "On the way").length}
        </p>
        <p className="text-[11px] text-slate-500 mt-1">4 pending approval</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Delivered Orders</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">
          {orders.filter(order => order.status === "Delivered").length}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Orders in Progress</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">
          {orders.filter(order => order.status === "Preparing").length}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
