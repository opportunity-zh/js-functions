// Note: Your task is to implement the functionality of each function according to the instructions.

// Exercise 1: Create a function named 'add' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the sum of 'a' and 'b'.

function add(a, b) {
  return a + b;
}
console.log("Sum: ", add(3, 5)); // Example: Output should be 8

//----------------------------------

// Exercise 2: Create a function named 'subtract' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the result of subtracting 'b' from 'a'.

function subtract(a, b) {
  return a - b;
}
console.log("Remainder: ", subtract(10, 5)); // Example: Output should be 5

//----------------------------------

// Exercise 3: Create a function named 'multiply' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the product of 'a' and 'b'.

function multiply(a, b) {
  return a * b;
}
console.log("Product: ", multiply(3, 5)); // Example: Output should be 15

//----------------------------------

// Exercise 4: Create a function named 'divide' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns the result of dividing 'a' by 'b'.
// Handle the case where 'b' is equal to 0 by returning "Error".

function divide(a, b) {
  if (b === 0) {
    return "Error";
  }
  return a / b;
}
console.log("Quotient: ", divide(10, 5)); // Example: Output should be 2

//----------------------------------

// Exercise 5: Create a function named 'randomNum' that takes two parameters 'a' and 'b'.
// Write the function in a way that it returns a random integer between 'a' and 'b' (inclusive).

