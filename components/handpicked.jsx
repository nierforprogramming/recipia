import React from "react";
import SectionHeading from "./section-heading";
import HandpickCard from "./handpick-card";
import { getRandomRecipes } from "@/lib/recipes";
import Link from "next/link";

const Handpicked = async () => {
  const res = await getRandomRecipes();

  if (!res.success) {
    throw new Error(res.error.message);
  }

  const recipes = res.data;

  if (!recipes || recipes.length === 0) {
    return <p className="text-center">No recipes found</p>;
  }

  return (
    <section className="">
      <div className="">
        <div>
          <SectionHeading
            text="Hand-Picked Collections"
            className="text-2xl lg:text-5xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recipes.map((recipe, index) => (
            <Link href={`/${recipe.id}`} key={index}>
              <HandpickCard recipe={recipe} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Handpicked;
