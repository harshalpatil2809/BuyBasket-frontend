import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ thumbnail, brand, price, rating, id }) => {
    const navigate = useNavigate();
    const Product = (id) =>{
    navigate(`/product/${id}`)
  }
    
    return (
        <div
            className="p-3 bg-white rounded-2xl shadow-md hover:shadow-xl 
      transition-all duration-300 cursor-pointer 
      hover:-translate-y-1 group"
        >
            <img
                src={thumbnail}
                alt={brand}
                loading="eager"
                fetchPriority="high"
                className="rounded-xl w-full h-32 md:h-40 object-cover 
        group-hover:scale-105 transition-transform duration-300"
                draggable="false"
                onClick={() => Product(id)}
            />

            {/* Brand */}
            <p
                className="text-lg md:text-xl font-semibold text-[#065F46] 
        flex justify-center mt-3 whitespace-nowrap"
            >
                {brand}
            </p>

            {/* Price + Rating */}
            <div className="flex justify-center items-center gap-4 mt-2">
                <span className="text-green-600 font-bold text-lg">
                    ${price}
                </span>

                {rating && (
                    <span className="text-yellow-500 font-medium text-sm">
                        ⭐ {rating}
                    </span>
                )}
            </div>

            {/* Accent line */}
            <div
                className="h-1 w-0 bg-[#FF6B6B] rounded-full 
        mx-auto mt-3 group-hover:w-12 
        transition-all duration-300"
            ></div>
        </div>
    );
};

export default CategoryCard