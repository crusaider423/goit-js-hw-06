const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");
const arrIngrediens = ingredients.map((el) => {
  const li = document.createElement("li");
  li.textContent = el;
  li.classList.add("item");
  return li;
});
ingredientsRef.append(...arrIngrediens);
