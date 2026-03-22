import React from "react";
import { useNavigate } from "react-router-dom";

const NormalCard = ({ product }) => {
  const navigate = useNavigate();

  const Product = (id) => {
    navigate(`/product/${id}`);
  };

  // 🔥 optimized image
  const optimizedImg = `https://res.cloudinary.com/dz5yaloug/image/fetch/f_auto,q_auto,w_200,h_200,c_fill/${product.images?.[0]}`;

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl lg:px-2 md:px-2 shadow-md hover:shadow-xl transition-all duration-300 py-4 px-0 lg:w-55 md:w-55 w-45 flex flex-col items-center">

      <img
        src={optimizedImg}
        alt={product.title}
        width="128"
        height="128"
        loading="lazy"
        fetchPriority="auto"
        className="w-32 h-32 object-cover rounded-2xl mb-4 cursor-pointer"
        onClick={() => Product(product.id)}
      />

      <h2 className="text-lg font-semibold text-gray-800 text-center line-clamp-1">
        {product.title}
      </h2>

      <p className="text-sm text-gray-500 mb-1">
        {product.category}
      </p>

      <div className="flex items-center justify-center gap-4 mt-2">
        <p className="text-xl font-bold text-green-600">
          ₹{(product.price * 81).toFixed(2)}
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