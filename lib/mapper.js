import { extractIngredients } from "./extractor";

export const mapMealToRecipe = (meal) => {
  if (!meal) return null;

  return {
    id: meal.idMeal,
    name: meal.strMeal,
    image: meal.strMealThumb || null,
    video: meal.strYoutube || null,
    instructions: meal.strInstructions,
    ingredients: extractIngredients(meal),
    area: meal.strArea,
    category: meal.strCategory,
  };
};
export const mapMealsResponse = (data) => {
  const meals = data?.meals;

  if (!meals) return null;

  if (!Array.isArray(meals)) {
    return [mapMealToRecipe(meals)];
  }

  if (meals.length === 0) return null;

  return meals.map(mapMealToRecipe);
};
