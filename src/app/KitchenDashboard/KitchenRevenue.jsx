// KitchenRevenue.jsx
"use client";

import React, { useEffect, useRef } from "react";

const KitchenRevenue = ({ revenueData, setActiveSection }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const lastThreeDaysEarnings = revenueData
    .slice(-3)
    .reduce((sum, record) => sum + record.earnings, 0);

  const lastWeekEarnings = revenueData
    .slice(-7)
    .reduce((sum, record) => sum + record.earnings, 0);

  const lastMonthEarnings = revenueData.reduce(
    (sum, record) => sum + record.earnings,
    0
  );

  useEffect(() => {
    const loadChart = async () => {
      if (!chartRef.current) return;

      // load Chart.js once
      if (!window.Chart) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
        script.onload = () => drawChart();
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
      } else {
        drawChart();
      }
    };

    const drawChart = () => {
      const ctx = chartRef.current.getContext("2d");

      // Destroy old chart to avoid duplicates
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new window.Chart(ctx, {
        type: "line",
        data: {
          labels: revenueData.map((item) => item.date),
          datasets: [
            {
              label: "Monthly Earnings",
              data: revenueData.map((item) => item.earnings),
              borderColor: "#FF5733",
              backgroundColor: "rgba(255, 87, 51, 0.2)",
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Revenue Progress (Last Month)",
            },
          },
        },
      });
    };

    loadChart();

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [revenueData]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6 space-y-8">
      <h2 className="text-xl font-semibold text-slate-900">Revenue Report</h2>

      {/* Revenue Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-xs md:text-sm text-left table-auto border-separate border-spacing-2">
          <thead className="text-slate-500 bg-orange-50 border-b border-slate-200">
            <tr>
              <th className="py-2 pr-4 font-semibold text-sm">Period</th>
              <th className="py-2 pr-4 font-semibold text-sm">Earnings (৳)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-2 pr-4 font-mono text-xs">3-Day Earnings</td>
              <td className="py-2 pr-4 font-semibold">
                {lastThreeDaysEarnings.toLocaleString("en-BD")}
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-mono text-xs">Week Earnings</td>
              <td className="py-2 pr-4 font-semibold">
                {lastWeekEarnings.toLocaleString("en-BD")}
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-mono text-xs">Month Earnings</td>
              <td className="py-2 pr-4 font-semibold">
                {lastMonthEarnings.toLocaleString("en-BD")}
              </td>
            </tr>
          </tbody>
        </table>

        {/* ✅ Works without routing */}
        <div className="mt-6 text-left">
          <button
            onClick={() => setActiveSection("fullTransaction")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            See Full Transaction
          </button>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-slate-900">
          Revenue Progress (Last Month)
        </h3>
        <canvas ref={chartRef} width="400" height="200" />
      </div>
    </div>
  );
};



export default KitchenRevenue;
