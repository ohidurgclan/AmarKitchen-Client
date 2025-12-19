import React from "react";

const Revenue = ({ dailyEarnings, monthlyEarnings }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
      <h2 className="text-sm md:text-base font-semibold text-slate-900">Revenue Breakdown</h2>
      <div className="space-y-4 mt-4">
        <div>
          <p className="text-xs font-semibold text-slate-500">Daily Earnings</p>
          <p className="text-xl font-bold text-slate-900">
            2025-12-01: ৳ {dailyEarnings["2025-12-01"].toLocaleString("en-BD")}
          </p>
          <p className="text-xl font-bold text-slate-900">
            2025-12-02: ৳ {dailyEarnings["2025-12-02"].toLocaleString("en-BD")}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500">Monthly Earnings</p>
          <p className="text-xl font-bold text-slate-900">
            December 2025: ৳ {monthlyEarnings["December 2025"].toLocaleString("en-BD")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
