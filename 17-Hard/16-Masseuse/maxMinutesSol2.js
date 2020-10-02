const maxMins = (arr, memo, index=0) => {
  if (index >= arr.length) return 0;

  if (!memo[index]) {
    let bestWithIndex = arr[index] + maxMins(arr, memo, index+2);
    let bestWithoutIndex = maxMins(arr, memo, index+1);
    
    memo[index] = Math.max(bestWithIndex, bestWithoutIndex);
  }
  
  return memo[index];
}

const apts = [30,15,60,75,45,15,15,45];
let memo = {};

console.log(maxMins(apts, memo));