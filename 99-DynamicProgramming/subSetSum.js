const findSubSetSumSol1 = (set, sum, n) => {
  if (sum === 0) return true;
  if (sum < 0 || n < 0) return false;

  return findSubSetSumSol1(set, sum, n-1) || findSubSetSumSol1(set, sum-set[n], n-1)
}

/***************************************************************/
// bottom up solution (O(set.length*sum))

const findSubSetSumSol2 = (set, sum) => {
  let dp = (new Array(set.length)).fill(false).map(() => (new Array(sum+1)).fill(false));

  for (let i=0; i<set.length; i++) {
    dp[i][0] = true;
  }

  for (let i=0; i<sum+1; i++) {
    if (set[0] === i) dp[0][i] = true;
  }

  for (let i=1; i<set.length; i++) {
    for (let j=1; j<sum+1; j++) {
      if (dp[i-1][j]) {
        dp[i][j] = dp[i-1][j];
      } else if (set[i] <= j) {
        dp[i][j] =  dp[i-1][j-set[i]]
      }
    }
  }

  return dp[set.length-1][sum];
}

/******************************************************************** */
// dp solution with O(sum)

const findSubSetSumSol3 = (set, sum) => {
  let dp = (new Array(sum+1)).fill(false);

  dp[0] = true;
  for (let j=1; j<sum+1; j++) {
    dp[j] = j === set[0] ? true : false;
  }

  for (let i=1; i<set.length; i++) {
    for (let j=sum; j>=0; j--) {
      if (!dp[j] && j >= set[i])
        dp[j] = dp[j-set[i]];
    }
  }

  return dp[sum];
}

/*******************************************************************/

set = [2,3,4,5,12,34];
sum = 9;

console.log(`findSubSetSumSol1: ${findSubSetSumSol1(set, sum, set.length-1)}`);
console.log(`findSubSetSumSol2: ${findSubSetSumSol2(set, sum)}`);
console.log(`findSubSetSumSol3: ${findSubSetSumSol3(set, sum)}`);