import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { RiPlayLargeLine, RiRoadMapFill, RiStarFill } from "react-icons/ri";
import { TbBowlSpoonFilled } from "react-icons/tb";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getRecipeById } from "@/lib/recipes";
import { splitInstructions } from "@/lib/utils";
import { FaArrowTrendUp } from "react-icons/fa6";

const RecipeDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await getRecipeById(id);

  if (!res.success) {
    throw new Error(res.error.message);
  }
  if (!res.data) {
    notFound();
  }

  const recipe = res.data;
  const instructions = splitInstructions(recipe.instructions);
  const ingredients = recipe?.ingredients;
  return (
    <>
      <div className="px-5 md:px-12 2xl:px-40">
        <Navbar />
        <section className="space-y-8 my-20">
          <div className="flex gap-2 items-center">
            <div className="text-accent text-lg">
              <FaArrowTrendUp />
            </div>
            <div className="text-sm">84% would make this again</div>
          </div>
          <div className="font-display text-6xl font-semibold">
            <h1> {recipe?.name}</h1>
          </div>

          <div className="flex gap-8 text-base-content/90">
            <div className="flex items-center gap-2">
              <span>
                <TbBowlSpoonFilled className="text-accent" />
              </span>
              <span className="text-sm">{recipe.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <RiRoadMapFill className="text-accent" />
              </span>
              <span className="text-sm">{recipe.area}</span>
            </div>
            <div className="flex gap-0.5">
              <span className="text-orange-400">
                <RiStarFill />
              </span>
              <span className="text-orange-400">
                <RiStarFill />
              </span>
              <span className="text-orange-400">
                <RiStarFill />
              </span>
              <span className="text-orange-400">
                <RiStarFill />
              </span>
              <span className="text-orange-400">
                <RiStarFill />
              </span>
            </div>
          </div>
          <div className="bg-base-300/70 h-0.5"></div>
          <div className="mt-15 mb-10 text-balance">
            <p>
              A truly delicious dish is more than just ingredients on a
              plate—it’s a memory in the making, a moment you’ll want to revisit
              again and again.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl aspect-video max-h-150">
            {recipe.image && (
              <Image
                src={recipe.image}
                alt={recipe.name}
                fill
                priority
                className="object-cover"
              />
            )}
            {recipe.video && (
              <Link
                href={recipe.video}
                target="_blank"
                className="z-10 text-9xl inset-0 flex text-white hover:text-accent cursor-pointer items-center justify-center absolute"
              >
                <RiPlayLargeLine className="" />
              </Link>
            )}
          </div>
          <div>
            <p>{}</p>
          </div>

          <div className="flex flex-col my-20 md:flex-row">
            {/* Ingredients */}
            <div className="flex-1">
              <h3 className="font-display font-semibold text-3xl">
                Ingredients
              </h3>

              <ul className="mt-8 space-y-5">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex gap-4">
                    <input
                      type="checkbox"
                      className="checkbox text-accent border-2 border-base-content rounded-full"
                    />
                    <span>{ingredient.measure}</span>
                    <span>{ingredient.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="flex-1">
              <h3 className="font-display font-semibold text-3xl">
                Instructions
              </h3>

              <ul className="mt-8 space-y-8">
                {instructions.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="font-semibold bg-accent p-2 rounded-full flex items-center justify-center w-6 h-6 text-white">
                      {index + 1}
                    </span>
                    <span className="text-balance">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetailPage;
