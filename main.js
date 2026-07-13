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

//if-else statements
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test
console.log(getGrade(95)); // A
console.log(getGrade(84)); // B
console.log(getGrade(76)); // C
console.log(getGrade(61)); // D
console.log(getGrade(45)); // F

//switch statements
// Function to get the name of the day based on the day number (0-6)


function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

// Test
console.log(getDayName(0)); // Sunday
console.log(getDayName(3)); // Wednesday
console.log(getDayName(6)); // Saturday
console.log(getDayName(9)); // Invalid day

//loops
// For Loop: Print numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// For Loop: Print even numbers from 2 to 50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
//fizzbuzz
// FizzBuzz: Print numbers from 1 to 100 with Fizz, Buzz, and FizzBuzz
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}

//print a triangle of stars
//for Loop: Print a triangle of stars

for (let i = 1; i <= 5; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}
// double all numbers
// Array: Double all numbers in an array using map
const numbers = [2, 4, 6, 8, 10];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

//filter out negative numbers
// Array: Filter out negative numbers from an array
const numbers = [-10, 15, -8, 20, -5, 30];

const positiveNumbers = numbers.filter(num => num >= 0);

console.log(positiveNumbers);

//find the first number greater than 10
// Array: Find the first number greater than 10 in an array
const numbers = [2, 5, 8, 12, 20, 25];

const firstGreaterThanTen = numbers.find(num => num > 10);

console.log(firstGreaterThanTen);

//calculate the product of all numbers
// Array: Calculate the product of all numbers in an array using reduce
const numbers = [2, 3, 4, 5];

const product = numbers.reduce((total, num) => total * num, 1);

console.log(product);