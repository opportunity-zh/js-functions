// Note: Your task is to implement the functionality of each function according to the instructions.

// Exercise 1: Create a function named 'add' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the sum of 'a' and 'b'.
function add(a, b) {
  // Your code here
  return a + b;
}
console.log(add(3, 5)); // Example: Output should be 8

// Exercise 2: Create a function named 'subtract' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the result of subtracting 'b' from 'a'.
function subtract(a, b) {
  // Your code here
  return a - b;
}
console.log(subtract(10, 4)); // Example: Output should be 6

// Exercise 3: Create a function named 'multiply' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the product of 'a' and 'b'.
function multiply(a, b) {
  // Your code here
  return a * b;
}
console.log(multiply(6, 7)); // Example: Output should be 42

// Exercise 4: Create a function named 'divide' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the result of dividing 'a' by 'b'.
// Handle the case where 'b' is equal to 0 by returning "Error".
function divide(a, b) {
  // Your code here
  return b !== 0 ? a / b : "Error";
}
console.log(divide(10, 2)); // Example: Output should be 5

// Exercise 5: Create a function named 'randomNum' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns a random integer between 'a' and 'b' (inclusive).
function randomNum(a, b) {
  // Your code here
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
console.log(randomNum(1, 10)); // Example: Output should be a random number between 1 and 10

// Exercise 6: Create a function named 'square' that takes a parameter 'a'.
// Write the function in a way that it returns the square of 'a'.
function square(a) {
  // Your code here
  return a * a;
}
console.log(square(5)); // Example: Output should be 25

// Exercise 7: Create a function named 'rootOf' that takes a parameter 'a'.
// Write the function in a way that it returns the square root of 'a'.
function rootOf(a) {
  // Your code here
  return Math.sqrt(a);
}
console.log(rootOf(25)); // Example: Output should be 5

// Exercise 8: Create a function named 'doubleCount' that takes a parameter 'a'.
// Write the function in a way that it returns double the value of 'a'.
function doubleCount(a) {
  // Your code here
  return a * 2;
}
console.log(doubleCount(5)); // Example: Output should be 10

// Exercise 9: Create a function named 'getInput' that takes a parameter 'id'.
// Write the function in a way that it returns the HTML element with the specified 'id'
// using the 'document.getElementById()' method.
function getInput(id) {
  // Your code here
  return document.getElementById(id);
}
console.log(getInput("inputA")); // Example: Output should be the HTML element with the id "inputA"

// Exercise 10: Create a function named 'isEven' that takes a parameter 'number'.
// Write the function in a way that it returns true if 'number' is even, otherwise false.
function isEven(number) {
  // Your code here
  return number % 2 === 0;
}
console.log(isEven(4)); // Example: Output should be true

// Exercise 11: Make a function called 'isOdd' that doesn't need any input.
// Write the function in a way that it returns true if a random number is odd, otherwise false.
function isOdd() {
  // Your code here
  const random = Math.random();
  return random % 2 !== 0;
}
console.log(isOdd()); // Example: Output should be true or false

// Exercise 12: Create a function named 'countDigits' that takes a parameter 'number'.
// Write the function in a way that it returns the number of digits in 'number'.
function countDigits(number) {
  // Your code here
  return number.toString().length;
}
console.log(countDigits(12345)); // Example: Output should be 5

// Exercise 13: Generate a function called 'countLetters' that wants a word.
// Write the function so that it tells you how many letters the word has.
function countLetters(str) {
  // Your code here
  return str.length;
}
console.log(countLetters("hello")); // Example: Output should be 5

// Exercise 14: Create a function named 'isPalindrome' that takes a parameter 'str'.
// Write the function in a way that it returns true if 'str' is a palindrome, otherwise false.
function isPalindrome(str) {
  // Your code here
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("racecar")); // Example: Output should be true

// Exercise 15: Craft a function called 'countOccurrences' that needs a list of things and one thing to count.
// Write the function so that it tells you how many times that one thing appears in the list.
function countOccurrences(arr, target) {
  // Write your code here
  let count = 0;
  for (let item of arr) {
    if (item === target) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences([1, 2, 2, 3, 2, 4, 2], 2)); // Example: Output should be 4

// Exercise 16: Generate a function called 'capitalizeFirstLetter' that wants a word.
// Write the function so that it gives you the same word but with the first letter in uppercase.
function capitalizeFirstLetter(str) {
  // Your code here
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello")); // Example: Output should be "Hello"

// Exercise 17: Craft a function called 'sumArray' that requires a list of numbers.
// Write the function so that it adds up all the numbers in the list and gives you the total.
function sumArray(arr) {
  // Write your code here
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4, 5])); // Example: Output should be 15

// Exercise 18: Develop a function called 'averageArray' that asks for a list of numbers.
// Write the function so that it tells you the average (mean) of all the numbers in the list.
function averageArray(arr) {
  // Write your code here
  if (arr.length === 0) {
    return 0;
  }
  let sum = sumArray(arr);
  return sum / arr.length;
}
console.log(averageArray([2, 4, 6, 8, 10])); // Example: Output should be 6

// Exercise 19: Make a function named 'rockPaperScissors' that needs two players.
// Write the function so that it pretends they're playing rock-paper-scissors and tells you who wins or if it's a tie.
function rockPaperScissors(player1, player2) {
  // Write your code here
  if (player1 === player2) {
    return "It's a tie!";
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    return "Player 1 wins!";
  } else {
    return "Player 2 wins!";
  }
}
console.log(rockPaperScissors("rock", "paper")); // Example: Output should be "Player 2 wins!"

// Exercise 20: Build a function called 'magic8Ball' that doesn't need any information.
// Write the function so that it randomly gives you an answer like a magic 8-ball toy (e.g., "Yes", "No", "Ask again later").
function magic8Ball() {
  // Write your code here
  const responses = ["Yes", "No", "Maybe", "Ask again later"];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}
console.log(magic8Ball()); // Example: Output should be one of the responses like "Yes" or "No"

// Exercise 21: Construct a function called 'calculateBMI' that wants two numbers: weight in kilograms and height in meters.
// Write the function so that it calculates and tells you the Body Mass Index (BMI) using a formula.
function calculateBMI(weight, height) {
  // Write your code here
  const bmi = weight / (height * height);
  return bmi;
}
console.log(calculateBMI(70, 1.75)); // Example: Output should be around 22.86

// Exercise 22: Make a function named 'convertToCelsius' that takes a temperature in Fahrenheit.
// Write the function so that it changes the temperature to Celsius using a formula and tells you the result.
function convertToCelsius(fahrenheit) {
  // Write your code here
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}
console.log(convertToCelsius(68)); // Example: Output should be around 20

// Exercise 23: Create a function called 'countVowels' that wants a word or sentence.
// Write the function so that it counts and tells you the number of vowels (a, e, i, o, u) in what you gave.
function countVowels(str) {
  // Write your code here
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello, world!")); // Example: Output should be 3

// Exercise 24: Build a function named 'emojiTranslator' that asks for some text.
// Write the function so that it replaces certain words with emojis and gives you the translated text.
function emojiTranslator(text) {
  // Write your code here
  const translation = {
    hello: "👋",
    world: "🌍",
    love: "❤️",
    smile: "😄",
  };
  const words = text.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    if (translation.hasOwnProperty(words[i])) {
      words[i] = translation[words[i]];
    }
  }
  return words.join(" ");
}
console.log(emojiTranslator("Hello, I love coding!")); // Example: Output should be "👋, I ❤️ coding!"

// Exercise 25: Generate a function called 'coinFlip' that doesn't need any input.
// Write the function so that it pretends to flip a coin and tells you if it landed on "Heads" or "Tails".
function coinFlip() {
  // Write your code here
  const random = Math.random();
  if (random < 0.5) {
    return "Heads";
  } else {
    return "Tails";
  }
}
console.log(coinFlip()); // Example: Output should be "Heads" or "Tails"

// Exercise 26: Create a function named 'reverseArray' that needs a list.
// Write the function so that it gives you a new list with the items in reverse order.
function reverseArray(arr) {
  // Write your code here
  const reversed = arr.slice().reverse();
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // Example: Output should be [5, 4, 3, 2, 1]

// Exercise 27: Make a function called 'calculateTip' that wants two numbers: the bill amount and the tip percentage.
// Write the function so that it calculates and gives you the amount of tip based on the bill and tip percentage.
function calculateTip(billAmount, tipPercentage) {
  // Write your code here
  const tipAmount = (billAmount * tipPercentage) / 100;
  return tipAmount;
}
console.log(calculateTip(50, 15)); // Example: Output should be 7.5
