import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <main className="min-h-screen bg-[#fff7ef] flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg p-8 md:p-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Sign in to Amarkitchen
          </h1>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Choose how you want to sign in.
          </p>
        </div>

        {/* Options */}
        <div className="grid gap-4 md:grid-cols-4">
          {/* Admin */}
          <Link
            href="/SigninForm"
            className="group border border-orange-100 rounded-2xl p-5 flex flex-col justify-between hover:border-orange-400 hover:shadow-md transition"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-orange-100 text-orange-600 text-lg font-bold">
                A
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Admin Sign in</h2>
              <p className="text-xs md:text-sm text-slate-600">
                Manage kitchens, riders, menus and orders from the dashboard.
              </p>
            </div>

            <div className="mt-4 w-full bg-orange-500 text-white text-sm font-semibold py-2.5 rounded-md text-center group-hover:bg-orange-600">
              Continue as Admin
            </div>
          </Link>

          {/* Customer */}
          <Link
            href="/SigninFormCustomer"
            className="group border border-orange-100 rounded-2xl p-5 flex flex-col justify-between hover:border-orange-400 hover:shadow-md transition"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-orange-100 text-orange-600 text-lg font-bold">
                C
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Customer Sign in</h2>
              <p className="text-xs md:text-sm text-slate-600">
                Order food, track deliveries and manage your personal account.
              </p>
            </div>

            <div className="mt-4 w-full bg-orange-500 text-white text-sm font-semibold py-2.5 rounded-md text-center group-hover:bg-orange-600">
              Continue as Customer
            </div>
          </Link>

          {/* Business */}
          <Link
            href="/SigninFormKitchen"
            className="group border border-orange-100 rounded-2xl p-5 flex flex-col justify-between hover:border-orange-400 hover:shadow-md transition"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-orange-100 text-orange-600 text-lg font-bold">
                B
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Business Account</h2>
              <p className="text-xs md:text-sm text-slate-600">
                Create and manage bulk orders, office meals and company billing.
              </p>
            </div>

            <div className="mt-4 w-full bg-orange-500 text-white text-sm font-semibold py-2.5 rounded-md text-center group-hover:bg-orange-600">
              Continue as Business
            </div>
          </Link>

          {/* Rider */}
          <Link
            href="/SigninFormRider"
            className="group border border-orange-100 rounded-2xl p-5 flex flex-col justify-between hover:border-orange-400 hover:shadow-md transition"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-orange-100 text-orange-600 text-lg font-bold">
                R
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Rider Sign in</h2>
              <p className="text-xs md:text-sm text-slate-600">
                Go online, accept orders and see your earnings in real time.
              </p>
            </div>

            <div className="mt-4 w-full bg-orange-500 text-white text-sm font-semibold py-2.5 rounded-md text-center group-hover:bg-orange-600">
              Continue as Rider
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
