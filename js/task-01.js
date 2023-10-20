const categoriesRef = document.querySelector("#categories");
const categoriesItem = categoriesRef.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesRef.childElementCount}`);

categoriesItem.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.innerHTML}`);
  console.log(`Elements: ${el.lastElementChild.childElementCount}`);
});
