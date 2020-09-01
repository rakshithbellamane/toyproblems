// trailing zeros are created by number of 10s. So, number of trailing zeros is equal to number of 10s in the factorial
// 10 is created by 5 * 2. So, we can find the number of trailing zeros by counting the number of 5s in the factorial
const factZeros = num => {
  let count = 0;
  for (let i=1; i<=num; i++) {
    // count is incremented only if i is divisble by 5
    let j = i;
    while (j % 5 === 0) {
      count++;
      j /= 5;
    }
  }

  return count;
}

console.log(factZeros(25));