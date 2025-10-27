// Problem-4: Count numbers divisible by 1–9

const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
let result = {};

for (let i = 1; i <= 9; i++) {
  let count = numbers.filter(num => num % i === 0).length;
  result[i] = count;
}

console.log(result);
