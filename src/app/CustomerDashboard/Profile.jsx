"use client";

import React from "react";

const Profile = ({ customerInfo = {} }) => {
  const {
    name = "Rahim Uddin",
    email = "rahim@example.com",
    phone = "0123456789",
  } = customerInfo;

  const initials = (name || "C")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <div className="space-y-6">
      {/* Title + Action */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">
            My Profile
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            View and manage your personal information.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("Edit Profile")}
          className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-1"
        >
          ✏️ Edit Profile
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-50 overflow-hidden">
        {/* Top Banner */}
        <div className="relative bg-[#fff3e6] border-b border-orange-100 px-6 py-6">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="h-14 w-14 rounded-2xl bg-white border border-orange-200 flex items-center justify-center shadow-sm">
              <span className="text-lg font-extrabold text-orange-600">
                {initials}
              </span>
            </div>

            {/* Name + Email */}
            <div>
              <p className="text-lg font-bold text-slate-900 leading-tight">
                {name}
              </p>
              <p className="text-xs text-slate-600">{email}</p>
              <div className="mt-2 inline-flex items-center gap-2">
                <span className="text-[11px] px-2.5 py-1 rounded-full border border-green-200 bg-green-50 text-green-700 font-semibold">
                  Active
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full border border-orange-200 bg-white text-orange-700 font-semibold">
                  Customer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="rounded-2xl border border-slate-100 p-4 hover:bg-slate-50 transition">
              <p className="text-[11px] font-semibold text-slate-500">
                FULL NAME
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {name}
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-slate-100 p-4 hover:bg-slate-50 transition">
              <p className="text-[11px] font-semibold text-slate-500">EMAIL</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {email}
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-slate-100 p-4 hover:bg-slate-50 transition">
              <p className="text-[11px] font-semibold text-slate-500">PHONE</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {phone}
              </p>
            </div>

            {/* Security */}
            <div className="rounded-2xl border border-slate-100 p-4 bg-slate-50">
              <p className="text-[11px] font-semibold text-slate-500">
                SECURITY
              </p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Password
                  </p>
                  <p className="text-xs text-slate-500">Last updated: —</p>
                </div>

                <button
                  type="button"
                  onClick={() => alert("Change Password")}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                >
                  🔒 Change
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="rounded-2xl border border-orange-100 bg-[#fff7ef] px-4 py-3">
              <p className="text-xs font-semibold text-slate-900">
                Delivery Tip
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Keep your phone number correct so the rider can call you.
              </p>
            </div>

            <button
              type="button"
              onClick={() => alert("Support")}
              className="rounded-xl border border-orange-200 bg-white px-4 py-2 text-xs font-semibold text-orange-700 hover:bg-orange-50 transition"
            >
              🆘 Help & Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
