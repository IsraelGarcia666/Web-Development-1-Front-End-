// Exercise 1 - Developer Tools and Console
console.log("JavaScript file connected successfully!");

console.log("Hello, World!");

// Exercise 2 - Variables
const name = "Isra666";
let age = 25;
const favoriteAnimal = "Alegbrije";

console.log(name);
console.log(age);
console.log(favoriteAnimal);

console.log(
  "Hello, my name is " +
    name +
    ", I am " +
    age +
    " years old, and my favourite imaginary animal is the " +
    favoriteAnimal +
    ".",
);

// Exercise 3 - User Input
const userName = prompt("What is your name?");

console.log("Hello, " + userName + "! Welcome to the JavaScript.");

// Exercise 4 - Conditionals

const userAge = prompt("How old are you?");

if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are underaged.");
}

// Exercise 5 - Functions
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("YO");

// Exercise 6 - Button – Connect JavaScript to the Page

const messageButton = document.getElementById("messageButton");

messageButton.addEventListener("click", function () {
  alert("JavaScript works!");
});
