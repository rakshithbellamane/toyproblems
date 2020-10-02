const maxMins = (arr) => {
  let memo = {}, i;

  for (i=arr.length-1; i >=0 ; i--) {
    let bestWithIndex = arr[i] + (memo[i+2] ? memo[i+2] : 0)
    let bestWithoutIndex = memo[i+1] ? memo[i+1] : 0;
    
    memo[i] = Math.max(bestWithIndex, bestWithoutIndex);
  }

  return memo[0];
}

const apts = [30,15,60,75,45,15,15,45];

console.log(maxMins(apts));