// app/(customer)/pandamart/AKmart.jsx
"use client";

import React, { useMemo, useState } from "react";
import TopMenuBar from "../TopMenuBar/TopMenuBar";
import Footer from "../components/global/footer/footer";
const CATEGORIES = ["All", "Ready Meals", "Frozen", "Spices", "Sauces", "Snacks", "Beverages"];

const PRODUCTS = [
  {
    id: "AKP-101",
    name: "Amarkitchen Chicken Biryani (Ready Meal)",
    category: "Ready Meals",
    price: 220,
    badge: "Bestseller",
    desc: "Heat & eat in 3 minutes. Authentic aroma & taste.",
    img: "akmart/biryani.jpg",
    weight: "350g",
  },
  {
    id: "AKP-102",
    name: "Amarkitchen Beef Tehari (Ready Meal)",
    category: "Ready Meals",
    price: 240,
    badge: "New",
    desc: "Premium beef, balanced spices, restaurant-style finish.",
    img: "akmart/tehari.jpg",
    weight: "350g",
  },
  {
    id: "AKP-103",
    name: "Amarkitchen Frozen Chicken Nuggets",
    category: "Frozen",
    price: 330,
    badge: "Popular",
    desc: "Crispy outside, juicy inside. Perfect for quick snacks.",
    img: "akmart/nuggets.jpg",
    weight: "500g",
  },
  {
    id: "AKP-104",
    name: "Amarkitchen Frozen Paratha",
    category: "Frozen",
    price: 260,
    badge: "Family Pack",
    desc: "Flaky & soft. Ready in minutes.",
    img: "akmart/paratha.jpg",
    weight: "10 pcs",
  },
  {
    id: "AKP-105",
    name: "Chattogram Spice Mix (Mezban Style)",
    category: "Spices",
    price: 180,
    badge: "Signature",
    desc: "Amarkitchen house-blend for rich, smoky flavor.",
    img: "akmart/spice-mix.jpg",
    weight: "100g",
  },
  {
    id: "AKP-106",
    name: "Amarkitchen Garam Masala",
    category: "Spices",
    price: 160,
    badge: "Pure",
    desc: "Freshly ground blend for curries, biryani, and grills.",
    img: "akmart/garam-masala.jpg",
    weight: "80g",
  },
  {
    id: "AKP-107",
    name: "Amarkitchen Garlic Mayo",
    category: "Sauces",
    price: 120,
    badge: "Top Rated",
    desc: "Creamy dip for fries, burgers, wraps.",
    img: "akmart/garlic-mayo.jpg",
    weight: "250g",
  },
  {
    id: "AKP-108",
    name: "Amarkitchen Chili Sauce",
    category: "Sauces",
    price: 110,
    badge: "Hot",
    desc: "Sweet & spicy—great with snacks and noodles.",
    img: "akmart/chili-sauce.jpg",
    weight: "250g",
  },
  {
    id: "AKP-109",
    name: "Amarkitchen Chanachur Mix",
    category: "Snacks",
    price: 90,
    badge: "Crunchy",
    desc: "Classic Bangladeshi snack with a bold kick.",
    img: "akmart/chanachur.jpg",
    weight: "200g",
  },
  {
    id: "AKP-110",
    name: "Amarkitchen Lemon Drink",
    category: "Beverages",
    price: 60,
    badge: "Refreshing",
    desc: "Light, citrusy, and perfect with meals.",
    img: "akmart/lemon-drink.jpg",
    weight: "250ml",
  },
];

const currencyBDT = (n) => `৳ ${Number(n).toLocaleString("en-BD")}`;

