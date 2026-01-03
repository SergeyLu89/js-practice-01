const widget = document.querySelector(".widget");
const colorText = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnClick() {
  const randomHexColor = getRandomHexColor();
  widget.style.backgroundColor = randomHexColor;
  colorText.textContent = randomHexColor;
}
