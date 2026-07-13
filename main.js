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

//functions
// Function Declarations, Expressions, and Arrow Functions

// 1. Function Declaration
function calculateArea(width, height) {
    return width * height;
}

// 2. Function Expression
const celsiusToFahrenheit = function(celsius) {
    return (celsius * 9 / 5) + 32;
};

// 3. Arrow Function
const isEven = (number) => number % 2 === 0;

// 4. Arrow Function with Body
const getInitials = (fullName) => {
    const names = fullName.trim().split(" ");
    let initials = "";

    for (let name of names) {
        initials += name[0].toUpperCase();
    }

    return initials;
};

// 5. Function Declaration
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test the functions
console.log("Rectangle Area:", calculateArea(10, 5));
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25));
console.log("Is 18 even?", isEven(18));
console.log("Is 13 even?", isEven(13));
console.log("Initials:", getInitials("John Doe"));
console.log("Initials:", getInitials("Jacob Gichira Mbuco"));
console.log("Reversed String:", reverseString("JavaScript"));

// Function with a default parameter
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

// Test the function
console.log(calculateTip(1000));      // 150
console.log(calculateTip(1000, 20));  // 200
console.log(calculateTip(850));       // 127.5
console.log(calculateTip(5000, 18));  // 900