'use client'; // Required for Redux hooks in the app router

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice/cartSlice";

const Products = ({ product }) => {
    const dispatch = useDispatch();

    const {
        item_id,
        name,
        img,
        description,
        tag,
        rating,
        discount,
        price,
        preparation_time,
        inventory
    } = product;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition group">
            {/* Image & Link to Details */}
            <Link href={`/Menus/${item_id}`}>
                <div className="relative h-48 w-full cursor-pointer overflow-hidden">
                    <Image
                        src={img}
                        alt={description || name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-[11px] font-semibold px-2 py-1 rounded-full z-10">
                        {discount}% OFF • TK {price}
                    </span>
                </div>
            </Link>

            {/* Content */}
            <div className="p-4 space-y-1">
                <Link href={`/Menus/${item_id}`}>
                    <h3 className="text-sm md:text-base font-semibold text-slate-900 hover:text-orange-500 transition-colors cursor-pointer">
                        {name}
                    </h3>
                </Link>

                <p className="text-xs text-slate-500">{tag}</p>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-2">
                    <span className="flex items-center gap-1">⭐ {rating}</span>
                    <span>•</span>
                    <span>{preparation_time} Min</span>
                    <span>•</span>
                    <span>{inventory} Km</span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                    {/* Add to Cart Logic */}
                    <button
                        onClick={handleAddToCart}
                        className="text-[11px] font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all active:scale-95"
                    >
                        Add to Cart
                    </button>

                    <Link href={`/Menus/${item_id}`}>
                        <button className="text-[11px] font-semibold px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all">
                            View Menu
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;