import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Delivery = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const cartItems = location.state?.cartItems || [];
    const product = location.state?.product || null;

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/payment", {
            state: {
                cartItems,
                product,
                address: formData
            }
        });

    };

    return (
        <div className="min-h-screen bg-green-200 flex items-center justify-center px-6 py-15">

            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Delivery Address
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border p-3 rounded-lg"
                    />

                    <textarea
                        name="address"
                        placeholder="Full Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full border p-3 rounded-lg"
                    />

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="border p-3 rounded-lg"
                        />

                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className="border p-3 rounded-lg"
                        />

                    </div>

                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        className="w-full border p-3 rounded-lg"
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Continue to Payment
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Delivery;