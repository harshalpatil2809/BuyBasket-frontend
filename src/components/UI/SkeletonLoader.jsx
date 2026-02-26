import React from "react";

const SkeletonLoader = () => {
    return (
        <div
            className="bg-white/50 rounded-3xl shadow-md p-4 w-50 animate-pulse"
        >
            <div className="bg-gray-300 h-40 rounded-2xl mb-4"></div>
            <div className="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
            <div className="bg-gray-300 h-4 w-1/2 rounded mb-4"></div>
            <div className="flex justify-center">
                <div className="bg-gray-300 h-5 w-16 rounded"></div>
                <div className="bg-gray-300 h-5 w-10 rounded"></div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
