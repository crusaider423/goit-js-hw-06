const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const el = ev.currentTarget.elements;
  if (!(el.email.value && el.password.value)) {
    alert("всі поля повинні бути заповнені");
  } else {
    console.log({
      email: el.email.value,
      password: el.password.value,
    });
    formRef.reset();
  }
});
