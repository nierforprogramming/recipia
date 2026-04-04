import Image from "next/image";
import React from "react";
import { RiStarFill } from "react-icons/ri";

const CustomCategoryCard = ({ recipe }) => {
  return (
    <div className="card bg-base-100 w-full group cursor-pointer">
      <figure className="w-full rounded-md h-65">
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>
      {/* Ratings */}

      <div className="card-body px-0 text-left py-3 sm:py-4">
        <div className="flex gap-1">
          <span className="text-orange-400">
            <RiStarFill />
          </span>
          <span className="text-orange-400">
            <RiStarFill />
          </span>
          <span className="text-orange-400">
            <RiStarFill />
          </span>
          <span className="text-orange-400">
            <RiStarFill />
          </span>
          <span className="text-orange-400">
            <RiStarFill />
          </span>
        </div>
        <h2 className="card-title text-base sm:text-lg md:text-xl transition-colors group-hover:text-accent">
          {recipe.name}
        </h2>
      </div>
    </div>
  );
};

export default CustomCategoryCard;
