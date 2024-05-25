//current errors:
// 2 + 2 =   adds 0 to first numberButtons
// operaton returns undefined
//I can still add numbers to numberTwo after finishing the operation

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
  if ((calculator.valueOne.length > 0) && (calculator.operator.length > 0)) {
  calculator.valueTwo.push(button.textContent);
  } else {
  calculator.valueOne.push(button.textContent)
  }
  updateDisplayValue();
}
));

//operator buttons event listener
let operatorButtons = document.querySelectorAll('.button-operator');

operatorButtons.forEach((button) =>
button.addEventListener('click', () => {
  if (calculator.operator.length == 0) {
  calculator.valueOne.push(0);
  calculator.operator = button.textContent;
  updateDisplayValue();
} else {
  return;
}
})
)

//operate button event listener
let operateButton = document.querySelector('.button-operate');

operateButton.addEventListener('click', () => {
  finalNumber = operate(parseInt(calculator.valueOne), parseInt(calculator.valueTwo));
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
    return
  } else {
    operator = calculator.operator;
  }
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
  }
  
;

