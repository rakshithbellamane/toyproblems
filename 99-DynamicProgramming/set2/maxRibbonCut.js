/************************ */
// brute force
const findMaxCutSol1 = (lengths, n, curIndex=0) => {
  if (n === 0) return 0;
  if (curIndex >= lengths.length || n < 0) return Number.MIN_VALUE;

  let count1 = Number.MIN_VALUE;
  if (n >= lengths[curIndex]) {
    let res = findMaxCutSol1(lengths, n-lengths[curIndex], curIndex);
    if (res !== Number.MIN_VALUE) count1 = res + 1;
  }
  
  let count2 = findMaxCutSol1(lengths, n, curIndex+1);

  return Math.max(count1, count2);
}

/************************ */
// top down with memo
const findMaxCutSol2 = (lengths, n, curIndex=0, dp=[]) => {
  if (n === 0) return 0;
  if (curIndex >= lengths.length || n < 0) return Number.MIN_VALUE;

  dp[curIndex] = dp[curIndex] || [];

  if (dp[curIndex][n]) return dp[curIndex][n];

  let count1 = Number.MIN_VALUE;
  if (n >= lengths[curIndex]) {
    let res = findMaxCutSol1(lengths, n-lengths[curIndex], curIndex);
    if (res !== Number.MIN_VALUE) count1 = res + 1;
  }
  
  let count2 = findMaxCutSol1(lengths, n, curIndex+1);

  dp[curIndex][n] = Math.max(count1, count2);

  return dp[curIndex][n];
}

/************************ */
// bottom up
const findMaxCutSol3 = (lengths, n) => {
  let dp = (new Array(lengths.length)).fill(Number.MIN_VALUE).map(() => (new Array(n+1)).fill(Number.MIN_VALUE));

  for (let i=0; i<lengths.length; i++) {
    dp[i][0] = 0;
  }

  for (let i=0; i<lengths.length; i++) {
    for (let j=1; j<=n; j++) {
      let count1 = Number.MIN_VALUE;
      if (j>=lengths[i] && dp[i][j-lengths[i]] !== Number.MIN_VALUE) {
        count1 = dp[i][j-lengths[i]] + 1;
      }
      let count2 = Number.MIN_VALUE;
      if (i > 0)
        count2 = dp[i-1][j];

      dp[i][j] = Math.max(count1, count2);
    }
  }

  return dp[lengths.length-1][n];
}
/************************ */
let lengths = [3,5,7];
let n = 13;
console.log(`findMaxCut ${findMaxCutSol1(lengths, n)}`);
console.log(`findMaxCut ${findMaxCutSol2(lengths, n)}`);
console.log(`findMaxCut ${findMaxCutSol3(lengths, n)}`);