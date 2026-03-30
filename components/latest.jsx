import React from "react";
import SectionHeading from "./section-heading";
import { recipes } from "@/constants";
import RecipeCard from "./recipe-card";

const Latest = () => {
  return (
    <section className="my-8">
      <SectionHeading text="Latest Recipes" />

      <div className="grid md:grid-cols-2 md:gap-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default Latest;
