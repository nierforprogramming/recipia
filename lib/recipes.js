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

export const getRecipeByCategory = async (category) => {
  const res = await apiClient.get(`/filter.php?c=${category}`, {
    next: { revalidate: 60 },
  });
  if (!res.success) return res;

  const recipes = mapMealsResponse(res.data);

  return {
    success: true,
    data: recipes ? recipes : null,
  };
};

// Search recipe

export const searchRecipe = async (query) => {
  const res = await apiClient.get(`/search.php?s=${query}`);
  if (!res.success) return res;
  const recipes = mapMealsResponse(res.data);

  return {
    success: true,
    data: recipes ? recipes : null,
  };
};

export const getRandomRecipe = async () => {
  const res = await apiClient.get("/random.php", {
    cache: "no-store",
  });
  if (!res.success) return;
  const recipes = mapMealsResponse(res.data);

  return {
    success: true,
    data: recipes ? recipes[0] : null,
  };
};

export const getRandomRecipes = async () => {
  const catRes = await apiClient.get("/categories.php", {
    next: { revalidate: 60 },
  });
  if (!catRes.success) return catRes;

  const categories = catRes.data.categories.map((c) => c.strCategory);

  const shuffled = categories.sort(() => Math.random() - 0.5);
  const selectedCats = shuffled.slice(0, 8);

  const mealsPerCat = [];

  for (const cat of selectedCats) {
    const res = await apiClient.get(`/filter.php?c=${cat}`, {
      next: { revalidate: 60 },
    });
    mealsPerCat.push(res);
  }

  const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const selectedMeals = mealsPerCat
    .map((res) => (res.success ? pickRandom(res.data.meals || []) : null))
    .filter(Boolean);

  const detailed = [];

  for (const m of selectedMeals) {
    const res = await apiClient.get(`/lookup.php?i=${m.idMeal}`, {
      next: { revalidate: 60 },
    });
    detailed.push(res);
  }

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
