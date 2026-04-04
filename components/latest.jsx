import React from "react";
import SectionHeading from "./section-heading";
import { recipes } from "@/constants";
import RecipeCard from "./recipe-card";
import { getRandomRecipes } from "@/lib/recipes";
import Link from "next/link";

const Latest = async () => {
  const res = await getRandomRecipes();

  if (!res.success) {
    throw new Error(res.error.message);
  }

  const recipes = res.data;

  if (!recipes || recipes.length === 0) {
    return <p className="text-center">No latest recipes yet!</p>;
  }

  return (
    <section id="latest" className="my-8 max-w-7xl mx-auto px-4">
      <SectionHeading text="Latest Recipes" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5">
        {recipes.map((recipe, index) => (
          <Link href={`/${recipe.id}`} key={index}>
            <RecipeCard key={index} recipe={recipe} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Latest;
