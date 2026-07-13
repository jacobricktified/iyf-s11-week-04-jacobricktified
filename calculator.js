// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// Modulus
function modulus(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a % b;
}

// Power
function power(a, b) {
    return a ** b;
}

// Main calculator
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        case "%":
            return modulus(num1, num2);

        case "**":
            return power(num1, num2);

        default:
            return "Error: Invalid operator";
    }
}

// Test Cases
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error: Cannot divide by zero
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 4));   // 16
console.log(calculate(10, "&", 5));   // Error: Invalid operator