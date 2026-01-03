const inputElement = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxElement = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onCreateBtnClick() {
  const amount = inputElement.value;
  if (!amount) {
    alert("Please enter number");
    return;
  }
  boxElement.innerHTML = createBoxes(amount);
}

function createBoxes(amount) {
  let size = 30;
  const markup = [];
  for (let i = 1; i <= amount; i++) {
    markup.push(
      `<div style="margin: 0 auto; width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-bottom: 4px">${i}</div>`
    );
    size += 10;
  }
  return markup.join("");
}
function destroyBoxes() {
  boxElement.innerHTML = "";
  inputElement.value = 0;
}
