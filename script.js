let displayValue = document.querySelector('.display p');

let calculator = {
  valueOne: 'one',
  valueTwo: 'two',
  operator: '+',
  funalValue: 'three'
}

displayValue.textContent = `${calculator.valueOne} ${calculator.operator} ${calculator.valueTwo}`;

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

