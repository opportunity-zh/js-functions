function add(a, b) {
  if (b == 0) {
    return a;
  }
  return a + b;
}

function subtract(a, b) {
  if (b == 0) {
    return a;
  }
  return b - a;
}

function multiply(a, b) {
  if (a == 0) {
    return b;
  } else if (b == 0) {
    return a;
  }
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return a;
  } else if (a == 0) {
    return b;
  }
  return b / a;
}

function getInput(id) {
  return document.getElementById(id);
}

var operator = "+";

function setOperator(newOperator) {
  switch (newOperator) {
    case "+":
      operator = "+";
      break;
    case "-":
      operator = "-";
      break;
    case "*":
      operator = "*";
      break;
    case "/":
      operator = "/";
      break;
    default:
      operator = "+";
  }
  clacExec();
}

function setNumber(number) {
  const inputA = getInput("newNumber");
  let numberArray = [];
  numberArray.unshift(inputA.value);
  numberArray.push(number);

  console.log(numberArray);
  combinedNumber = numberArray.join("");
  inputA.value = Number(combinedNumber);
}

function resetCalc() {
  const inputA = getInput("newNumber");
  const inputB = getInput("result");

  inputA.value = 0;
  inputB.value = 0;

  operator = "+";
}

function clacExec(e) {
  const inputA = getInput("newNumber");
  const inputB = getInput("result");

  const numberA = Number(inputA.value);
  const numberB = Number(inputB.value);

  switch (operator) {
    case "+":
      inputB.value = add(numberA, numberB);
      break;
    case "-":
      inputB.value = subtract(numberA, numberB);
      break;
    case "*":
      inputB.value = multiply(numberA, numberB);
      break;
    case "/":
      inputB.value = divide(numberA, numberB);
      break;
    default:
      inputB.value = add(numberA, numberB);
  }
  inputA.value = 0;
}

const calcForm = document.getElementById("calcForm");

calcForm.addEventListener("submit", clacExec);
