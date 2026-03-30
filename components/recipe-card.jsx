import Image from "next/image";
import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto">
      <figure className="w-full rounded-md">
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={400}
          height={400}
          className="w-full object-cover"
        />
      </figure>

      <div className="card-body text-left">
        <h2 className="card-title text-base sm:text-lg md:text-xl">
          {recipe.name}
        </h2>
      </div>
    </div>
  );
};

export default RecipeCard;
