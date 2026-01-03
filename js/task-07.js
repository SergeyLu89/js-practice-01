const inputElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

textElement.style.fontSize = "56px";

inputElement.addEventListener("input", onInputChange);
function onInputChange() {
  textElement.style.fontSize = `${inputElement.value}px`;
}
