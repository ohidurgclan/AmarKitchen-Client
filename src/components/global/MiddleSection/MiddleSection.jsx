// app/(customer)/kitchen/MiddleSection.jsx
"use client";

import React, { useMemo, useState } from "react";
import TopMenuBar from "@/app/TopMenuBar/TopMenuBar"; // ✅ update path if yours is different

const CUISINES = [
  {
    name: "All",
    img: null,
  },
  {
    name: "Biryani",
    img: "https://images.unsplash.com/photo-1604908812869-55a1b0b6a14f?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Pizza",
    img: "https://images.unsplash.com/photo-1548365328-9f547d0f21c5?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Cakes",
    img: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Burgers",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Snacks",
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Tehari",
    img: "https://images.unsplash.com/photo-1604908177075-8b4a4b3c5a9c?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Cafe",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Rice Dishes",
    img: "https://images.unsplash.com/photo-1543339318-b43dc53e19b3?auto=format&fit=crop&w=240&q=80",
  },
];

const RESTAURANTS = [
  {
    name: "Lahab",
    tag: "Kebab • Grill",
    cuisine: "Biryani",
    discount: "15% off • Tk. 50",
    rating: "4.3 (50+)",
    time: "20–30 min",
    distance: "1.2 km",
    img: "https://images.unsplash.com/photo-1550547660-1d4c5b1f8f8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sparrows",
    tag: "Western • Steak",
    cuisine: "Cafe",
    discount: "15% off • Tk. 50",
    rating: "4.7 (100+)",
    time: "25–35 min",
    distance: "1.8 km",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Indulge – United Hospital",
    tag: "Fast Food",
    cuisine: "Burgers",
    discount: "15% off • Tk. 50",
    rating: "4.0 (16)",
    time: "30–40 min",
    distance: "2.3 km",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pizza Point",
    tag: "Italian • Pizza",
    cuisine: "Pizza",
    discount: "Buy 1 Get 1",
    rating: "4.5 (200+)",
    time: "25–35 min",
    distance: "2.0 km",
    img: "https://images.unsplash.com/photo-1548365328-9f547d0f21c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sweet Slice",
    tag: "Bakery • Cakes",
    cuisine: "Cakes",
    discount: "10% off",
    rating: "4.6 (90+)",
    time: "20–30 min",
    distance: "1.5 km",
    img: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Tehari Express",
    tag: "Bangladeshi • Tehari",
    cuisine: "Tehari",
    discount: "Free drink",
    rating: "4.2 (70+)",
    time: "30–45 min",
    distance: "3.1 km",
    img: "https://images.unsplash.com/photo-1604908177075-8b4a4b3c5a9c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function MiddleSection() {
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [search, setSearch] = useState("");

  const shownRestaurants = useMemo(() => {
    const q = search.trim().toLowerCase();

    return RESTAURANTS.filter((r) => {
      const cuisineOk = selectedCuisine === "All" || r.cuisine === selectedCuisine;
      const searchOk =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.tag.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q);
      return cuisineOk && searchOk;
    });
  }, [selectedCuisine, search]);

  return (
    <div className="bg-white min-h-screen">
      

      <main className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
          {/* LEFT FILTERS – lg+ */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 max-h-[calc(100vh-150px)] overflow-y-auto">
              <h2 className="text-lg font-semibold mb-4 text-slate-900">Filters</h2>

              {/* Selected cuisine */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-500 mb-2">Selected</p>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-2">
                  <span className="text-xs font-semibold text-slate-800">{selectedCuisine}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedCuisine("All")}
                    className="text-[11px] font-semibold text-orange-700 hover:text-orange-800"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Sort (demo) */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-500 mb-2">Sort by</p>
                <div className="space-y-2 text-sm text-slate-700">
                  {["Relevance", "Top rated", "Distance"].map((item, idx) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="sort"
                        defaultChecked={idx === 0}
                        className="h-4 w-4"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Offers (demo) */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-500 mb-2">Offers</p>
                <div className="space-y-2 text-sm text-slate-700">
                  {["Accepts vouchers", "Deals"].map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Quick help */}
              <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4 text-xs text-slate-700">
                Tip: Select a cuisine to filter kitchens faster.
              </div>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT */}
          <section className="flex-1 space-y-8">
            {/* Search bar + meta */}
            <div className="w-full flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
              <div className="flex-1">
                <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-sm border border-slate-100">
                  <span className="mr-3 text-slate-400">🔍</span>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search restaurants, cuisines, and dishes"
                    className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                  {search ? (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
                    >
                      Clear
                    </button>
                  ) : null}
                </div>
              </div>

              <div className="text-xs text-slate-500 sm:text-right">
                Selected: <span className="font-semibold text-slate-800">{selectedCuisine}</span>
              </div>
            </div>

            {/* Cuisines carousel */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-slate-900">Cuisines</h2>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {CUISINES.map((c) => {
                  const active = selectedCuisine === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedCuisine(c.name)}
                      className="flex-shrink-0 w-24 flex flex-col items-center gap-2"
                    >
                      <div
                        className={`w-20 h-20 rounded-2xl border flex items-center justify-center overflow-hidden shadow-sm transition
                          ${active ? "bg-orange-500 border-orange-500" : "bg-white border-slate-100 hover:border-orange-200"}
                        `}
                      >
                        {c.name === "All" ? (
                          <span className={`text-sm font-extrabold ${active ? "text-white" : "text-orange-600"}`}>
                            All
                          </span>
                        ) : (
                          <img
                            src={c.img}
                            alt={c.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.src =
                                "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=240&q=80";
                            }}
                          />
                        )}
                      </div>

                      <span className={`text-xs md:text-sm font-medium ${active ? "text-orange-600" : "text-slate-700"}`}>
                        {c.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* All restaurants */}
            <section className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">All restaurants</h2>
                <span className="text-xs text-slate-500">Showing: {shownRestaurants.length}</span>
              </div>

              {shownRestaurants.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
                  No restaurants found for your filter/search.
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {shownRestaurants.map((res) => (
                    <div
                      key={res.name}
                      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                    >
                      {/* Image */}
                      <div className="relative">
                        <img
                          src={res.img}
                          alt={res.name}
                          className="w-full h-40 object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80";
                          }}
                        />
                        <span className="absolute top-3 left-3 bg-orange-500 text-white text-[11px] font-semibold px-2 py-1 rounded-full">
                          {res.discount}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="p-4 space-y-1">
                        <h3 className="text-sm md:text-base font-semibold text-slate-900">{res.name}</h3>
                        <p className="text-xs text-slate-500">{res.tag}</p>

                        <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2">
                          <span className="flex items-center gap-1">⭐ <span>{res.rating}</span></span>
                          <span>•</span>
                          <span>{res.time}</span>
                          <span>•</span>
                          <span>{res.distance} away</span>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-1 rounded-full">
                            {res.cuisine}
                          </span>

                          <button
                            type="button"
                            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-orange-500 text-white hover:bg-orange-600"
                          >
                            View Menu
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}
