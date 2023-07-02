let input = '';
const display = document.getElementById('display');

function appendInput(value) {
  input += value;
  display.value = input;
}

function clearDisplay() {
  input = '';
  display.value = '';
}

function deleteLastInput() {
  input = input.slice(0, -1);
  display.value = input;
}

function negateNumber() {
  const lastOperatorIndex = input.lastIndexOf('+', input.length - 2) ||
    input.lastIndexOf('-', input.length - 2) ||
    input.lastIndexOf('*', input.length - 2) ||
    input.lastIndexOf('/', input.length - 2);

  if (lastOperatorIndex !== -1) {
    const numberToNegate = input.slice(lastOperatorIndex + 1);
    const negatedNumber = -parseFloat(numberToNegate);
    input = input.slice(0, lastOperatorIndex + 1) + negatedNumber;
    display.value = input;
  } else if (input !== '') {
    input = '-' + input;
    display.value = input;
  }
}

function calculate() {
  try {
    const result = eval(input);
    display.value = result;
    input = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')') {
    appendInput(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLastInput();
  }
});
// für den Del-Button
let inputback = '';
const displayback = document.getElementById('display');

function appendInput(value) {
  inputback += value;
  display.value = inputback;
}

function clearDisplay() {
  inputback = '';
  display.value = '';
}

function deleteLastInput() {
  inputback = inputback.slice(0, -1);
  display.value = inputback;
}

function calculate() {
  try {
    const result = eval(inputback);
    display.value = result;
    inputback = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}


