import React from "react";
import { useNavigate } from "react-router-dom";

const NoProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center px-4">
      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center max-w-md w-full">

        <div className="text-6xl mb-4">📦</div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Product Not Found
        </h1>

        <p className="text-gray-600 mb-6">
          Sorry, the product you're looking for doesn't exist or may have been removed.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NoProduct;