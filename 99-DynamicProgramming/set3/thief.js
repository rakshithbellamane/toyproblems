/***************** */
const findMaxStealSol1 = (houses, curIndex=0) => {
  if (curIndex >= houses.length) return 0;

  let steal1 = findMaxStealSol1(houses, curIndex+2) + houses[curIndex];
  let steal2 = findMaxStealSol1(houses, curIndex+1);

  return Math.max(steal1, steal2);
}
/***************** */
const findMaxStealSol2 = (houses, curIndex=0, dp=[]) => {
  if (curIndex >= houses.length) return 0;

  if (dp[curIndex]) return dp[curIndex];

  let steal1 = findMaxStealSol1(houses, curIndex+2) + houses[curIndex];
  let steal2 = findMaxStealSol1(houses, curIndex+1);

  dp[curIndex] = Math.max(steal1, steal2);

  return dp[curIndex];
}
/***************** */
const findMaxStealSol3 = (houses) => {
  let dp = (new Array(houses.length+1)).fill(0);

  dp[0] = 0;
  dp[1] = houses[0];

  for (let i=2; i<=houses.length; i++) {
    dp[i] = Math.max(dp[i-2]+houses[i-1], dp[i-1]);
  }

  return dp[houses.length];
}
/***************** */

// let houses = [2,5,1,3,6,2,4];
let houses = [2,10,14,8,1];
console.log(`findMaxStealSol1 ${findMaxStealSol1(houses)}`);
console.log(`findMaxStealSol2 ${findMaxStealSol2(houses)}`);
console.log(`findMaxStealSol3 ${findMaxStealSol3(houses)}`);