'use client';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cartSlice/cartSlice';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CheckoutPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);

    // In a real app, get this from your Auth Slice
    const user_id = "your-logged-in-user-uuid";

    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Prepare data for your backend (order.controller.ts)
        const orderPayload = {
            user_id: "a86db53a-5331-4e40-963d-35ab747874ab",
            items: items.map(item => ({
                item_id: item.item_id,
                quantity: item.quantity,
                price: parseFloat(item.price)
            }))
        };
        console.log(JSON.stringify(orderPayload));
        try {
            const response = await fetch('https://amarkitchen-server.vercel.app/v1/order/place', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderPayload),
            });
            const result = await response.json();
            if (result.success) {
                alert("Order Placed Successfully!");
                dispatch(clearCart()); 
                router.push('/Home');
            } else {
                alert("Failed to place order: " + result.message);
            }
        } catch (error) {
            console.error("Order Error:", error);
            alert("Connection to server failed");
        } finally {
            setLoading(false);
        }
    };

    if (!mounted) return null;
    if (items.length === 0) return <div className="p-20 text-center text-xl">Your cart is empty!</div>;

    return (
        <div className="bg-slate-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-slate-800">Checkout</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side: Delivery Details Form */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-600">Full Name</label>
                                <input type="text" className="w-full mt-1 p-2 border rounded-lg outline-orange-500" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600">Phone Number</label>
                                <input type="text" className="w-full mt-1 p-2 border rounded-lg outline-orange-500" placeholder="017XXXXXXXX" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600">Detailed Address</label>
                                <textarea className="w-full mt-1 p-2 border rounded-lg outline-orange-500" rows="3" placeholder="House, Road, Area..." required></textarea>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Order Summary */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-fit">
                        <h2 className="text-xl font-semibold mb-4">Your Order</h2>
                        <div className="space-y-3 mb-6">
                            {items.map((item) => (
                                <div key={item.item_id} className="flex justify-between text-sm">
                                    <span className="text-slate-600">{item.name} x {item.quantity}</span>
                                    <span className="font-medium">TK {item.price * item.quantity}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t pt-4 space-y-2">
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span className="text-orange-600">TK {subtotal}</span>
                            </div>
                        </div>

                        <button
                            onClick={handlePlaceOrder}
                            disabled={loading}
                            className={`w-full mt-6 py-3 rounded-full font-bold text-white transition-all 
                                ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-100'}`}
                        >
                            {loading ? 'Processing...' : 'Confirm Order'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;