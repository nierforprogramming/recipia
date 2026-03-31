import React from "react";
import SectionHeading from "./section-heading";
import { recipes } from "@/constants";
import RecipeCard from "./recipe-card";

const Trending = () => {
  return (
    <section className="my-8 max-w-7xl mx-auto px-4">
      <SectionHeading text="Trending Recipes" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
