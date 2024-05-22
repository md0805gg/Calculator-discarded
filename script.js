let numberOne
let operator;
let numberTwo;
let displayValue = document.querySelector('.display p');
let buttons = document.querySelectorAll('button');

let calculator = {
  numberOne,
  numberTwo,
  operator,
  displayValue
};

buttons.forEach((button) => {
  button.addEventListener('click', () => 
  displayValue.textContent = button.textContent);
});

//display value as object?
//first, push all clicked numbers to an array nubmerOne;
// value => array => push => array to value
//each time you add, transform array into the number;
//once you click an operator button display it as well
//and store all the values in numberTwo array
//once you click = fire up operate

function add (a, b) {
  return a + b
};

function subtract (a, b) {
  return a - b
};

function multiply (a, b) {
  return a * b
};

function divide (a, b) {
  return a / b
};

function operate (a, b) {
  switch (operator) {
    case '+':
      add (a, b);
      break;
    case '-':
      subtract (a, b);
      break;
    case '*':
      multiply (a, b);
      break;
    case '/':
      divide (a, b);
      break;
  };
};

