import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-slate-900">
      {/* TOP NAVBAR (white, thin bottom line, STICKY) */}
      <div className="sticky top-0 z-50 bg-white border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-orange-600">
            <img
              src="Untitled-1.png" // nijer image path diba
              alt="Amarkitchen logo"
              className="h-[34px] md:h-[39px] object-contain drop-shadow-xl"
            />
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#delivery" className="text-slate-700 hover:text-orange-500">
              Delivery
            </a>
            <a href="#pickup" className="text-slate-700 hover:text-orange-500">
              Pick-up
            </a>
            <a href="#shops" className="text-slate-700 hover:text-orange-500">
              Kitchens
            </a>
            <a href="#pandamart" className="text-slate-700 hover:text-orange-500">
              AKmart
            </a>
          </nav>

          {/* Auth buttons + Cart */}
          <div className="flex items-center gap-3">
            <button className="border border-orange-500 bg-white text-orange-600 text-sm font-semibold px-4 py-2 rounded-md hover:bg-orange-50">
              Sign In
            </button>
            <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-orange-600">
              Sign Up
            </button>

            {/* Cart button */}
            <button className="border border-orange-300 bg-white text-orange-600 p-2 rounded-md hover:bg-orange-50 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l2-7H6.4M7 13L5.4 5M7 13l-1.5 6h12M9 21a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION – white */}
      <div className="bg-white">
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 space-y-7">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Fast, Fresh
              <br />
              <span className="text-orange-500">&amp; Right</span>{" "}
              <span>To Your Door</span>
            </h1>

            {/* Sub text */}
            <p className="text-base md:text-lg text-slate-700">
              Order dishes from your favorite restaurants near you.
            </p>

            {/* Location + Find Food */}
            <div className="space-y-4 mt-2">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Location box */}
                <div className="flex-1 flex items-center rounded-md border border-orange-200 bg-white px-6 py-3 shadow-sm">
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="flex-1 bg-transparent text-sm md:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                </div>

                {/* Find Food button */}
                <button className="rounded-md bg-orange-500 px-8 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:bg-orange-600 whitespace-nowrap">
                  Find Food
                </button>
              </div>

              {/* Order Now / Top Rated row */}
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-orange-600">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-yellow-300 text-sm font-bold text-orange-700">
                    $
                  </span>
                  <span>Order Now</span>
                </button>

                <button className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-800 border border-orange-200 shadow-md hover:bg-orange-50">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-orange-300 text-xs font-bold text-orange-500">
                    ★
                  </span>
                  <span>Top Rated</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE – below on small, absolute on md+ */}
          <div className="mt-10 md:mt-0 block md:absolute md:right-0 md:bottom-0 md:translate-x-10">
            <img
              src="order_delivery.jpg" // nijer image path diba
              alt="Delivery rider"
              className="h-[260px] md:h-[390px] object-contain drop-shadow-xl mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
