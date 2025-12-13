import React from "react";

const Dashboard = ({ orders, kitchens, ridersVerification, customers }) => {

  // Define getStatusClasses function to handle order status
  const getStatusClasses = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-50 text-green-700";
      case "On the way":
        return "bg-yellow-50 text-yellow-700";
      case "Preparing":
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {/* Overview Cards */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Total Customers</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">{customers.length}</p>
        <p className="text-[11px] text-slate-500 mt-1">+230 this week</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Active Kitchens</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">{kitchens.length}</p>
        <p className="text-[11px] text-slate-500 mt-1">4 pending approval</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Today's Orders</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">{orders.length}</p>
        <p className="text-[11px] text-green-600 mt-1">+18% vs yesterday</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <p className="text-xs font-semibold text-slate-500">Riders Online</p>
        <p className="mt-1 text-2xl font-bold text-slate-900">{ridersVerification.length}</p>
        <p className="text-[11px] text-slate-500 mt-1">Avg delivery: 27 min</p>
      </div>

      {/* Orders Table */}
      <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm md:text-base font-semibold text-slate-900">
            Latest Orders
          </h2>
          <a
            href="#"
            className="text-xs text-orange-500 font-semibold hover:underline"
          >
            View all orders
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm text-left">
            <thead className="text-slate-500 border-b border-slate-100">
              <tr>
                <th className="py-2 pr-4">Order</th>
                <th className="py-2 pr-4">Customer</th>
                <th className="py-2 pr-4">Kitchen</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2 pr-4">Amount</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="py-2 pr-4 font-mono text-xs">#{order.id}</td>
                  <td className="py-2 pr-4">{order.customerName}</td>
                  <td className="py-2 pr-4">{order.kitchenName}</td>
                  <td className="py-2 pr-4">
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-[11px] ${getStatusClasses(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 pr-4 font-semibold">
                    ৳ {order.amount.toLocaleString("en-BD")}
                  </td>
                  <td className="py-2 flex gap-1">
                    <button className="text-[11px] px-2 py-1 rounded border border-slate-200 hover:bg-slate-50">
                      View
                    </button>
                    <button className="text-[11px] px-2 py-1 rounded border border-slate-200 hover:bg-slate-50">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Kitchens & Riders Sections */}
      <div className="space-y-6 lg:grid lg:grid-rows-2">
        {/* Kitchens */}
        <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm md:text-base font-semibold text-slate-900">
              Kitchens (Pending Approval)
            </h2>
            <a
              href="#"
              className="text-xs text-orange-500 font-semibold hover:underline"
            >
              Manage kitchens
            </a>
          </div>

          <div className="space-y-2 text-xs md:text-sm">
            {kitchens.map((kitchen) => (
              <div key={kitchen.id} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{kitchen.name}</p>
                  <p className="text-slate-500 text-[11px]">
                    Requested: {kitchen.requestedDate}
                  </p>
                </div>
                <div className="flex gap-1">
                  <button className="text-[11px] px-2 py-1 rounded border border-green-200 text-green-700 hover:bg-green-50">
                    Approve
                  </button>
                  <button className="text-[11px] px-2 py-1 rounded border border-red-200 text-red-700 hover:bg-red-50">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Riders */}
        <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm md:text-base font-semibold text-slate-900">
              Riders (Verification)
            </h2>
            <a
              href="#"
              className="text-xs text-orange-500 font-semibold hover:underline"
            >
              Manage riders
            </a>
          </div>

          <div className="space-y-2 text-xs md:text-sm">
            {ridersVerification.map((rider) => (
              <div key={rider.id} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{rider.name}</p>
                  <p className="text-slate-500 text-[11px]">{rider.note}</p>
                </div>
                <div className="flex gap-1">
                  {rider.state === "pending_docs" && (
                    <button className="text-[11px] px-2 py-1 rounded border border-green-200 text-green-700 hover:bg-green-50">
                      Verify
                    </button>
                  )}
                  {rider.state === "waiting_docs" && (
                    <button className="text-[11px] px-2 py-1 rounded border border-slate-200 text-slate-700 hover:bg-slate-50">
                      Remind
                    </button>
                  )}
                  <button className="text-[11px] px-2 py-1 rounded border border-red-200 text-red-700 hover:bg-red-50">
                    Block
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
