// app/(customer)/kitchens/kitchen.jsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import TopMenuBar from "../TopMenuBar/TopMenuBar";
import Footer from "../components/global/footer/footer";
const OFFER_TAGS = [
  { key: "discount", label: "Discount" },
  { key: "freeDelivery", label: "Free Delivery" },
  { key: "bogo", label: "Buy 1 Get 1" },
  { key: "new", label: "New" },
  { key: "topRated", label: "Top Rated" },
  { key: "pickup", label: "Pickup" },
];

// Demo DB (replace with API later)
const KITCHENS = [
  {
    id: "K-101",
    name: "Dhaka Biryani House",
    area: "Dhanmondi",
    cuisine: "Biryani • Bangla",
    rating: 4.7,
    eta: "25-35 min",
    priceLevel: "$$",
    image: "/kitchens/biryani.jpg",
    offers: { discount: true, freeDelivery: false, bogo: false, new: false, topRated: true, pickup: true },
    offerText: "15% OFF",
  },
  {
    id: "K-102",
    name: "Pizza Point",
    area: "Banani",
    cuisine: "Pizza • Italian",
    rating: 4.5,
    eta: "30-40 min",
    priceLevel: "$$",
    image: "/kitchens/pizza.jpg",
    offers: { discount: false, freeDelivery: true, bogo: false, new: true, topRated: false, pickup: false },
    offerText: "FREE Delivery",
  },
  {
    id: "K-103",
    name: "Burger Hub",
    area: "Mirpur",
    cuisine: "Burger • Fast Food",
    rating: 4.3,
    eta: "20-30 min",
    priceLevel: "$",
    image: "/kitchens/burger.jpg",
    offers: { discount: true, freeDelivery: true, bogo: true, new: false, topRated: false, pickup: true },
    offerText: "BOGO + OFF",
  },
  {
    id: "K-104",
    name: "Kacchi Express",
    area: "Gulshan",
    cuisine: "Kacchi • Bangla",
    rating: 4.8,
    eta: "35-45 min",
    priceLevel: "$$$",
    image: "/kitchens/kacchi.jpg",
    offers: { discount: false, freeDelivery: false, bogo: false, new: false, topRated: true, pickup: true },
    offerText: "Top Rated",
  },
  {
    id: "K-105",
    name: "Healthy Bowl",
    area: "Uttara",
    cuisine: "Salad • Healthy",
    rating: 4.4,
    eta: "25-35 min",
    priceLevel: "$$",
    image: "/kitchens/healthy.jpg",
    offers: { discount: true, freeDelivery: false, bogo: false, new: true, topRated: false, pickup: true },
    offerText: "New + 10% OFF",
  },
];

const badgeColor = (type) => {
  if (type === "discount") return "bg-orange-600 text-white";
  if (type === "freeDelivery") return "bg-green-600 text-white";
  if (type === "bogo") return "bg-blue-600 text-white";
  if (type === "new") return "bg-slate-900 text-white";
  if (type === "topRated") return "bg-yellow-400 text-slate-900";
  if (type === "pickup") return "bg-white text-orange-700 border border-orange-200";
  return "bg-slate-100 text-slate-700";
};

