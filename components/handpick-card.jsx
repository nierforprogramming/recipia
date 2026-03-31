import Image from "next/image";
import React from "react";

const HandpickCard = ({ recipe }) => {
  return (
    <div className="card border-2 group border-base-300 w-full overflow-hidden rounded-md cursor-pointer">
      <div className="overflow-hidden">
        <Image
          className="h-auto w-full object-cover group-hover:scale-105 transition-transform duration-300"
          width={400}
          height={400}
          src={recipe.image}
          alt={recipe.name}
        />
      </div>
      <div className="font-display p-6 pb-20 font-bold text-2xl md:text-4xl">
        <h2 className="group-hover:text-accent transition-colors duration-300">
          {recipe.name}
        </h2>
      </div>
    </div>
  );
};

export default HandpickCard;
