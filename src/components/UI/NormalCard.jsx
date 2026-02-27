import React from "react";

const NormalCard = ({ product }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl lg:px-2 md:px-2 shadow-md hover:shadow-xl transition-all duration-300 py-4 px-0 lg:w-55 md:w-55 w-45 flex flex-col items-center">
      
      <img
        src={product.images?.[0]}
        alt={product.title}
        loading="eager"
        className="w-32 h-auto object-cover rounded-2xl mb-4"
      />

      <h2 className="text-lg font-semibold text-gray-800 text-center line-clamp-1">
        {product.title}
      </h2>

      <p className="text-sm text-gray-500 mb-1">
        {product.category}
      </p>

      <div className="flex items-center justify-center gap-4 mt-2">
        <p className="text-xl font-bold text-green-600">
          ${product.price}
        </p>

        {product.rating && (
          <div className="flex items-center text-yellow-500 text-sm font-medium">
            <span className="mr-1">⭐</span>
            <span>{product.rating}</span>
          </div>
        )}
      </div>

    </div>
  );
};

export default NormalCard;