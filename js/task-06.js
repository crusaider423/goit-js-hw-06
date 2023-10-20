const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", (ev) => {
  const addRemove = inputRef.classList;
  if (ev.currentTarget.value.length === Number(inputRef.dataset.length)) {
    addRemove.add("valid");
    addRemove.remove("invalid");
  } else addRemove.add("invalid");
});
