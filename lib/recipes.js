import { apiClient } from "./client";
import { mapMealsResponse, mapMealToRecipe } from "./mapper";

export const getRecipeById = async (id) => {
  const res = await apiClient.get(`/lookup.php?i=${id}`);

  if (!res.success) return res;

  const recipes = mapMealsResponse(res.data);

  return {
    success: true,
    data: recipes ? recipes[0] : null,
  };
};

export const getRandomRecipe = async () => {
  const res = await apiClient.get("/random.php");
  if (!res.success) return;
  const recipes = mapMealsResponse(res.data);

  return {
    success: true,
    data: recipes ? recipes[0] : null,
  };
};

export const getRandomRecipes = async () => {
  const catRes = await apiClient.get("/categories.php");
  if (!catRes.success) return catRes;

  const categories = catRes.data.categories.map((c) => c.strCategory);

  const shuffled = categories.sort(() => Math.random() - 0.5);
  const selectedCats = shuffled.slice(0, 8);

  const mealsPerCat = await Promise.all(
    selectedCats.map((cat) => apiClient.get(`/filter.php?c=${cat}`)),
  );

  const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const selectedMeals = mealsPerCat
    .map((res) => (res.success ? pickRandom(res.data.meals || []) : null))
    .filter(Boolean);

  const detailed = await Promise.all(
    selectedMeals.map((m) => apiClient.get(`/lookup.php?i=${m.idMeal}`)),
  );

  const results = [];

  for (const r of detailed) {
    if (!r.success) return r;

    const mapped = mapMealsResponse(r.data);
    if (mapped && mapped[0]) {
      results.push(mapped[0]);
    }
  }

  return {
    success: true,
    data: results,
  };
};
