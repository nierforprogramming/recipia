export const extractIngredients = (meal) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    // skip empty/null values
    if (!name || name.trim() === "") continue;

    ingredients.push({
      name: name.trim(),
      measure: measure?.trim() || "",
    });
  }

  return ingredients;
};
