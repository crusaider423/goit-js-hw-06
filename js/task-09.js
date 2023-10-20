function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.body;
const button = bodyRef.querySelector(".change-color");
const textColor = bodyRef.querySelector(".color");

button.addEventListener("click", (eve) => {
  const changeColor = getRandomHexColor();
  bodyRef.style.backgroundColor = changeColor;
  textColor.textContent = changeColor;
});
