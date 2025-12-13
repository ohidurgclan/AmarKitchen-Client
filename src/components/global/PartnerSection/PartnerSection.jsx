import React from "react";

const PartnerSection = () => {
  return (
    <section className="bg-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 grid gap-6 md:grid-cols-2">
        {/* Card 1 – List your kitchen */}
        <div className="bg-white rounded-3xl shadow-sm flex flex-col md:flex-row items-stretch overflow-hidden">
          {/* Image side */}
          <div className="md:w-1/2 h-48 md:h-full">
            <img
              src="kitchen.jpg"
              alt="Restaurant interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col h-full justify-between">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                List Your Kitchen on Amarkitchen
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                Reach thousands of hungry customers in your area. Join Amarkitchen
                and start growing your online orders with our delivery, pick-up
                and AKmart services.
              </p>
            </div>

            <button className="mt-4 self-start bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-md shadow-sm">
              Become a Partner
            </button>
          </div>
        </div>

        {/* Card 2 – Become a rider/hero */}
        <div className="bg-white rounded-3xl shadow-sm flex flex-col md:flex-row items-stretch overflow-hidden">
          {/* Image side */}
          <div className="md:w-1/2 h-48 md:h-full">
            <img
              src="delivery_pic.avif"
              alt="Delivery rider"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col h-full justify-between">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                Become an Amarkitchen Rider
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                Love the road and flexible hours? Deliver meals with Amarkitchen
                and earn competitive income each month while bringing warm food
                to customers’ doors.
              </p>
            </div>

            <button className="mt-4 self-start bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-md shadow-sm">
              Become a Rider
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
