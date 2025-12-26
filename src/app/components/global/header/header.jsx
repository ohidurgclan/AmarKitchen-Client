import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-slate-900">
      {/* HERO SECTION – white */}
      <div className="bg-white">
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 space-y-7">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Fast, Fresh
              <br />
              <span className="text-orange-500">&amp; Right</span> <span>To Your Door</span>
            </h1>

            <p className="text-base md:text-lg text-slate-700">
              Order dishes from your favorite restaurants near you.
            </p>

            <div className="space-y-4 mt-2">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex-1 flex items-center rounded-md border border-orange-200 bg-white px-6 py-3 shadow-sm">
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="flex-1 bg-transparent text-sm md:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                </div>

                <button
                  type="button"
                  className="rounded-md bg-orange-500 px-8 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:bg-orange-600 whitespace-nowrap"
                >
                  Find Food
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-orange-600"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-yellow-300 text-sm font-bold text-orange-700">
                    $
                  </span>
                  <span>Order Now</span>
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-800 border border-orange-200 shadow-md hover:bg-orange-50"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-orange-300 text-xs font-bold text-orange-500">
                    ★
                  </span>
                  <span>Top Rated</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="mt-10 md:mt-0 block md:absolute md:right-0 md:bottom-0 md:translate-x-10">
            <img
              src="order_delivery.jpg"
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
