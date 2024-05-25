//current errors:
// 2 + 2 =   adds 0 to first numberButtons - solved
// operaton returns undefined - solved
//I can still add numbers to numberTwo after finishing the operation - solved
//multiply does not work correctly on multiple number values - solved
//I can change operator even if the operation is finished - solved
// Pressing = before habing two numbers down - write down a condition
//Unnecessary if conditonal and console log in the operate function

//display value
let displayValue = document.querySelector('.display p');

//calculator object
let calculator = {
  valueOne: [],
  valueTwo: [],
  operator: '',
  finalValue: ''
}

//number buttons event listener
let numberButtons = document.querySelectorAll('.button-number');

numberButtons.forEach((button) => 
button.addEventListener('click',() => {
  if ( (calculator.operator.length == 0) && (calculator.valueTwo.length == 0)) {
    calculator.valueOne.push(button.textContent);
  }
  else if ((calculator.valueOne.length > 0) && (calculator.operator.length > 0 && calculator.finalValue.length == 0)) {
    calculator.valueTwo.push(button.textContent); 
  } else if ((calculator.valueOne.length > 0) && (calculator.operator.length > 0) && (calculator.valueTwo.length > 0)) {
   return;
  }
  updateDisplayValue();
}))
;

//operator buttons event listener
let operatorButtons = document.querySelectorAll('.button-operator');

operatorButtons.forEach((button) =>
button.addEventListener('click', () => {
  if ((calculator.operator.length == 0) && (calculator.valueOne.length < 1)) {
  calculator.valueOne.push(0);
  } else if((calculator.valueOne.length > 0) && (calculator.operator.length > 0) && (calculator.valueTwo.length > 0)) {
    return;
  } else {
  calculator.operator = button.textContent;
  }
  updateDisplayValue();
})
)

//operate button event listener
let operateButton = document.querySelector('.button-operate');

operateButton.addEventListener('click', () => {
  finalNumber = operate(parseInt(calculator.valueOne.join('')), parseInt(calculator.valueTwo.join('')));
  calculator.finalValue = `= ${finalNumber}`;
  updateDisplayValue();  
})

//update display value function
function updateDisplayValue() {
  displayValue.textContent = `${calculator.valueOne.join('')} ${calculator.operator} ${calculator.valueTwo.join('')} ${calculator.finalValue}`
};

//operations functions
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

//operate function
function operate (a, b) {
  if (calculator.operator.length == 0) {
    console.log('dupa')
  } else {
    operator = calculator.operator;
  switch (operator) {
    case '+':
      calculator.finalNumber = add (a, b);
      break;
    case '-':
      calculator.finalNumber = subtract (a, b);
      break;
    case '*':
      calculator.finalNumber = multiply (a, b);
      break;
    case '/':
      calculator.finalNumber = divide (a, b);
      break;
  };
  }
  return calculator.finalNumber;
}
  
;

