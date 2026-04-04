import { getRecipeByCategory } from "@/lib/recipes";
import { notFound } from "next/navigation";
import React from "react";
import SectionHeading from "./section-heading";
import CustomCategoryCard from "./custom-category-card";
import Link from "next/link";
import { shuffleArray } from "@/lib/utils";

const CustomCategory = async ({ sectionTitle, category }) => {
  const res = await getRecipeByCategory(category);

  if (!res.success) {
    throw new Error(res.error.message);
  }

  if (!res.data) {
    notFound();
  }

  const recipes = shuffleArray(res.data).slice(0, 8);

  return (
    <section className="my-20">
      <div>
        <SectionHeading text={sectionTitle} />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-6">
        {recipes.map((recipe, index) => (
          <Link href={`/${recipe.id}`} key={index}>
            <CustomCategoryCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CustomCategory;
