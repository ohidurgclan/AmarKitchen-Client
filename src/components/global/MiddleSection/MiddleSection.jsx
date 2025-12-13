import React from "react";

const MiddleSection = () => {
  const cuisines = [
    { name: "Biryani", img: "https://via.placeholder.com/80" },
    { name: "Pizza", img: "https://via.placeholder.com/80" },
    { name: "Cakes", img: "https://via.placeholder.com/80" },
    { name: "Burgers", img: "https://via.placeholder.com/80" },
    { name: "Snacks", img: "https://via.placeholder.com/80" },
    { name: "Tehari", img: "https://via.placeholder.com/80" },
    { name: "Cafe", img: "https://via.placeholder.com/80" },
    { name: "Rice Dishes", img: "https://via.placeholder.com/80" },
  ];

  const restaurants = [
    {
      name: "Lahab",
      tag: "Kebab • Grill",
      discount: "15% off Tk. 50",
      rating: "4.3 (50+)",
      time: "20–30 min",
      distance: "1.2 km",
      img: "https://via.placeholder.com/400x220",
    },
    {
      name: "Sparrows",
      tag: "Western • Steak",
      discount: "15% off Tk. 50",
      rating: "4.7 (100+)",
      time: "25–35 min",
      distance: "1.8 km",
      img: "https://via.placeholder.com/400x220",
    },
    {
      name: "Indulge – United Hospital",
      tag: "Fast Food",
      discount: "15% off Tk. 50",
      rating: "4.0 (16)",
      time: "30–40 min",
      distance: "2.3 km",
      img: "https://via.placeholder.com/400x220",
    },
  ];

  return (
    <main className="bg-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
        {/* LEFT FILTERS – lg+ */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm p-5 max-h-[calc(100vh-150px)] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4 text-slate-900">
              Filters
            </h2>

            {/* Sort by with simple radio inputs */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-slate-500 mb-2">
                Sort by
              </p>

              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="sort-relevance"
                    name="sort"
                    value="relevance"
                    defaultChecked
                    className="h-4 w-4"
                  />
                  <label htmlFor="sort-relevance">Relevance</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="sort-top-rated"
                    name="sort"
                    value="topRated"
                    className="h-4 w-4"
                  />
                  <label htmlFor="sort-top-rated">Top rated</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="sort-distance"
                    name="sort"
                    value="distance"
                    className="h-4 w-4 "
                  />
                  <label htmlFor="sort-distance">Distance</label>
                </div>
              </div>
            </div>

            {/* Offers */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-slate-500 mb-2">
                Offers
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                  />
                  Accepts vouchers
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                  />
                  Deals
                </label>
              </div>
            </div>

            {/* Cuisines filter */}
            <div className="mb-3">
              <p className="text-xs font-semibold text-slate-500 mb-2">
                Cuisines
              </p>
              <div className="mb-3">
                <div className="flex items-center bg-slate-50 rounded-full px-3 py-2 text-xs text-slate-500 border border-slate-100">
                  <span className="mr-2">🔍</span>
                  <input
                    type="text"
                    placeholder="Search for cuisine"
                    className="flex-1 bg-transparent focus:outline-none text-[11px]"
                  />
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-700">
                {[
                  "Asian",
                  "Bakery",
                  "Bangladeshi",
                  "Bengali",
                  "Beverage",
                  "Biryani",
                  "Breakfast",
                  "Burgers",
                  "Cafe",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                    />
                    {item}
                  </label>
                ))}
              </div>

              <button className="mt-3 text-xs text-orange-500 font-semibold">
                Show more
              </button>
            </div>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <section className="flex-1 space-y-8">
          {/* Search bar */}
          <div className="w-full">
            <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-sm border border-slate-100">
              <span className="mr-3 text-slate-400">🔍</span>
              <input
                type="text"
                placeholder="Search for restaurants, cuisines, and dishes"
                className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Cuisines carousel */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Cuisines</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine.name}
                  className="flex-shrink-0 w-24 flex flex-col items-center gap-2"
                >
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={cuisine.img}
                      alt={cuisine.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs md:text-sm text-orange-500 font-medium">
                    {cuisine.name}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* All restaurants */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              All restaurants
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {restaurants.map((res) => (
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
                    />
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-[11px] font-semibold px-2 py-1 rounded-full">
                      {res.discount}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-4 space-y-1">
                    <h3 className="text-sm md:text-base font-semibold text-slate-900">
                      {res.name}
                    </h3>
                    <p className="text-xs text-slate-500">{res.tag}</p>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2">
                      <span className="flex items-center gap-1">
                        ⭐ <span>{res.rating}</span>
                      </span>
                      <span>•</span>
                      <span>{res.time}</span>
                      <span>•</span>
                      <span>{res.distance} away</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default MiddleSection;
