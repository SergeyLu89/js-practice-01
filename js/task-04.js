const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onButtonClick);
incrementBtn.addEventListener("click", onButtonClick);

function onButtonClick(evt) {
  evt.currentTarget.dataset.action === "increment"
    ? (counterValue += 1)
    : (counterValue -= 1);
  value.textContent = counterValue;
}
