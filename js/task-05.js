const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", (el) => {
  outputRef.textContent = el.currentTarget.value;
  if (el.currentTarget.value === "") {
    outputRef.textContent = "Anonymous";
  }
});
