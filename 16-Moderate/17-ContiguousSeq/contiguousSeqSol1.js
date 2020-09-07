const findMaxSeq = arr => {
  let maxSum = 0, sum=0;

  for (let i=0; i<arr.length; i++) {
    sum += arr[i];

    // if sum > maxSum, assign maxSum to sum
    if (sum > maxSum) maxSum = sum;
    // if sum becomes negative, reset sum to 0
    else if (sum < 0) sum = 0;
  }

  return maxSum;
}

let arr = [2,3,-8,-1,2,4,-2,3];

console.log(findMaxSeq(arr));
