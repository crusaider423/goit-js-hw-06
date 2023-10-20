const inputRef = document.querySelector("#font-size-control");
const outputRef = document.querySelector("#text");

inputRef.addEventListener("input", (eve) => {
  outputRef.style.fontSize = `${eve.currentTarget.value}px`;
});
