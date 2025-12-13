import React from "react";

const AdminCustomers = ({ customers }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Customer List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-slate-500 bg-slate-100">
            <tr>
              <th className="py-3 px-4">Customer ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Phone</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono text-sm text-slate-800">{customer.id}</td>
                <td className="py-3 px-4">{customer.name}</td>
                <td className="py-3 px-4">{customer.email}</td>
                <td className="py-3 px-4">{customer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCustomers;
