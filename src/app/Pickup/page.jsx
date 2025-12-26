// app/(customer)/pickup/pickup.jsx
"use client";

import React, { useMemo, useState } from "react";
import TopMenuBar from "../TopMenuBar/TopMenuBar";
import Footer from "../components/global/footer/footer";
const DHAKA_LOCATIONS = [
  "Mirpur",
  "Uttara",
  "Banani",
  "Gulshan",
  "Dhanmondi",
  "Mohammadpur",
  "Bashundhara",
  "Badda",
  "Rampura",
  "Motijheel",
  "Khilgaon",
  "Shyamoli",
  "Farmgate",
  "Tejgaon",
  "Old Dhaka",
];

const POPULAR = ["Gulshan", "Banani", "Dhanmondi", "Uttara", "Mirpur"];

export default function Pickup({ onSelectLocation }) {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DHAKA_LOCATIONS;
    return DHAKA_LOCATIONS.filter((a) => a.toLowerCase().includes(q));
  }, [query]);

  const handleSelect = (area) => {
    setSelected(area);
    onSelectLocation?.(area);
  };

  const clearSelection = () => {
    setSelected("");
    onSelectLocation?.("");
  };

  return (
    <>
      <TopMenuBar />

      {/* ✅ PAGE BACKGROUND WHITE */}
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-6">
          {/* Hero / Header */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-100 blur-2xl opacity-70" />
            <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-orange-50 blur-2xl opacity-80" />

            <div className="relative p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide text-orange-700 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                    📍 Pickup Mode
                  </p>
                  <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900">
                    Select your pickup area
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 max-w-xl">
                    Choose a location in Dhaka to see kitchens available for pickup.
                    You can search, or pick from popular areas.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {selected ? (
                    <>
                      <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                        ✅ {selected}
                      </span>
                      <button
                        type="button"
                        onClick={clearSelection}
                        className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      >
                        Clear
                      </button>
                    </>
                  ) : (
                    <span className="text-xs text-slate-500">No area selected yet</span>
                  )}
                </div>
              </div>

              {/* Search */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="text-[11px] font-semibold text-slate-500">Search area</label>
                  <div className="mt-2 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-orange-200">
                    <span className="text-slate-400">🔎</span>
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Type: Mirpur, Gulshan, Banani..."
                      className="w-full bg-transparent outline-none text-sm text-slate-800 placeholder:text-slate-400"
                    />
                    {query ? (
                      <button
                        type="button"
                        onClick={() => setQuery("")}
                        className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
                      >
                        Reset
                      </button>
                    ) : null}
                  </div>
                </div>

                <div className="sm:w-56">
                  <label className="text-[11px] font-semibold text-slate-500">Quick tip</label>
                  <div className="mt-2 rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 text-xs text-slate-700">
                    Pick an area to show kitchens nearby.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular */}
          <div className="bg-white rounded-3xl border border-orange-100 shadow-sm p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-bold text-slate-900">Popular areas</h3>
              <span className="text-xs text-slate-500">Tap to select quickly</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {POPULAR.map((area) => {
                const active = selected === area;
                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => handleSelect(area)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition
                      ${
                        active
                          ? "bg-orange-600 text-white border-orange-600 shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-orange-50 hover:border-orange-200"
                      }`}
                  >
                    {area}
                  </button>
                );
              })}
            </div>
          </div>

          {/* All Locations */}
          <div className="bg-white rounded-3xl border border-orange-100 shadow-sm p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-bold text-slate-900">All Dhaka locations</h3>
              <span className="text-xs text-slate-500">Showing: {filtered.length}</span>
            </div>

            {filtered.length === 0 ? (
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
                No locations found for: <span className="font-semibold">{query}</span>
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filtered.map((area) => {
                  const active = selected === area;
                  return (
                    <button
                      key={area}
                      type="button"
                      onClick={() => handleSelect(area)}
                      className={`group relative overflow-hidden rounded-2xl border px-4 py-4 text-left transition
                        ${
                          active
                            ? "border-orange-600 bg-orange-600 text-white shadow-sm"
                            : "border-slate-200 bg-white text-slate-800 hover:border-orange-200 hover:bg-orange-50"
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="min-w-0">
                          <p className={`text-sm font-extrabold truncate ${active ? "text-white" : "text-slate-900"}`}>
                            {area}
                          </p>
                          <p className={`text-[11px] mt-1 ${active ? "text-orange-50" : "text-slate-500"}`}>
                            Pickup kitchens available
                          </p>
                        </div>

                        <span
                          className={`ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm transition
                            ${
                              active
                                ? "border-white/30 bg-white/15"
                                : "border-slate-200 bg-white group-hover:border-orange-200"
                            }`}
                        >
                          {active ? "✓" : "→"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {selected && (
              <div className="mt-6 rounded-2xl bg-orange-50 border border-orange-100 p-5">
                <p className="text-sm font-bold text-slate-900">📍 Selected Area</p>
                <p className="text-sm text-slate-700 mt-1">
                  Showing pickup kitchens in{" "}
                  <span className="font-extrabold text-orange-700">{selected}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
