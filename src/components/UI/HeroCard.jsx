import React from "react";

const HeroCard = ({ img, title }) => {
  return (
    <div className="min-w-62.5 h-auto rounded-xl overflow-hidden relative cursor-pointer">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover select-none"
        draggable="false"
      />
      
    </div>
  );
};

export default HeroCard;