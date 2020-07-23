let cache = [];
const countSteps = n => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (cache[n]) return cache[n];
  cache[n] = countSteps(n-1) + countSteps(n-2) + countSteps(n-3);
  return cache[n];
}

console.log(countSteps(3));