export default function Kitchen() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("discount"); // offer filter selected
  const [area, setArea] = useState("All");
  const [selectedKitchenId, setSelectedKitchenId] = useState(""); // ✅ like pickup selection

  const areas = useMemo(() => {
    const a = Array.from(new Set(KITCHENS.map((k) => k.area))).sort();
    return ["All", ...a];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return KITCHENS.filter((k) => {
      const matchQuery =
        !q ||
        k.name.toLowerCase().includes(q) ||
        k.cuisine.toLowerCase().includes(q) ||
        k.area.toLowerCase().includes(q);

      const matchArea = area === "All" ? true : k.area === area;

      const matchOffer = activeTag ? Boolean(k.offers?.[activeTag]) : true;

      return matchQuery && matchArea && matchOffer;
    });
  }, [query, activeTag, area]);

  const selectedKitchen = useMemo(
    () => KITCHENS.find((k) => k.id === selectedKitchenId),
    [selectedKitchenId]
  );

  const clearSelectedKitchen = () => setSelectedKitchenId("");

  return (
    <>
      <TopMenuBar />

      {/* ✅ BG WHITE */}
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-6">
          {/* Header */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-100 blur-2xl opacity-70" />
            <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-orange-50 blur-2xl opacity-80" />

            <div className="relative p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                <div>
                  <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide text-orange-700 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                    🍽️ Kitchens & Offers
                  </p>
                  <h1 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900">
                    Explore kitchens with special offers
                  </h1>
                  <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                    Click a kitchen to select it (like Pickup). Then you can open menu.
                  </p>
                </div>

                {/* Selected kitchen chip */}
                <div className="flex items-center gap-2">
                  {selectedKitchen ? (
                    <>
                      <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                        ✅ {selectedKitchen.name}
                      </span>
                      <button
                        type="button"
                        onClick={clearSelectedKitchen}
                        className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      >
                        Clear
                      </button>
                    </>
                  ) : (
                    <span className="text-xs text-slate-500">No kitchen selected</span>
                  )}
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-3">
                {/* Search */}
                <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 flex items-center gap-2 focus-within:ring-2 focus-within:ring-orange-200">
                  <span className="text-slate-400">🔎</span>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search kitchens, cuisine, area..."
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

                {/* Area */}
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-orange-200"
                >
                  {areas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              {/* Offer Tabs */}
              <div className="mt-4 flex flex-wrap gap-2">
                {OFFER_TAGS.map((t) => {
                  const active = activeTag === t.key;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setActiveTag(t.key)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold border transition ${
                        active
                          ? "bg-orange-600 text-white border-orange-600 shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-orange-50 hover:border-orange-200"
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setActiveTag("")}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition ${
                    !activeTag
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  All Offers
                </button>
              </div>

              {/* Meta */}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1">
                  Showing: <span className="font-bold text-slate-900">{filtered.length}</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
                  Offer:{" "}
                  <span className="font-bold text-slate-900">
                    {activeTag ? OFFER_TAGS.find((x) => x.key === activeTag)?.label : "All"}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
                  Area: <span className="font-bold text-slate-900">{area}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Selected preview card (like pickup bottom box) */}
          {selectedKitchen ? (
            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold text-slate-900">✅ Selected Kitchen</p>
                <p className="mt-1 text-sm text-slate-700">
                  <span className="font-extrabold text-orange-700">{selectedKitchen.name}</span>{" "}
                  • {selectedKitchen.cuisine} •{" "}
                  <span className="font-semibold">{selectedKitchen.area}</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/shops/${selectedKitchen.id}`}
                  className="inline-flex justify-center items-center rounded-xl bg-orange-600 px-5 py-2.5 text-xs font-extrabold text-white hover:bg-orange-700 transition"
                >
                  Open Menu
                </Link>
                <button
                  type="button"
                  onClick={clearSelectedKitchen}
                  className="inline-flex justify-center items-center rounded-xl border border-orange-200 bg-white px-5 py-2.5 text-xs font-extrabold text-orange-700 hover:bg-orange-50 transition"
                >
                  Change
                </button>
              </div>
            </div>
          ) : null}

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
              <p className="text-lg font-extrabold text-slate-900">No kitchens found</p>
              <p className="mt-2 text-sm text-slate-600">Try changing offer, area, or search text.</p>
              <div className="mt-5 flex justify-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setArea("All");
                    setActiveTag("discount");
                  }}
                  className="rounded-full bg-orange-600 px-5 py-2 text-xs font-semibold text-white hover:bg-orange-700"
                >
                  Reset filters
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((k) => {
                const active = selectedKitchenId === k.id;

                return (
                  <button
                    key={k.id}
                    type="button"
                    onClick={() => setSelectedKitchenId(k.id)}
                    className={`text-left group overflow-hidden rounded-3xl border bg-white transition focus:outline-none ${
                      active
                        ? "border-orange-600 ring-2 ring-orange-200 shadow-md"
                        : "border-orange-100 shadow-sm hover:shadow-md hover:border-orange-200"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-44 bg-orange-50">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100" />

                      {k.offerText ? (
                        <span className="absolute top-3 left-3 rounded-full bg-orange-600 text-white text-xs font-extrabold px-3 py-1 shadow-sm">
                          {k.offerText}
                        </span>
                      ) : null}

                      {active ? (
                        <span className="absolute top-3 right-3 rounded-full bg-white/90 border border-orange-200 px-3 py-1 text-xs font-extrabold text-orange-700">
                          ✓ Selected
                        </span>
                      ) : null}

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/90 border border-orange-100 px-3 py-1 text-xs font-semibold text-slate-800">
                          ⭐ {k.rating}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/90 border border-orange-100 px-3 py-1 text-xs font-semibold text-slate-800">
                          ⏱ {k.eta}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-base font-extrabold text-slate-900 truncate">{k.name}</p>
                          <p className="mt-1 text-xs text-slate-600">
                            {k.cuisine} • <span className="font-semibold text-slate-800">{k.area}</span>
                          </p>
                        </div>
                        <span className="text-xs font-bold text-slate-800">{k.priceLevel}</span>
                      </div>

                      {/* Offer badges */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {Object.entries(k.offers || {})
                          .filter(([, v]) => Boolean(v))
                          .slice(0, 4)
                          .map(([key]) => (
                            <span
                              key={key}
                              className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ${
                                key === "pickup" ? badgeColor(key) : badgeColor(key)
                              }`}
                            >
                              {OFFER_TAGS.find((t) => t.key === key)?.label || key}
                            </span>
                          ))}
                      </div>

                      {/* Actions row (kept, but selection is from card click) */}
                      <div className="mt-5 flex items-center gap-2">
                        <span
                          className={`flex-1 inline-flex justify-center items-center rounded-xl px-4 py-2.5 text-xs font-extrabold transition ${
                            active
                              ? "bg-orange-600 text-white"
                              : "bg-white text-orange-700 border border-orange-200 group-hover:bg-orange-50"
                          }`}
                        >
                          {active ? "Selected" : "Select"}
                        </span>

                        <span className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-extrabold text-slate-800 group-hover:bg-slate-50 transition">
                          ❤️ Save
                        </span>
                      </div>

                      <p className="mt-3 text-[11px] text-slate-500">
                        Click the card to select. Use “Open Menu” from the selected box.
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}
