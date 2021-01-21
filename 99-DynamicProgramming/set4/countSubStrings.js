/************************ */
const findNumPalSubStrSol1 = (str, start=0, end=str.length-1, dp) => {
  if (dp[`${start}|${end}`]) return dp[`${start}|${end}`];

  if (start === end) {
    dp[`${start}|${end}`] = true;
    return true;
  }

  if (start > end) return false;

  if (str[start] === str[end])
  {
    dp[`${start+1}|${end-1}`] = findNumPalSubStrSol1(str, start+1, end-1, dp);
    if (dp[`${start+1}|${end-1}`]) {
      dp[`${start}|${end}`] = true;
    }
  }
    
  dp[`${start+1}|${end}`] = findNumPalSubStrSol1(str, start+1, end, dp);
  dp[`${start}|${end-1}`] = findNumPalSubStrSol1(str, start, end-1, dp);

  return dp[`${start}|${end}`];
}
/************************ */
const findNumPalSubStrSol2 = str => {
  let count=0;
  let dp = (new Array(str.length)).fill(0).map(() => (new Array(str.length)).fill(false));

  for (let i=0; i<str.length; i++) {
    dp[i][i] = true;
    count++;
  }
  
  for (let start=str.length-1; start>=0; start--) {
    for (let end=start+1; end<str.length; end++) {
      if (str[start] === str[end] && (end-start === 1 || dp[start+1][end-1])) {
        dp[start][end] = true;
        count++;
      }
    }
  }

  return count;
}
/************************ */
let str = 'abdbca';
let palSubStr = {};
let count = 0;
findNumPalSubStrSol1(str, 0, str.length-1, palSubStr);
for (let i in palSubStr) {
  if (palSubStr[i]) count++;
}
console.log(`findNumPalSubStrSol1 ${count}`);
console.log(`findNumPalSubStrSol2 ${findNumPalSubStrSol2(str)}`);
