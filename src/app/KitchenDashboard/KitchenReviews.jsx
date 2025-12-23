// KitchenReviews.jsx
"use client";
import React from "react";
import Link from "next/link";

const KitchenReviews = ({ reviews = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-900">Reviews</h2>
        <span className="text-xs text-slate-500">Total: {reviews.length}</span>
      </div>

      <div className="space-y-3">
        {reviews.length === 0 ? (
          <div className="py-10 text-center text-slate-500 text-sm">
            No reviews found.
          </div>
        ) : (
          reviews.map((rv) => (
            <div
              key={rv.id}
              className="bg-slate-50 rounded-xl p-4 border border-slate-100"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-slate-900">{rv.customerName}</p>
                <span className="text-xs text-slate-500">Order: {rv.orderId}</span>
              </div>

              <p className="text-sm text-slate-700 mt-2">{rv.comment}</p>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-slate-500">Rating: {rv.rating}/5</p>

                <Link
                  href={`/kitchen/reviews/${rv.id}`}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
                >
                  View
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default KitchenReviews;
