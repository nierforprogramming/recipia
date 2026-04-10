import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RecipeCard from "@/components/recipe-card";
import SectionHeading from "@/components/section-heading";
import { searchRecipe } from "@/lib/recipes";
import Link from "next/link";
import React from "react";

const Page = async ({ searchParams }) => {
  const params = await searchParams;
  const query = params?.q || "";

  let results = [];
  if (query) {
    const res = await searchRecipe(query);
    results = res?.data || [];
  }
  return (
    <>
      <section className="px-5 md:px-12 2xl:px-40">
        <Navbar />
        <SectionHeading text="Search results" />
        <div className="text-right">({results?.length} Recipes)</div>
        <form className="my-4 flex gap-2">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search"
            className="input text-md w-full border-0 border-b-1 border-neutral outline-none bg-transparent rounded-none"
          />
        </form>
        {!query && <p>Start searching...</p>}
        {query && results.length === 0 && <p>No results found</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5 my-8">
          {results.map((recipe, i) => (
            <Link href={`/${recipe.id}`} key={i}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
