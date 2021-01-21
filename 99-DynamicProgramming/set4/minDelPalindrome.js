/********************* */
const findMinDelSol1 = (str) => {
  let dp = (new Array(str.length)).fill(0).map(() => (new Array(str.length)).fill(Number.MAX_VALUE));

  for (let i=0; i<str.length; i++) {
    dp[i][i] = 0;
  }

  for (let start=str.length-1; start>=0; start--) {
    for (let end=start+1; end<str.length; end++) {
      if (str[start] === str[end]) {
        dp[start][end] = dp[start+1][end-1];
      } else {
        dp[start][end] = 1 + Math.min(dp[start+1][end], dp[start][end-1]);
      }
    }
  }

  return dp[0][str.length-1];
}
/********************* */
/********************* */
let str = 'abdbca';
console.log(`findMinDelSol1 ${findMinDelSol1(str)}`);