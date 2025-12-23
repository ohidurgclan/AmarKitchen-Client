// app/components/topmenubar.jsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopMenuBar = () => {
  const pathname = (usePathname() || "").toLowerCase();

  const isActive = (href) => {
    const h = href.toLowerCase();
    return pathname === h || pathname.startsWith(h + "/");
  };

  const linkClass = (href) => {
    const active = isActive(href);

    return `
      relative inline-flex items-center
      text-sm font-medium transition
      ${active ? "text-orange-600 font-semibold" : "text-slate-700 hover:text-orange-500"}
      pb-3
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:rounded-full
      after:transition-all after:duration-200
      ${active ? "after:w-full after:bg-orange-500" : "after:w-0 after:bg-orange-500 hover:after:w-full"}
    `;
  };

  return (
    <header className="bg-white text-slate-900">
      <div className="sticky top-0 z-50 bg-white border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="Untitled-1.png"
              alt="Amarkitchen logo"
              className="h-[34px] md:h-[39px] object-contain drop-shadow-xl"
            />
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/signinselectionpage" className={linkClass("/signinselectionpage")}>
              Delivery
            </Link>

            <Link href="/pickup" className={linkClass("/pickup")}>
              Pick-up
            </Link>

            <Link href="/shops" className={linkClass("/shops")}>
              Kitchens
            </Link>

            <Link href="/pandamart" className={linkClass("/pandamart")}>
              AKmart
            </Link>
          </nav>

          {/* Auth + Cart */}
          <div className="flex items-center gap-3">
            <Link href="/signinselectionpage">
              <button
                type="button"
                className="border border-orange-500 bg-white text-orange-600 text-sm font-semibold px-4 py-2 rounded-md hover:bg-orange-50 transition"
              >
                Sign In
              </button>
            </Link>

            <Link href="/signupselectionpage">
              <button
                type="button"
                className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition"
              >
                Sign Up
              </button>
            </Link>

            <Link href="/cart">
              <button
                type="button"
                className="border border-orange-300 bg-white text-orange-600 p-2 rounded-md hover:bg-orange-50 transition flex items-center justify-center"
                aria-label="Cart"
              >
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
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopMenuBar;
