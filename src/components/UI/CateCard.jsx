import React from "react";
import { useNavigate } from "react-router-dom";
const CateCard = ({ img, name, cate }) => {
    const navigate = useNavigate();

    const CategoriesDetail = (categories) => {
        navigate(`/categoriesdetail/${categories}`);
    };
    return (
        <div
            className="p-3 bg-white rounded-2xl shadow-md hover:shadow-xl 
             transition-all duration-300 cursor-pointer 
             hover:-translate-y-1 group"
            onClick={() => CategoriesDetail(cate)}
        >
            <img
                src={img}
                alt={name}
                loading="eager"
                fetchPriority="high"
                className="rounded-xl w-full h-32 md:h-40 object-cover 
               group-hover:scale-105 transition-transform duration-300"
                draggable="false"
            />
            <p
                className="text-lg md:text-xl font-semibold text-[#065F46] 
                flex justify-center mt-3 whitespace-nowrap"
            >
                {name}
            </p>

            {/* Accent line */}
            <div
                className="h-1 w-0 bg-[#FF6B6B] rounded-full 
                  mx-auto mt-2 group-hover:w-12 
                  transition-all duration-300"
            ></div>
        </div>
    );
};

export default CateCard;
