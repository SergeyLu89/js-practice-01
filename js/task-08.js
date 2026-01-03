const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled!");
  }
  const userDtata = { email: email.value, password: password.value };
  console.log("userDtata: ", userDtata);

  evt.currentTarget.reset();
}
