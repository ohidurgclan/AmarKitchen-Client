import React from "react";

const AdminRiders = ({ riders }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Riders Verification</h2>

      <div className="space-y-4">
        {riders.map((rider) => (
          <div
            key={rider.id}
            className="flex items-center justify-between p-4 bg-slate-50 rounded-lg shadow-sm hover:bg-slate-100"
          >
            <div>
              <p className="text-lg font-semibold text-slate-900">{rider.name}</p>
              <p className="text-xs text-slate-500">{rider.note}</p>
            </div>

            <div className="flex gap-2">
              {rider.state === "pending_docs" && (
                <button className="text-xs px-3 py-1 rounded border border-green-200 text-green-700 hover:bg-green-50">
                  Verify
                </button>
              )}
              {rider.state === "waiting_docs" && (
                <button className="text-xs px-3 py-1 rounded border border-slate-200 text-slate-700 hover:bg-slate-50">
                  Remind
                </button>
              )}
              <button className="text-xs px-3 py-1 rounded border border-red-200 text-red-700 hover:bg-red-50">
                Block
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminRiders;
