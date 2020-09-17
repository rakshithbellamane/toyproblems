// we will use only bit operators
const add = (a, b) => {
  if (b === 0) return a;

  // add without carry
  let sum = a ^ b;

  // figure out carry without adding
  let carry = (a & b) << 1;

  // recurse until there is no carry
  return add (sum, carry);
}

console.log(add(5,6));