// Variable declarations
let name = "Your Name";
let age = 25;
const birthYear = 1999;

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned


// Exercise: Variable Practice

// Declare variables
let myName = "Jacob";
let myAge = 30;
let isStudent = true;
let favoriteColors = ["Green", "Black", "Blue"];
let today = new Date();

// Display variables
console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);


//Data Types & Operators

// User information
const name = "Jacob";
const age = 30; // Your current age

// Current year
const currentYear = new Date().getFullYear();

// Number operations
const ageInDays = age * 365;
const ageInHours = ageInDays * 24;
const yearTurn100 = currentYear + (100 - age);

// Comparison operator
const isAdult = age >= 18;

// Logical operator
const canVote = isAdult && age < 100;

// String operations (concatenation)
console.log("Hello, " + name + "!");

// String operations (template literals)
console.log(`You are approximately ${ageInDays} days old.`);
console.log(`You are approximately ${ageInHours} hours old.`);
console.log(`You will turn 100 in the year ${yearTurn100}.`);

console.log(`Are you an adult? ${isAdult}`);
console.log(`Eligible to vote? ${canVote}`);