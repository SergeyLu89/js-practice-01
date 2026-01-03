const inputElement = document.querySelector("#validation-input");
inputElement.addEventListener("blur", onInputBlur);

function onInputBlur() {
  inputElement.value.length === Number(inputElement.dataset.length)
    ? (inputElement.classList.add("valid"),
      inputElement.classList.remove("invalid"))
    : (inputElement.classList.add("invalid"),
      inputElement.classList.remove("valid"));
}
