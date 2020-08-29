// a = a - b
// b = a + b => a - b + b => a
// a = b - a => a - (a - b) => b

let a = 10;
let b = 20;
console.log(`a=${a}, b=${b}`);

a = a - b;
b = b + a;
a = b - a;

console.log(`a=${a}, b=${b}`);