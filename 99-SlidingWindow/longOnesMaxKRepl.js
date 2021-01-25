const findMaxOnesSol1 = (arr, K) => {
  let zeroPos = [];
  let zeroCnt = 0;
  let start = 0;
  let maxLen = 0;

  for (let end=0; end < arr.length; end++) {
    if (arr[end] === 0) {
      zeroCnt++;
      zeroPos.push(end);
    }

    if (zeroCnt > K) {
      start = zeroPos.shift()+1;
      zeroCnt--;
    }

    maxLen = Math.max(maxLen, end-start+1);
  }

  return maxLen;
}

/**************** */
const findMaxOnesSol2 = (arr, K) => {
  let maxLen = 0;
  let start = 0;
  let oneCnt = 0;

  for (let end=0; end<arr.length; end++) {
    if (arr[end] === 1) oneCnt++;

    if (end-start+1-oneCnt > K) {
      if (arr[start] === 1) {
        oneCnt--;
      }
      start++;
    }

    maxLen = Math.max(maxLen, end-start+1);
  }

  return maxLen;
}
/**************** */

const arr = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0];
const K = 3;
console.log(`solution1: max len of 1s after replacing ${K} is ${findMaxOnesSol1(arr, K)}`);
console.log(`solution2: max len of 1s after replacing ${K} is ${findMaxOnesSol2(arr, K)}`);