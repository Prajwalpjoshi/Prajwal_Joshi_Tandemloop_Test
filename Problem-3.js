// Problem-3: Generate odd number series based on input
// If input is odd → print odd numbers till input
// If input is even → print odd numbers till input-1

const a = parseInt(prompt("Enter a number: "));
let result = [];

let limit = a % 2 === 0 ? a - 1 : a;

for (let i = 1; i <= limit; i += 2) {
  result.push(i);
}

console.log(result.join(", "));
