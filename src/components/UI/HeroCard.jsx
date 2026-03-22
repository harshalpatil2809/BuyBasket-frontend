import React from "react";

const HeroCard = ({ img, title }) => {
  return (
    <div className="min-w-62.5 h-auto rounded-xl overflow-hidden relative cursor-pointer">
      <img
        src={img}
        alt={title}
        className=" object-cover select-none"
        width="1500"
        height="1000"
        loading="eager"
        draggable="false"
        fetchPriority="high"
      />
      
    </div>
  );
};

export default HeroCard;