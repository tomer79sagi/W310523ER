// elements
const incrementButtonElement = document.getElementById("increment-btn");
const decrementButtonElement = document.getElementById("decrement-btn");
const counterElement = document.getElementById("counter");

// events
incrementButtonElement.addEventListener("click", increment);
decrementButtonElement.addEventListener("click", decrement);

// state
let counter = 0;

// how state can change

// to add
function increment() {
  counter++;
  renderCounter();
}

// to subtract
function decrement() {
  counter--;
  renderCounter();
}

// render
function renderCounter() {
  counterElement.innerHTML = counter;
}
