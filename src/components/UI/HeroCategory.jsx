import React from "react";
import { useNavigate } from "react-router-dom";

const HeroCategory = ({ img, name }) => {
  const navigate = useNavigate();

  const CategoriesDetail = (name) => {
    navigate(`/categoriesdetail/${name}`);
  };

  return (
    <div
      onClick={() => CategoriesDetail(name)}
      className="w-44 bg-white rounded-xl p-4 flex flex-col items-center cursor-pointer 
      shadow-md hover:shadow-xl transition-all duration-300 
      hover:-translate-y-2 group border border-green-100"
    >
      {/* Image Container */}
      <div
        className="w-20 h-20 flex items-center justify-center rounded-full 
      bg-green-50 group-hover:bg-green-100 transition duration-300"
      >
        <img
          src={img}
          alt={name}
          width="64"
          height="64"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          draggable="false"
          className="w-16 h-16 object-contain transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <h3
        className="mt-4 text-sm font-semibold text-green-900 text-center 
      group-hover:text-green-700 transition"
      >
        {name}
      </h3>

      {/* Underline effect */}
      <div
        className="w-0 h-0.5 bg-green-600 mt-2 
      transition-all duration-300 group-hover:w-10 rounded-full"
      ></div>
    </div>
  );
};

export default HeroCategory;
