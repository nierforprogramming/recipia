import Image from "next/image";
import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card bg-base-100 w-full group cursor-pointer">
      <figure className="w-full rounded-md overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={400}
          height={400}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>

      <div className="card-body text-left">
        <h2 className="card-title text-base sm:text-lg md:text-xl transition-colors group-hover:text-accent">
          {recipe.name}
        </h2>
      </div>
    </div>
  );
};

export default RecipeCard;
