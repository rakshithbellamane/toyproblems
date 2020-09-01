const factZeros = num => {
  // similar to factorialZeroSol1.js
  // we can find number of 5 by determining the multiples of 5, 25, 125 etc
  let count = 0;
  for (let i=5; i <= num; i *= 5) {
    count += Math.trunc(num/i);
  }

  return count;
}

console.log(factZeros(25));