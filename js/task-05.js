const inputElement = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputElement.addEventListener("input", onInputChange);

function onInputChange(evt) {
  evt.currentTarget.value
    ? (nameOutput.textContent = evt.currentTarget.value)
    : (nameOutput.textContent = "Anonymous");
}
