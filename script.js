//current errors:
//prevent population of the number one and number two with leading zero (fe 02 should be just 2); - solved
// pressing dot without any number does not populate it with 0 prefix - solved
// .5 - .85 = NaN - solved
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

//update calculator objects
function numberPopulate (event) {
  const button = event.target;
  if ((calculator.valueOne.length == 1) && (calculator.valueOne[0] == '0') && (event.target.textContent !== '.') &&
      (calculator.operator.length == 0)){
    calculator.valueOne.splice(0,1);
  };
  if((calculator.valueTwo.length == 1) && (calculator.valueTwo[0] == '0') && (event.target.textContent !== '.') &&
      (calculator.operator.length == 0)){
    calculator.valueOne.splice(0,1);
  };
  if((calculator.valueOne.length == 0)  && (event.target.textContent == '.')) {
    calculator.valueOne.unshift(0);
  };
  if((calculator.operator.length > 0) && (calculator.valueTwo.length == 0)  && (event.target.textContent == '.')) {
    calculator.valueTwo.unshift(0);
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
    ((calculator.valueOne.length > 0) && (calculator.operator.length > 0) && (calculator.valueTwo.length > 0)) && 
    (calculator.finalValue.length == 0)) {
    return;
  } else if ((calculator.valueOne.length > 0) && (calculator.operator.length > 0) && (calculator.valueTwo.length > 0) && 
  (calculator.finalValue.length) > 0) {
    calculator.valueOne.splice(0,calculator.valueOne.length);
    calculator.valueOne.push(calculator.finalValue);
    calculator.valueTwo.splice(0,calculator.valueTwo.length)
    calculator.operator = button.textContent;
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
  } else if((calculator.valueOne.length > 0) && (calculator.operator.length > 0) && (calculator.valueTwo.length > 0) && 
            (calculator.finalValue.length) > 0) {
    calculator.valueOne.splice(0,calculator.valueOne.length);
    calculator.valueOne.push(calculator.finalValue);
    finalNumber = operate(+`${(calculator.valueOne.join(''))}`, +`${(calculator.valueTwo.join(''))}`);
  } else {
  finalNumber = operate(+`${(calculator.valueOne.join(''))}`, +`${(calculator.valueTwo.join(''))}`);
  }
  if ((finalNumber.toString().length > 6) && (typeof(finalNumber) !== 'string')) {
    calculator.finalValue = `${finalNumber.toFixed(6)}`;
  } else {
    calculator.finalValue = `${finalNumber}`;
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

//display query selectors
let displayValueUpper = document.querySelector('.display .upper');
let displayValueLower = document.querySelector('.display .lower')

//update display value function
function updateDisplayValue() {
  if ((calculator.valueTwo.length == 0) && (calculator.operator.length == 0) && (calculator.valueTwo.length == 0) &&
      (calculator.finalValue.length == 0)) {
  displayValueUpper.textContent = `${calculator.operator} ${calculator.valueTwo.join('')}
  ${calculator.finalValue}`;
  displayValueLower.textContent = `${calculator.valueOne.join('')}`;
} else if ((calculator.valueOne.length >= 1) && (calculator.operator.length >= 1) && (calculator.valueTwo.length < 1)) {
  displayValueUpper.textContent = `${calculator.valueOne.join('')} ${calculator.operator}`
} else if ((calculator.valueOne.length >= 1) && (calculator.operator.length >= 1) && 
          (calculator.valueTwo.length >= 1) && (calculator.finalValue.length < 1)) {
  displayValueUpper.textContent = `${calculator.valueOne.join('')} ${calculator.operator}`
  displayValueLower.textContent = `${calculator.valueTwo.join('')}`
} else if ((calculator.valueOne.length >= 1) && (calculator.operator.length >= 1) && 
          (calculator.valueTwo.length >= 1) && (calculator.finalValue.length >= 1)) {
  displayValueUpper.textContent = `${calculator.valueOne.join('')} ${calculator.operator} ${calculator.valueTwo.join('')} =`
  displayValueLower.textContent = `${calculator.finalValue}`     
}
  //${calculator.operator} ${calculator.valueTwo.join('')} ${calculator.finalValue}`
};
  
//clear display function
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

