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

var buttonsArr = [
  one, two, three, four, five, six, seven, eight,
  nine, zero, decimal
];

backspace.addEventListener("click", () => {
  if (screen.textContent !== "0") {
    var data = screen.textContent.split('');
    data.pop();
    data = data.join('');
    screen.textContent = data;
  }

  if (screen.textContent.length === 1) {
    screen.textContent = "0";
  }
});

clear.addEventListener("click", () => {
  screen.textContent = "0";
});

buttonsArr.forEach(btn => {
  btn.addEventListener("click", () => {
    if (screen.textContent[0] === "0") screen.textContent = " ";
    screen.textContent += btn.textContent;
  });
});
