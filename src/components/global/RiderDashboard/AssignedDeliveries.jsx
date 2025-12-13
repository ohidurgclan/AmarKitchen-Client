'use client';

import React, { useState } from "react";

const AssignedDeliveries = ({ deliveries, acceptOrder, declineOrder, updateLocation }) => {
  const [currentLocation, setCurrentLocation] = useState("");

  const handleAccept = (orderId) => {
    acceptOrder(orderId); // This will handle accepting the order
  };

  const handleDecline = (orderId) => {
    declineOrder(orderId); // This will handle declining the order
  };

  const handleLocationUpdate = (orderId) => {
    if (currentLocation.trim() === "") {
      alert("Please enter a valid location.");
      return;
    }
    updateLocation(orderId, currentLocation); // Updates the location
    setCurrentLocation(""); // Reset location after update
  };

  return (
    <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
      <h2 className="text-sm md:text-base font-semibold text-slate-900">
        Assigned Deliveries
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-xs md:text-sm text-left">
          <thead className="text-slate-500 border-b border-slate-100">
            <tr>
              <th className="py-2 pr-4">Order ID</th>
              <th className="py-2 pr-4">Customer</th>
              <th className="py-2 pr-4">Kitchen</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Amount</th>
              <th className="py-2 pr-4">Location</th>
              <th className="py-2 pr-4">Earnings</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {deliveries.map((order) => (
              <tr key={order.id}>
                <td className="py-2 pr-4">{order.id}</td>
                <td className="py-2 pr-4">{order.customerName}</td>
                <td className="py-2 pr-4">{order.kitchenName}</td>
                <td className="py-2 pr-4">
                  <span
                    className={`inline-flex px-2 py-1 rounded-full text-[11px] ${
                      order.status === "Assigned"
                        ? "bg-yellow-50 text-yellow-700"
                        : order.status === "Accepted"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-2 pr-4 font-semibold">৳ {order.amount}</td>
                <td className="py-2 pr-4">
                  {order.status === "Accepted" ? (
                    <span>{order.location || "Not Updated"}</span>
                  ) : (
                    "Not Accepted"
                  )}
                </td>
                <td className="py-2 pr-4 font-semibold">৳ {order.earnings}</td>
                <td className="py-2 flex gap-1">
                  {/* View Button */}
                  <button
                    className="text-[11px] px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                    onClick={() => handleView(order.id)}
                  >
                    View
                  </button>

                  {/* Accept Button */}
                  {order.status === "Assigned" && (
                    <button
                      className="text-[11px] px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                      onClick={() => handleAccept(order.id)}
                    >
                      Accept
                    </button>
                  )}

                  {/* Decline Button */}
                  {order.status === "Assigned" && (
                    <button
                      className="text-[11px] px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                      onClick={() => handleDecline(order.id)}
                    >
                      Decline
                    </button>
                  )}

                  {/* Location Update for Accepted Orders */}
                  {order.status === "Accepted" && (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="text-xs px-2 py-1 border border-slate-300 rounded"
                        placeholder="Enter Current Location"
                        value={currentLocation}
                        onChange={(e) => setCurrentLocation(e.target.value)}
                      />
                      <button
                        className="text-xs px-2 py-1 bg-blue-500 text-white rounded"
                        onClick={() => handleLocationUpdate(order.id)}
                      >
                        Update Location
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDeliveries;
