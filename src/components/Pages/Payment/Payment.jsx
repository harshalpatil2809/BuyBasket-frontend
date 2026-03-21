import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [method, setMethod] = useState("cod");

    const cartItems = location.state?.cartItems || [];
    const address = location.state?.address || {};
    const product = location.state?.product || null;

    const handlePayment = async () => {
        try {
            const token = localStorage.getItem("token");

            // 🔹 BUY NOW CASE
            if (product) {
                const orderData = {
                    product_name: product.product_name,
                    price: product.price,
                    quantity: product.quantity,
                    name: address.name,
                    phone: address.phone,
                    address: address.address,
                    city: address.city,
                    state: address.state,
                    pincode: address.pincode,
                    payment_method: method,
                };
                const API = import.meta.env.VITE_API_URL;
                await axios.post(`${API}/orders/create/`, orderData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }

            // 🔹 CART CHECKOUT CASE
            if (cartItems.length > 0) {
                for (let item of cartItems) {
                    const orderData = {
                        product_name: item.product_name,
                        price: item.price,
                        quantity: item.quantity,
                        name: address.name,
                        phone: address.phone,
                        address: address.address,
                        city: address.city,
                        state: address.state,
                        pincode: address.pincode,
                        payment_method: method,
                    };

                    await axios.post("http://127.0.0.1:8000/orders/create/", orderData, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                }

                // 🔹 Cart clear after order
                await axios.delete("http://127.0.0.1:8000/cart/clear-cart/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }

            toast.success("🎉 Order placed successfully!");

            setTimeout(() => {
                navigate("/order");
            }, 1500);
        } catch (error) {
            console.error(error);
            toast.error("Order failed");
        }
    };

    return (
        <div className="min-h-screen bg-green-200 flex items-center justify-center px-6 py-10">
            <ToastContainer position="top-right" autoClose={3000} />

            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Payment Method
                </h2>

                <div className="space-y-4">
                    <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer hover:bg-gray-50">
                        <div>
                            <h3 className="font-semibold">Cash on Delivery</h3>
                            <p className="text-sm text-gray-500">
                                Pay when the product arrives
                            </p>
                        </div>

                        <input
                            type="radio"
                            name="payment"
                            value="cod"
                            checked={method === "cod"}
                            onChange={(e) => setMethod(e.target.value)}
                        />
                    </label>

                    <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer hover:bg-gray-50">
                        <div>
                            <h3 className="font-semibold">Credit / Debit Card</h3>
                            <p className="text-sm text-gray-500">Secure online payment</p>
                        </div>

                        <input
                            type="radio"
                            name="payment"
                            value="card"
                            checked={method === "card"}
                            onChange={(e) => setMethod(e.target.value)}
                        />
                    </label>

                    <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer hover:bg-gray-50">
                        <div>
                            <h3 className="font-semibold">UPI Payment</h3>
                            <p className="text-sm text-gray-500">Pay using UPI apps</p>
                        </div>

                        <input
                            type="radio"
                            name="payment"
                            value="upi"
                            checked={method === "upi"}
                            onChange={(e) => setMethod(e.target.value)}
                        />
                    </label>
                </div>

                <button
                    onClick={handlePayment}
                    className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Payment;
