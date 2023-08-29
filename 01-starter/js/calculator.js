function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "Error";
  }
  return a / b;
}

function getInput(id) {
  return document.getElementById(id);
}

function operate(operator) {
  const inputA = getInput("newNumber");
  const inputB = getInput("result");

  const numberA = Number(inputA.value);
  const numberB = Number(inputB.value);

  switch (operator) {
    case "+":
      inputB.value = add(numberA, numberB);
      break;
    case "-":
      inputB.value = subtract(numberB, numberA);
      break;
    case "*":
      inputB.value = multiply(numberA, numberB);
      break;
    case "/":
      inputB.value = divide(numberB, numberA);
      break;
  }
}
