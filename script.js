//current errors:
//prevent population of the number one and number two with leading zero (fe 02 should be just 2); - solved
//figure out operations display

//initial

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
button.addEventListener('click', numberPopulate));

//dot button event listener
let dotButton = document.querySelector('.button-dot');

dotButton.addEventListener('click', numberPopulate);

//populate display with numbers/dot function
function numberPopulate (event) {
  const button = event.target;
  console.log(event.type);
  if ((calculator.valueOne.length == 1) && (calculator.valueOne[0] == '0') && (event.target.textContent !== '.') &&
      (calculator.operator.length == 0)){
    calculator.valueOne.splice(0,1);
  };
  if((calculator.valueTwo.length == 1) && (calculator.valueTwo[0] == '0') && (event.target.textContent !== '.') &&
      (calculator.operator.length == 0)){
    calculator.valueOne.splice(0,1);
  };
  if ((calculator.operator.length == 0) && (calculator.valueTwo.length == 0) && (calculator.finalValue.length < 1)) {
    calculator.valueOne.push(button.textContent);
  } else if ((calculator.valueOne.length > 0) && (calculator.operator.length > 0 && calculator.finalValue.length == 0)) {
    calculator.valueTwo.push(button.textContent); 
  } else if (((calculator.valueOne.length > 0) && (calculator.operator.length == 0) && (calculator.valueTwo.length == 0)) ||
    ((calculator.valueOne.length > 0) && (calculator.operator.length > 0) && (calculator.valueTwo.length > 0))) {
   return;
  }
  updateDisplayValue();
}

//operator buttons event listener
let operatorButtons = document.querySelectorAll('.button-operator');

operatorButtons.forEach((button) =>
button.addEventListener('click', () => {
  if ((calculator.operator.length == 0) && (calculator.valueOne.length < 1)) {
  calculator.valueOne.push(0);
  } else if (((calculator.valueOne.length > 0) && (calculator.valueTwo.length == 0) && calculator.finalValue > 0) ||
    ((calculator.valueOne.length > 0) && (calculator.operator.length > 0) && (calculator.valueTwo.length > 0))) {
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
  if ((calculator.valueOne.length > 0) && (calculator.operator.length == 0) && (calculator.valueTwo.length == 0)){
    finalNumber = calculator.valueOne.join('');
  } else if ((calculator.valueOne.length > 0) && (calculator.operator.length > 0) && (calculator.valueTwo.length == 0)) {
    calculator.valueTwo.push(calculator.valueOne);
    finalNumber = operate(+`${(calculator.valueOne.join(''))}`, +`${(calculator.valueTwo.join(''))}`);
  } else {
  finalNumber = operate(+`${(calculator.valueOne.join(''))}`, +`${(calculator.valueTwo.join(''))}`);
  }
  if ((finalNumber.toString().length > 6) && (typeof(finalNumber) !== 'string')) {
    calculator.finalValue = `= ${finalNumber.toFixed(6)}`;
  } else {
    calculator.finalValue = `= ${finalNumber}`;
  };  
  updateDisplayValue();  
})

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
  if (b == 0) {
    return 'Cannot divide by 0'
  }
  return a / b
};

//operate function
function operate (a, b) {
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
  return calculator.finalNumber;
}

//display value
let displayValue = document.querySelector('.display p');

//update display value function
function updateDisplayValue() {
  displayValue.textContent = `${calculator.valueOne.join('')} ${calculator.operator} ${calculator.valueTwo.join('')} ${calculator.finalValue}`
};
  
//clear function
function clearCalculator() {
  for (key in calculator) {
   if(Array.isArray(calculator[key])) {
    calculator[key] = [];
   } else {
    calculator[key] = '';
   };
   updateDisplayValue(); 
}};

//clear button event listener
let clearButton = document.querySelector('.button-clear');

clearButton.addEventListener('click',clearCalculator);

