const countSteps = n => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return countSteps(n - 1) + countSteps(n - 2) + countSteps(n - 3);
}

console.log(countSteps(3));