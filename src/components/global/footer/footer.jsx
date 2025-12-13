import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#fff9f5] border-t border-orange-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 space-y-10">
        {/* Top: logo + description + socials */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Logo + text */}
          <div className="max-w-2xl">
            <img
              src="Untitled-1.png" // same logo as header
              alt="Amarkitchen logo"
              className="h-8 md:h-10 object-contain mb-4"
            />
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              Order food from the best kitchens with Amarkitchen
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              Amarkitchen connects you with curated cloud kitchens and local
              restaurants across Bangladesh. Enjoy super-fast delivery, hot and
              fresh meals, late-night cravings, corporate orders and more —
              all delivered right to your door.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-start gap-3 md:mt-2">
            {["f", "in", "ig", "yt"].map((label) => (
              <button
                key={label}
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-orange-300 text-orange-600 text-sm font-semibold bg-white hover:bg-orange-50"
                aria-label={label}
              >
                {label === "f" && "f"}
                {label === "in" && "in"}
                {label === "ig" && "ig"}
                {label === "yt" && "▶"}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-orange-100" />

        {/* Middle link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-slate-700">
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900 mb-2">Amarkitchen</h3>
            <a href="#" className="block hover:text-orange-500">
              About us
            </a>
            <a href="#" className="block hover:text-orange-500">
              Contact us
            </a>
            <a href="#" className="block hover:text-orange-500">
              Careers
            </a>
            <a href="#" className="block hover:text-orange-500">
              Help & support
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900 mb-2">Services</h3>
            <a href="#" className="block hover:text-orange-500">
              Food delivery
            </a>
            <a href="#" className="block hover:text-orange-500">
              Takeaway & pick-up
            </a>
            <a href="#" className="block hover:text-orange-500">
              Dine-in offers
            </a>
            <a href="#" className="block hover:text-orange-500">
              AKmart groceries
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900 mb-2">
              Partner with us
            </h3>
            <a href="#" className="block hover:text-orange-500">
              List your kitchen
            </a>
            <a href="#" className="block hover:text-orange-500">
              Become a rider
            </a>
            <a href="#" className="block hover:text-orange-500">
              Corporate orders
            </a>
            <a href="#" className="block hover:text-orange-500">
              Promotions & deals
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900 mb-2">
              Areas we deliver
            </h3>
            <a href="#" className="block hover:text-orange-500">
              Dhaka
            </a>
            <a href="#" className="block hover:text-orange-500">
              Chattogram
            </a>
            <a href="#" className="block hover:text-orange-500">
              Sylhet
            </a>
            <a href="#" className="block hover:text-orange-500">
              More cities…
            </a>
          </div>
        </div>

        <hr className="border-orange-100" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs md:text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Amarkitchen. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-orange-500">
              Terms & conditions
            </a>
            <a href="#" className="hover:text-orange-500">
              Privacy policy
            </a>
            <a href="#" className="hover:text-orange-500">
              Refund & cancellation
            </a>
            <a href="#" className="hover:text-orange-500">
              Cookie policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
