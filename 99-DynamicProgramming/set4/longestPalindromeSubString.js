/************************* */
const findLPSSol1 = (str, start=0, end=str.length-1) => {
  if (start === end) return 1;
  if (start > end) return 0;

  if (str[start] === str[end]) {
    let remainingLen = (end-start-1)
    let maxLPS = findLPSSol1(str, start+1, end-1);
    if (remainingLen === maxLPS) return remainingLen + 2;
  }
  
  let len1 = findLPSSol1(str, start+1, end);
  let len2 = findLPSSol1(str, start, end-1);

  return Math.max(len1, len2);
}
/************************* */
const findLPSSol2 = (str, start=0, end=str.length-1, dp=[]) => {
  if (start === end) return 1;
  if (start > end) return 0;

  dp[start] = dp[start] || [];

  if (dp[start][end]) return dp[start][end];

  if (str[start] === str[end]) {
    let remainingLen = (end-start-1)
    let maxLPS = findLPSSol2(str, start+1, end-1);
    if (remainingLen === maxLPS) {
      dp[start][end] = remainingLen + 2;
      return dp[start][end];
    }
  }
  
  let len1 = findLPSSol2(str, start+1, end);
  let len2 = findLPSSol2(str, start, end-1);

  dp[start][end] = Math.max(len1, len2);

  return dp[start][end];
}
/************************* */
const findLPSSol3 = str => {
  let dp = (new Array(str.length)).fill(0).map(() => (new Array(str.length)).fill(0));

  for (let i=0; i<str.length; i++) {
    dp[i][i] = 1;
  }

  for (let start = str.length-1; start >= 0; start--) {
    for (let end = start+1; end<str.length; end++) {
      if (str[start] === str[end] && (end-start-1 === dp[start+1][end-1]))
        dp[start][end] = 2 + dp[start+1][end-1];
      else
        dp[start][end] = Math.max(dp[start+1][end], dp[start][end-1]);
    }
  }

  return dp[0][str.length-1];
}
/************************* */
let str = 'abdbca';
console.log(`findLPSSol1 ${findLPSSol1(str)}`);
console.log(`findLPSSol2 ${findLPSSol2(str)}`);
console.log(`findLPSSol3 ${findLPSSol3(str)}`);