function randomNum(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
console.log("Random number: ", randomNum(1, 10)); // Example: Output should be a random number between 1 and 10

//----------------------------------

// Exercise 6: Create a function named 'square' that takes a parameter 'a'.
// Write the function in a way that it returns the square of 'a'.

function square(a) {
  return a * a;
}
console.log("Square: ", square(5)); // Example: Output should be 25

//----------------------------------

// Exercise 7: Create a function named 'rootOf' that takes a parameter 'a'.
// Write the function in a way that it returns the square root of 'a'.

function rootOf(a) {
  return Math.sqrt(a);
}
console.log("Square root: ", rootOf(25)); // Example: Output should be 5

//----------------------------------

// Exercise 8: Create a function named 'doubleCount' that takes a parameter 'a'.
// Write the function in a way that it returns double the value of 'a'.

function doubleCount(a) {
  return a * 2;
}
console.log("Double: ", doubleCount(5)); // Example: Output should be 10

//----------------------------------

// Exercise 9: Create a function named 'getById' that takes a parameter 'id'.
// Write the function in a way that it returns the HTML element with the specified 'id'
// using the 'getElementById()' method.

function getById(id) {
  return document.getElementById(id);
}

const newDiv = document.createElement("div"); // and give it some content
const newContent = document.createTextNode(
  "Hi there and greetings! I'm a new div generated with JavaScript."
); // add the text node to the newly created div
newDiv.appendChild(newContent); // add the text node to the newly created div
newDiv.id = "result"; // add an id to the newly created div
document.body.appendChild(newDiv); // add the newly created element and its content into the DOM

console.log("Element: ", getById("result")); // Example: Output should be the HTML element with the id "result"

//----------------------------------

// Exercise 10: Create a function named 'isEven' that takes a parameter 'number'.
// Write the function in a way that it returns true if 'number' is even, otherwise false.

function isEven(number) {
  return number % 2 === 0;
}
console.log("Even: ", isEven(5)); // Example: Output should be false

//----------------------------------

// Exercise 11: Create a function named 'isOdd' that takes a parameter 'number'.
// Write the function in a way that it returns true if 'number' is odd, otherwise false.

function isOdd(number) {
  return number % 2 !== 0;
}
console.log("Odd: ", isOdd(4)); // Example: Output should be true or false

//----------------------------------

// Exercise 12: Create a function named 'countDigits' that takes a parameter 'number'.
// Write the function in a way that it returns the number of digits in 'number'.

function countDigits(number) {
  return String(number).length;
}
console.log("Digits: ", countDigits(12345)); // Example: Output should be 5

//----------------------------------

// Exercise 13: Create a function named 'countLetters' that wants a word.
// Write the function so that it tells you how many letters the word has.

function countLetters(str) {
  return str.length;
}
console.log(countLetters("Hello")); // Example: Output should be 5

//----------------------------------

// Exercise 14: Create a function named 'isPalindrome' that takes a parameter 'str'.
// Write the function in a way that it returns true if 'str' is a palindrome, otherwise false.

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("Is palindrome: ", isPalindrome("racecar")); // Example: Output should be true

//----------------------------------

// Exercise 15: Craft a function called 'countOccurrences' that needs a list of things and one thing to count.
// Write the function so that it tells you how many times that one thing appears in the list.

function countOccurrences(arr, target) {
  let count = 0;
  for (const item of arr) {
    if (item === target) {
      count++;
    }
  }
  return count;
}
console.log("Occurrence: ", countOccurrences([1, 2, 3, 4, 5, 5, 5], 5)); // Example: Output should be 3

//----------------------------------

// Exercise 16: Generate a function called 'capitalizeFirstLetter' that wants a word.
// Write the function so that it gives you the same word but with the first letter in uppercase.

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("New Word: ", capitalizeFirstLetter("hello")); // Example: Output should be "Hello"

//----------------------------------

// Exercise 17: Craft a function called 'sumArray' that requires a list of numbers.
// Write the function so that it adds up all the numbers in the list and gives you the total.

function sumArray(arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
}
console.log("Sum: ", sumArray([1, 2, 3, 4, 5])); // Example: Output should be 15

//----------------------------------
// Exercise 18: Develop a function called 'averageArray' that asks for a list of numbers.
// Write the function so that it tells you the average (mean) of all the numbers in the list.

function averageArray(arr) {
  const sum = sumArray(arr);
  return sum / arr.length;
}
console.log("Avarage: ", averageArray([2, 4, 6, 8, 10])); // Example: Output should be 6

//----------------------------------

// Exercise 19: Make a function named 'rockPaperScissors' that needs two players.
// Write the function so that it pretends they're playing rock-paper-scissors and tells you who wins or if it's a tie.

function rockPaperScissors(player1, player2) {
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
console.log("Game result: ", rockPaperScissors("rock", "paper")); // Example: Output should be "Player 2 wins!"

//----------------------------------

// Exercise 20: Build a function called 'magic8Ball' that doesn't need any information.
// Write the function so that it randomly gives you an answer like a magic 8-ball toy (e.g., "Yes", "No", "Ask again later").

function magic8Ball() {
  const responses = ["Yes", "No", "Maybe", "Ask again later"];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}
console.log("Magic8Ball Spoke: ", magic8Ball()); // Example: Output should be one of the responses like "Yes" or "No"

//----------------------------------

// Exercise 21: Construct a function called 'calculateBMI' that wants two numbers: weight in kilograms and height in meters.
// Write the function so that it calculates and tells you the Body Mass Index (BMI) using a formula.
// Formula weight divided by (height multiplied by height).

function calculateBMI(weight, height) {
  return weight / (height * height);
}
console.log("The BMI is: ", calculateBMI(70, 1.75)); // Example: Output should be around 22.86

//----------------------------------

// Exercise 22: Make a function named 'fahrenheitToCelsius' that takes a temperature in Fahrenheit.
// Write the function so that it changes the temperature to Celsius using a formula and tells you the result.
// Formula: (Fahrenheit minus 32) multiplied by (5 divided by 9)

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}
console.log("Celcius: ", fahrenheitToCelsius(140)); // Example: Output should be around 20

//----------------------------------

// Exercise 23: Create a function called 'countVowels' that wants a word or sentence.
// Write the function so that it counts and tells you the number of vowels (a, e, i, o, u) in what you gave.

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("Vowel Count: ", countVowels("Hello, world!")); // Example: Output should be 3

//----------------------------------

// Exercise 24: Build a function named 'emojiTranslator' that asks for some text.
// Write the function so that it replaces certain words with emojis and gives you the translated text.

function emojiTranslator(text) {
  const translation = {
    hello: "👋",
    world: "🌍",
    love: "❤️",
  };
  const words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (translation.hasOwnProperty(words[i])) {
      words[i] = translation[words[i]];
    }
  }
  return words.join(" ");
}
console.log("Output: ", emojiTranslator("Hello world I love coding!")); // Example: Output should be "👋 🌍 I ❤️ coding!"

//----------------------------------

// Exercise 25: Generate a function called 'coinFlip' that doesn't need any input.
// Write the function so that it pretends to flip a coin and tells you if it landed on "Heads" or "Tails".

function coinFlip() {
  const randomValue = Math.random();
  return randomValue < 0.5 ? "Heads" : "Tails";
}
console.log("Coin side: ", coinFlip()); // Example: Output should be "Heads" or "Tails"

//----------------------------------

// Exercise 26: Create a function named 'reverseArray' that needs a list.
// Write the function so that it gives you a new list with the items in reverse order.

function reverseArray(arr) {
  return arr.reverse();
}
console.log("New Array: ", reverseArray([1, 2, 3, 4, 5])); // Example: Output should be [5, 4, 3, 2, 1]

//----------------------------------

// Exercise 27: Make a function called 'calculateTip' that wants two numbers: the bill amount and the tip percentage.
// Write the function so that it calculates and gives you the amount of tip based on the bill and tip percentage.

function calculateTip(billAmount, tipPercentage) {
  return (billAmount * tipPercentage) / 100;
}
console.log("The tip should be: ", calculateTip(50, 15)); // Example: Output should be 7.5
