'use client';

import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cartSlice/cartSlice'
import Image from 'next/image';

export default function ProductDetails() {
    const { item_id } = useParams();
    const dispatch = useDispatch();

    // Find the product in your store (adjust 'allProducts' based on your actual slice name)
    const product = useSelector((state) =>
        state.cart.items.find((item) => String(item.item_id) === String(item_id))
    );

    if (!product) {
        return <div className="p-20 text-center">Product not found or loading...</div>;
    }

    return (
        <div className="container mx-auto p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                {/* Image Section */}
                <div className="relative h-96 w-full rounded-2xl overflow-hidden">
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Info Section */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
                    <p className="text-orange-500 font-bold text-2xl">TK {product.price}</p>
                    <p className="text-slate-600 leading-relaxed">{product.description}</p>

                    <div className="pt-6">
                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="btn bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-10"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}