import React from "react";
import Carousel from "./carousel";
import { getRandomRecipes } from "@/lib/recipes";

const Hero = async () => {
  const res = await getRandomRecipes();

  if (!res.success) {
    throw new Error(res.error.message);
  }

  const recipes = res.data;

  if (!recipes || recipes.length === 0) {
    return <p className="text-center">No recipes found</p>;
  }

  return (
    <section className="my-2 lg:my-8">
      <Carousel carousel={recipes} />
    </section>
  );
};

export default Hero;
