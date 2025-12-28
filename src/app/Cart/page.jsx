'use client';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../features/cartSlice/cartSlice';
import Link from 'next/link';
import Image from 'next/image';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import Footer from '../components/global/footer/footer';

const CartPage = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = items.length > 0 ? 50 : 0; // Example flat fee
    const total = subtotal + deliveryFee;

    if (!mounted) return null;

    if (items.length === 0) {
        return (
        <>
            <TopMenuBar/>
            <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 px-4">
                <div className="text-6xl">🛒</div>
                <h1 className="text-2xl font-bold text-slate-800">Your cart is empty</h1>
                <p className="text-slate-500">Looks like you haven't added any delicious meals yet.</p>
                <Link href="/Menus" className="btn bg-orange-500 hover:bg-orange-600 text-white border-none px-8 rounded-full">
                    Browse Menu
                </Link>
            </div>
            <Footer/>
        </>
        );
    }
    return (
        <>
            <TopMenuBar />
            <div className="bg-slate-50 min-h-screen py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-8">
                        <h1 className="text-3xl font-extrabold text-slate-900">Your Shopping Cart</h1>
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="text-sm text-red-500 hover:underline font-medium"
                        >
                            Clear All Items
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* List of Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <div key={item.item_id} className="bg-white rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center gap-4 border border-slate-100">
                                    {/* Product Image */}
                                    <div className="relative h-24 w-24 rounded-xl overflow-hidden shrink-0">
                                        <Image src={item.img} alt={item.name} fill className="object-cover" />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="font-bold text-slate-800 text-lg">{item.name}</h3>
                                        <p className="text-orange-600 font-semibold">TK {item.price}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center bg-slate-100 rounded-full px-3 py-1">
                                        <button
                                            onClick={() => dispatch(updateQuantity({ item_id: item.item_id, type: 'dec' }))}
                                            className="w-8 h-8 flex items-center justify-center text-xl font-bold hover:text-orange-500 transition"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center font-bold text-slate-700">{item.quantity}</span>
                                        <button
                                            onClick={() => dispatch(updateQuantity({ item_id: item.item_id, type: 'inc' }))}
                                            className="w-8 h-8 flex items-center justify-center text-xl font-bold hover:text-orange-500 transition"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.item_id))}
                                        className="p-2 text-slate-400 hover:text-red-500 transition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary Summary */}
                        <div className="bg-white rounded-3xl p-6 shadow-md border border-orange-50 h-fit sticky top-24">
                            <h2 className="text-xl font-bold text-slate-800 mb-6">Summary</h2>

                            <div className="space-y-4 border-b pb-6 text-slate-600">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-slate-800">TK {subtotal}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery Fee</span>
                                    <span className="font-semibold text-slate-800">TK {deliveryFee}</span>
                                </div>
                            </div>

                            <div className="flex justify-between py-6">
                                <span className="text-lg font-bold">Total Amount</span>
                                <span className="text-xl font-extrabold text-orange-600">TK {total}</span>
                            </div>

                            <Link href="/Checkout" className="btn bg-orange-500 hover:bg-orange-600 text-white border-none w-full rounded-full px-10 py-3 text-center">
                                Checkout
                            </Link>
                            <Link href="/Menus">
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    );
};

export default CartPage;