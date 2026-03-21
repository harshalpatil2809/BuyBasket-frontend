import React from "react";

const CartLoader = ({ items = 4 }) => {
    return (
        <div className="min-h-screen bg-green-200 py-30 px-6 animate-pulse">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

                {/* LEFT: Items Section */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">

                    {/* Title */}
                    <div className="h-6 w-56 bg-gray-300 rounded mb-6"></div>

                    {/* Header Row */}
                    <div className="grid grid-cols-5 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-4 bg-gray-300 rounded w-3/4"></div>
                        ))}
                    </div>

                    {/* Items */}
                    {[...Array(items)].map((_, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-5 items-center py-5 border-b"
                        >
                            <div className="col-span-2 flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>

                                <div className="space-y-2 w-full">
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                                </div>
                            </div>

                            <div className="h-4 bg-gray-300 rounded w-12"></div>
                            <div className="h-4 bg-gray-300 rounded w-8"></div>
                            <div className="h-4 bg-gray-300 rounded w-16"></div>
                        </div>
                    ))}
                </div>

                {/* RIGHT: Summary Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">

                    {/* Title */}
                    <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>

                    {/* Summary rows */}
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex justify-between mb-3">
                            <div className="h-4 w-24 bg-gray-300 rounded"></div>
                            <div className="h-4 w-16 bg-gray-300 rounded"></div>
                        </div>
                    ))}

                    {/* Total */}
                    <div className="border-t pt-3 flex justify-between mb-4">
                        <div className="h-5 w-28 bg-gray-300 rounded"></div>
                        <div className="h-5 w-20 bg-gray-300 rounded"></div>
                    </div>

                    {/* Button */}
                    <div className="w-full h-12 bg-gray-300 rounded-lg mt-6"></div>
                </div>
            </div>
        </div>
    );
};

export default CartLoader;