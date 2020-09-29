const findNumTwo = n => {
  let sum=0;
  // start from 2 till n and find the number of 2s in each num
  for (let i=2; i<=n; i++) {
    sum += twoInEachNum(i);
  }

  return sum;
}

// function to determine the number of 2s in each number
const twoInEachNum = num => {
  let count = 0;
  while (num > 0) {
    if (num % 10 === 2) count++
    num = Math.floor(num/10);
  }

  return count;
}

console.log(findNumTwo(20));