function add(a, b) {
  return a + b;
}

console.log("Sum: ", add(1, 2));

function subtract(a, b) {
  return a - b;
}

console.log("Remainder: ", subtract(4, 2));

function multiply(a, b) {
  return a * b;
}

console.log("Product: ", multiply(4, 2));

function divide(a, b) {
  if (b == 0) {
    return "Error";
  }
  return a / b;
}

console.log("Quotient: ", divide(4, 2));

function randomNum(a, b) {
  // return Math.floor(Math.random() * (max - min + 1) + min);
  return Math.floor(Math.random() * (b - a + 1) + a);
}

console.log("Random Number: ", randomNum(4, 2));

function square(a) {
  return a * a;
}

console.log("Square: ", square(4));

function rootOf(a) {
  return Math.sqrt(a);
}

console.log("Square Root: ", rootOf(4));

function doubleCount(a) {
  return a * 2;
}

console.log("Double: ", doubleCount(4));

function getInput(id) {
  return document.getElementById(id);
}

console.log(getInput("inputA"));

function exeCalc(operator) {
  const inputA = getInput("inputA");
  const inputB = getInput("inputB");

  const numberA = Number(inputA.value);
  const numberB = Number(inputB.value);

  const result = getInput("result");

  switch (operator) {
    case "+":
      result.value = add(numberA, numberB);
      break;
    case "-":
      result.value = subtract(numberA, numberB);
      break;
    case "*":
      result.value = multiply(numberA, numberB);
      break;
    case "/":
      result.value = divide(numberA, numberB);
      break;
    case "random":
      result.value = randomNum(numberA, numberB);
      break;
  }
}

function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const numbers = [3, 6, 2, 8, 5, 2, 8];
console.log("Reversed Array:", reverseArray(numbers));
console.log("Sum of Array:", sumArray(numbers));
console.log("Max Number:", findMax(numbers));
console.log("Min Number:", findMin(numbers));
console.log("Array with Duplicates Removed:", removeDuplicates(numbers));
