const findAvg = (arr, K) => {
  let avg = [];

  if (arr.length === 0 || arr.length < K) return avg;
  
  let winStart = 0;
  let winEnd = 0;
  let winSum = 0;

  for (let winEnd=0; winEnd<arr.length; winEnd++) {
    winSum += arr[winEnd];
    if (winEnd-winStart+1 === K) {
      avg.push(winSum/K);
      winSum -= arr[winStart];
      winStart++;
    }
  }

  return avg;
}

let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let K = 5;
console.log(`avg of contiguous sub array of length ${K} is ${findAvg(arr,K)}`);