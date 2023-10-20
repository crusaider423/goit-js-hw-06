function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.querySelector("#controls");
const outputNum = controlsRef.querySelector("input");
const createBtn = controlsRef.querySelector("[data-create]");
const destroyBtn = controlsRef.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtn.addEventListener("click", (e) => {
  const num = Number(outputNum.value);
  boxesRef.insertAdjacentHTML("beforeend", createBoxes(num));
});
destroyBtn.addEventListener("click", (e) => {
  boxesRef.innerHTML = "";
});

function createBoxes(amount) {
  const count = [];
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    count.push(
      `<div style=" width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`
    );
    width += 10;
    height += 10;
  }

  return count.join("");
}


// const inputNode = document.querySelector("#controls");
// const buttonNode = inputNode.querySelectorAll("button");
// const divNode = document.querySelector("#boxes");

// buttonNode[0].addEventListener("click", onCreate);
// buttonNode[1].addEventListener("click", onDestroy);

// function onCreate(eve) {
//   createBoxes(Number(inputNode.firstElementChild.value));
// }

// function onDestroy(eve) {
//   divNode.innerHTML = "";
// }

// const createBoxes = function (amount) {
//   const arrNode = [];
//   let width = 30;
//   let height = 30;

//   for (let index = 0; index < amount; index += 1) {
//     arrNode.push(
//       `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`
//     );
//     width += 10;
//     height += 10;
//   }

//   divNode.insertAdjacentHTML("beforeend", arrNode.join(""));
// };
