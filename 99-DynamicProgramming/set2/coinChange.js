const findCoinChangeSol1 = (deno, amt, curIndex=0) => {
  if (amt === 0) return 1;
  if (amt < 0 || curIndex >= deno.length) return 0;

  return findCoinChangeSol1(deno, amt, curIndex+1) + findCoinChangeSol1(deno, amt-deno[curIndex], curIndex);
}

/************************ */
// with memo
const findCoinChangeSol2 = (deno, amt, curIndex=0, dp=[]) => {
  if (amt === 0) return 1;
  if (amt < 0 || curIndex >= deno.length) return 0;

  dp[curIndex] = dp[curIndex] || [];

  if (dp[curIndex][amt]) return dp[curIndex][amt];

  dp[curIndex][amt] = findCoinChangeSol2(deno, amt, curIndex+1) + findCoinChangeSol2(deno, amt-deno[curIndex], curIndex);

  return dp[curIndex][amt];
}

/************************ */
// bottom up
const findCoinChangeSol3 = (deno, amt) => {
  let dp = (new Array(deno.length)).fill(0).map(() => (new Array(amt+1)).fill(0));

  for (let i=0; i<deno.length; i++) {
    dp[i][0] = 1;
  }

  for (let i=0; i<deno.length; i++) {
    for (let j=1; j<=amt; j++) {
      if (i > 0) dp[i][j] = dp[i-1][j] 
      if (j>= deno[i])
        dp[i][j] += dp[i][j-deno[i]];
    }
  }

  return dp[deno.length-1][amt];
}

/*************************** */

let deno = [1,2,3];
let amt = 5;
console.log(`findCoinChangeSol1 ${findCoinChangeSol1(deno, amt)}`);
console.log(`findCoinChangeSol2 ${findCoinChangeSol2(deno, amt)}`);
console.log(`findCoinChangeSol3 ${findCoinChangeSol3(deno, amt)}`);