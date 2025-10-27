// Problem-1: Simple Calculator using Class
// Inputs: a, b (numbers) and operation (string)

class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) return "Division by zero not allowed";
    return a / b;
  }
}

const calc = new Calculator();

const a = parseFloat(prompt("Enter first number: "));
const b = parseFloat(prompt("Enter second number: "));
const operation = prompt("Enter operation (add/subtract/multiply/divide): ").toLowerCase();

let result;
switch (operation) {
  case "add":
    result = calc.add(a, b);
    break;
  case "subtract":
    result = calc.subtract(a, b);
    break;
  case "multiply":
    result = calc.multiply(a, b);
    break;
  case "divide":
    result = calc.divide(a, b);
    break;
  default:
    result = "Invalid operation";
}

console.log("Result:", result);
