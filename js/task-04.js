const counterRef = document.querySelector("#counter");
const btnCounterRef = counterRef.querySelectorAll("button");
let valueRef = counterRef.querySelector("#value");
let counterValue = 0;

[...btnCounterRef].map((el) => {
  el.addEventListener("click", (eve) => {
    if (eve.currentTarget.dataset.action === "decrement") {
      counterValue -= 1;
    } else counterValue += 1;
    valueRef.textContent = counterValue;
  });
});
