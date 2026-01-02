const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientListItem = ingredients.map((ingtedient) => {
  const ingredientListItemEl = document.createElement("li");
  ingredientListItemEl.textContent = ingtedient;
  ingredientListItemEl.classList.add("item");
  return ingredientListItemEl;
});

ingredientsList.append(...ingredientListItem);
