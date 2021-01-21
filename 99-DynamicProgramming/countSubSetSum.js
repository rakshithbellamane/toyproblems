// recursive brute force

const countSubSetSumSol1 = (nums, sum, n) => {
  if (sum === 0) return 1;

  if (n >= nums.length) return 0;

  let count1 = countSubSetSumSol1(nums, sum, n+1);
  let count2 = countSubSetSumSol1(nums, sum-nums[n], n+1);

  return count1+count2;
}

/***************************************************** */
// recursion with memoization

const countSubSetSumSol2 = (nums, sum, n, dp=[]) => {
  if (sum === 0) return 1;

  if (n >= nums.length) return 0;

  dp[n] = dp[n] || [];

  if (dp[n][sum] === undefined) {
    let count1 = countSubSetSumSol2(nums, sum, n+1, dp);
    let count2 = countSubSetSumSol2(nums, sum-nums[n], n+1, dp);

    dp[n][sum] = count1+count2;
  }

  return dp[n][sum];
}

/***************************************************** */
// bottom up 

const countSubSetSumSol3 = (nums, sum) => {
  let dp = (new Array(nums.length)).fill(0).map(() => (new Array(sum+1)).fill(0));

  for (let i=0; i<nums.length; i++) {
    dp[i][0] = 1;
  }

  for (let i=1; i<=sum; i++) {
    dp[0][i] = nums[0] === i ? 1 : 0;
  }

  for (let i=1; i<nums.length; i++) {
    for (let j=1; j<=sum; j++) {
      dp[i][j] = dp[i-1][j];
      if (j >= nums[i])
        dp[i][j] += dp[i-1][j-nums[i]];
    }
  }

  return dp[nums.length-1][sum];
}

/***************************************************** */
// bottom up with O(sum) space

const countSubSetSumSol4 = (nums, sum) => {
  let dp = (new Array(sum+1)).fill(0);

  dp[0] = 1;
  for (let i=1; i<=sum; i++) {
    dp[i] = nums[0] === i ? 1 : 0;
  }

  for (let i=1; i<nums.length; i++) {
    for (let j=sum; j>=0; j--) {
      if (j >= nums[i])
        dp[j] += dp[j-nums[i]];
    }
  }

  return dp[sum];
}

/***************************************************** */
let nums = [1,2,7,1,5];
let sum = 9;
console.log(`countSubSetSumSol1 ${countSubSetSumSol1(nums, sum, 0)}`);
console.log(`countSubSetSumSol2 ${countSubSetSumSol2(nums, sum, 0)}`);
console.log(`countSubSetSumSol3 ${countSubSetSumSol3(nums, sum)}`);
console.log(`countSubSetSumSol4 ${countSubSetSumSol4(nums, sum)}`);