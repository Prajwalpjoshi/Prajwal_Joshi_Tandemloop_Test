// Problem-2: Generate odd number series till N
// Example: input 4 → output 1, 3, 5, 7

const a = parseInt(prompt("Enter a number: "));
let result = [];

for (let i = 0; i < a; i++) {
  result.push(2 * i + 1);
}

console.log(result.join(", "));
