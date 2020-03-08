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

var addBtn = document.querySelector("[data-add]");
var subtractBtn = document.querySelector("[data-subtract]");
var divideBtn = document.querySelector("[data-divide]");
var multiplyBtn = document.querySelector("[data-multiply]");
var equalsBtn = document.querySelector("[data-equals]");

var screen = document.querySelector(".display");

// store all numbered buttons here
var buttonsArr = [
  one, two, three, four, five, six, seven, eight,
  nine, zero
];

var operators = [
  addBtn, divideBtn, subtractBtn,
  multiplyBtn
];

function add(str) {
  var data = str.split('+');
  return data.reduce((a, b) => a + b);
}

function subtract(str) {
  var data = str.split('-');
  return data.reduce((a, b) => a - b);
}

function divide(str) {
  var data = str.split('/');
  return data.reduce((a, b) => a / b);
}

function multiply(str) {
  var data = str.split('*');
  return data.reduce((a, b) => a * b);
}

/**FUNCTION SHOULD CHECK WHICH BUTTON WAS CLICKED AND EXECUTE THE APPROPRIATE FUNCTION AND A SCREEN PARAM VALUE IN THE EVENT LISTENER */
//Seperate string into array for values before and after operator
function calculate(operator, str) {
  switch (operator) {
    case '+':
      add(str)
      break;
    case '-':
      subtract(str)
      break;
    case '/':
      divide(str)
      break;
    case 'x':
      multiply(str)
      break;

    default:
      break;
  }
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

buttonsArr.forEach(btn => {
  btn.addEventListener("click", () => {
    // if screen value is 0, reset to empty and add values
    if (screen.textContent === "0") screen.textContent = " ";
    if (screen.textContent.length < 15) screen.textContent += btn.textContent;
  });
});

operators.forEach(btn => {
  btn.addEventListener("click", () => {
    // if operator button if pushed after a decimal, add 0 after the decimal before the operator appears
    if (screen.textContent[screen.textContent.length - 1] === '.') {
      var data = screen.textContent.split('');
      data.push('0');
      data = data.join('');
      screen.textContent = `${data}`;
    }
    // add operator only when the text content isnt 0 and an operator doesnt already exist
    if (screen.textContent !== '0' && screen.textContent.lastIndexOf('+') === -1 && screen.textContent.lastIndexOf('-') === -1 && screen.textContent.lastIndexOf('/') === -1 && screen.textContent.lastIndexOf('x') === -1) {
      screen.textContent += btn.textContent;
    }
  });
});


/**CHECK HOW TO ADD DECIMAL. E.G 2.0 + 2.0 CANT WORK BECAUSE CURRENT RULE ONLY ALLOWS ONE DECIMAL */
decimal.addEventListener("click", () => {
  // add decimal point if its not been added already to screen
  if (!screen.textContent.includes(".")) screen.textContent += decimal.textContent;
});
