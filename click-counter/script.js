let counter = document.getElementById("counter");
let button = document.getElementById("click-button");

let numOfClicks = 0;

button.addEventListener("click", () => {
  //numOfClicks = 0;
  if (counter.textContent == "100") {
  } else {
    numOfClicks += 1;
  }
  counter.textContent = numOfClicks;
});
