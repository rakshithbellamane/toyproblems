// assuming a & b are single bits
// a = a ^ b will result in a = 1 if a and b are different and a = 0 if a and b are same.
// XORing 1 with any bit will flip it.
// XORing 0 with any bit will retain it.
// b = a ^ b will flip b if a and b were different. Which now means b has original value of a.
// a = a ^ b will flip b (i.e original a) if a and b were different in the begining.

let a = 10;
let b = 20;
console.log(`a=${a}, b=${b}`);

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(`a=${a}, b=${b}`);