const maxMins = (arr, index=0) => {
  if (index >= arr.length) return 0;

  let bestWithIndex = arr[index] + maxMins(arr, index+2);
  let bestWithoutIndex = maxMins(arr, index+1);

  return Math.max(bestWithIndex, bestWithoutIndex);
}

const apts = [30,15,60,75,45,15,15,45];

console.log(maxMins(apts));