"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7ef] px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-3xl font-semibold text-center mb-8">Sign in</h1>

        <form className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-5 py-3 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Small button centered */}
          <div className="flex justify-center pt-2">
            <Link href="/KitchenDashboard" className="inline-block">
              <button
                type="button"
                className="w-full bg-orange-500 text-white py-3 px-38 rounded-xl text-lg font-medium hover:bg-orange-400 transition"
              >
                Sign In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
