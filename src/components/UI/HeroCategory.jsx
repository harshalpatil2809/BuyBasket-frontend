import React from "react";
import { useNavigate } from "react-router-dom";

const HeroCategory = ({ img, name }) => {
  const navigate = useNavigate();
  const CategoriesDetail = (name) => {
        navigate(`/categoriesdetail/${name}`);
    };
  return (
    <div className="w-48 flex flex-col items-center cursor-pointer group"
    onClick={() => CategoriesDetail(name)}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute bottom-0 w-36 h-16 bg-linear-to-r from-green-300 to-green-400 rounded-3xl blur-md opacity-70 group-hover:opacity-90 transition duration-500"></div>
        <div className="absolute w-32 h-32 rounded-full bg-white/40 blur-2xl"></div>
        <img
          src={img}
          alt={name}
          className="relative w-28 h-28 object-contain transition duration-500 group-hover:-translate-y-2 group-hover:scale-105"
          draggable="false"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold text-green-900 tracking-wide group-hover:text-green-800 transition">
        {name}
      </h3>
      <div className="w-0 h-0.5 bg-green-700 mt-1 transition-all duration-500 group-hover:w-12 rounded-full"></div>
    </div>
  );
};

export default HeroCategory;
