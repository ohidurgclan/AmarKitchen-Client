// UserSignupForm.jsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserSignupForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    phone: "",
  });

  const setField = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // TODO: replace with your API call
    console.log("User signup payload:", form);

    alert("User signup successful!");
    router.push("/Homebar");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7ef] px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-2xl font-extrabold text-center text-slate-900">
          User Sign Up
        </h1>
        <p className="text-center text-sm text-slate-600 mt-2">
          Create your account to continue
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder="Enter your name"
              className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setField("password", e.target.value)}
              placeholder="Create a password"
              className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Location
            </label>
            <input
              type="text"
              required
              value={form.location}
              onChange={(e) => setField("location", e.target.value)}
              placeholder="e.g., Dhanmondi, Dhaka"
              className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Phone
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setField("phone", e.target.value)}
              placeholder="e.g., 01XXXXXXXXX"
              className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl text-base font-semibold hover:bg-orange-400 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