const Badge = ({ text }) => {
  const styles =
    text === "Bestseller"
      ? "bg-orange-500 text-white border-orange-500"
      : text === "New"
      ? "bg-slate-900 text-white border-slate-900"
      : text === "Hot"
      ? "bg-red-500 text-white border-red-500"
      : "bg-orange-50 text-orange-700 border-orange-100";

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${styles}`}>
      {text}
    </span>
  );
};

export default function AKmart() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState(() => new Map()); // id -> qty

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const catOk = activeCategory === "All" || p.category === activeCategory;
      const qOk = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [activeCategory, query]);

  const totals = useMemo(() => {
    let items = 0;
    let subtotal = 0;
    for (const [id, qty] of cart.entries()) {
      const p = PRODUCTS.find((x) => x.id === id);
      if (!p) continue;
      items += qty;
      subtotal += p.price * qty;
    }
    return { items, subtotal };
  }, [cart]);

  const addToCart = (id) => {
    setCart((prev) => {
      const next = new Map(prev);
      next.set(id, (next.get(id) || 0) + 1);
      return next;
    });
  };

  const decFromCart = (id) => {
    setCart((prev) => {
      const next = new Map(prev);
      const curr = next.get(id) || 0;
      if (curr <= 1) next.delete(id);
      else next.set(id, curr - 1);
      return next;
    });
  };

  const qtyOf = (id) => cart.get(id) || 0;

  return (
    <div className="min-h-screen bg-white">
      <TopMenuBar />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-6">
        {/* Header */}
        <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-100 blur-2xl opacity-70" />
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-orange-50 blur-2xl opacity-80" />

          <div className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide text-orange-700 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                  🛒 AKmart
                </p>
                <h1 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900">
                  Amarkitchen products for your daily needs
                </h1>
                <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                  Ready meals, frozen items, signature spices, sauces and snacks—made and packed by Amarkitchen.
                </p>
              </div>

              {/* Mini cart */}
              <div className="rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4">
                <p className="text-xs font-semibold text-slate-700">Cart Summary</p>
                <div className="mt-1 flex items-center justify-between gap-6">
                  <p className="text-sm text-slate-700">
                    Items: <span className="font-extrabold text-slate-900">{totals.items}</span>
                  </p>
                  <p className="text-sm text-slate-700">
                    Subtotal: <span className="font-extrabold text-orange-700">{currencyBDT(totals.subtotal)}</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-3 w-full rounded-xl bg-orange-500 text-white text-sm font-semibold py-2.5 hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={totals.items === 0}
                  onClick={() => alert("Checkout page later ✅")}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>

            {/* Search + Categories */}
            <div className="mt-6 flex flex-col gap-4">
              {/* Search */}
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-orange-200">
                <span className="text-slate-400">🔎</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products: biryani, spice, nuggets..."
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

              {/* Category pills */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => {
                  const active = activeCategory === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setActiveCategory(c)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold border transition
                        ${
                          active
                            ? "bg-orange-600 text-white border-orange-600 shadow-sm"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-orange-50 hover:border-orange-200"
                        }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-white rounded-3xl border border-orange-100 shadow-sm p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base md:text-lg font-extrabold text-slate-900">Products</h2>
            <span className="text-xs text-slate-500">Showing: {filtered.length}</span>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              No products found for: <span className="font-semibold">{query}</span>
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p) => {
                const q = qtyOf(p.id);

                return (
                  <div
                    key={p.id}
                    className="group rounded-3xl border border-slate-200 bg-white hover:border-orange-200 hover:shadow-sm transition overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-44 bg-orange-50">
                      {/* If you don't have images yet, keep this gradient block */}
                      <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-white" />

                      {/* Optional real image */}
                      {/* <img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover" /> */}

                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge text={p.badge} />
                      </div>

                      <div className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-800 backdrop-blur">
                        {p.weight}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-sm font-extrabold text-slate-900 leading-snug line-clamp-2">
                            {p.name}
                          </p>
                          <p className="mt-1 text-[11px] font-semibold text-slate-500">{p.category}</p>
                        </div>

                        <p className="text-sm font-extrabold text-orange-700 whitespace-nowrap">
                          {currencyBDT(p.price)}
                        </p>
                      </div>

                      <p className="mt-3 text-sm text-slate-600 line-clamp-2">{p.desc}</p>

                      {/* Actions */}
                      <div className="mt-4 flex items-center justify-between gap-3">
                        {q === 0 ? (
                          <button
                            type="button"
                            onClick={() => addToCart(p.id)}
                            className="w-full rounded-2xl bg-orange-500 text-white text-sm font-semibold py-2.5 hover:bg-orange-600 transition"
                          >
                            Add to Cart
                          </button>
                        ) : (
                          <div className="w-full flex items-center justify-between rounded-2xl border border-orange-200 bg-orange-50 px-3 py-2">
                            <button
                              type="button"
                              onClick={() => decFromCart(p.id)}
                              className="h-9 w-9 rounded-xl bg-white border border-orange-200 text-orange-700 font-extrabold hover:bg-orange-100 transition"
                            >
                              −
                            </button>

                            <div className="text-center">
                              <p className="text-[11px] font-semibold text-slate-600">Quantity</p>
                              <p className="text-sm font-extrabold text-slate-900">{q}</p>
                            </div>

                            <button
                              type="button"
                              onClick={() => addToCart(p.id)}
                              className="h-9 w-9 rounded-xl bg-orange-500 text-white font-extrabold hover:bg-orange-600 transition"
                            >
                              +
                            </button>
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={() => alert(`Viewing product: ${p.name}`)}
                          className="shrink-0 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer note */}
        <div className="text-center text-xs text-slate-500">
          More products will be added soon. Images can be connected later from your DB.
        </div>
      </div>
      <Footer/>
    </div>
  );
}
