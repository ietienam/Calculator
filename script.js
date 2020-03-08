// variables
var one = document.querySelector("[data-one]");
var two = document.querySelector("[data-two]");
var three = document.querySelector("[data-three]");
var four = document.querySelector("[data-four]");
var five = document.querySelector("[data-five]");
var six = document.querySelector("[data-six]");
var seven = document.querySelector("[data-seven]");
var eight = document.querySelector("[data-eight]");
var nine = document.querySelector("[data-nine]");
var zero = document.querySelector("[data-zero]");
var clear = document.querySelector("[data-clear]");
var decimal = document.querySelector("[data-decimal]");
var backspace = document.querySelector("[data-backspace]");

var screen = document.querySelector(".display");

// store all numbered buttons here
var buttonsArr = [
  one, two, three, four, five, six, seven, eight,
  nine, zero
];

function add(arr) {
  
}

// event listeners
backspace.addEventListener("click", () => {
  if (screen.textContent !== "0") {
    // remove last character from screen
    var data = screen.textContent.split('');
    data.pop();
    data = data.join('');
    screen.textContent = data;
  }

  if (screen.textContent.length === 1) {
    // reset to 0 if thats the last character
    screen.textContent = "0";
  }
});

clear.addEventListener("click", () => {
  screen.textContent = "0";
});

decimal.addEventListener("click", () => {
  // add decimal point if its not been added already to screen
  if (!screen.textContent.includes(".")) screen.textContent += decimal.textContent;
});

buttonsArr.forEach(btn => {
  btn.addEventListener("click", () => {
    // if screen value is 0, reset to empty and add values
    if (screen.textContent === "0") screen.textContent = " ";
    screen.textContent += btn.textContent;
  });
});
