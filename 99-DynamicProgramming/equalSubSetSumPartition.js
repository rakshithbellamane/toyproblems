// recursive
const isEPRecursive = (nums, sum, i) => {
  if (sum === 0) return true;

  if (i >= nums.length) return false;

  return isEPRecursive(nums, sum, i+1) || isEPRecursive(nums, sum-nums[i], i+1);
}

const isEqualPartitionSol1 = (nums) => {
  let sum = nums.reduce((sum, i) => sum+i);

  if (sum%2) return false;
 
  return isEPRecursive(nums, sum/2, 0);
}

/***************************************************************************************/

// recursive with memoization
const isEPRecursiveMemo = (nums, sum, i, dp) => {
  if (sum === 0) return true;

  if (i >= nums.length) return false;

  dp[i] = dp[i] || [];

  if (dp[i][sum] === undefined && nums[i] <= sum) {
    dp[i][sum] = isEPRecursiveMemo(nums, sum-nums[i], i+1, dp);
  }
  if (!dp[i][sum])
    dp[i][sum] = isEPRecursiveMemo(nums, sum, i+1, dp)

  return  dp[i][sum];
}

const isEqualPartitionSol2 = (nums) => {
  let sum = nums.reduce((sum, i) => sum+i);

  if (sum%2) return false;

  let dp = [];

  return isEPRecursiveMemo(nums, sum/2, 0, dp);
}

/**************************************************************************** */
// bottom up approach

const isEqualPartitionSol3 = (nums) => {
  let sum = nums.reduce((sum, i) => sum+i);

  if (sum%2) return false;

  let dp = (new Array(nums.length)).fill(new Array(sum/2+1).fill(0));

  for (let i=0; i<nums.length; i++) {
    dp[i][0] = true;
  }

  for (let i=0; i<sum/2+1; i++) {
    if (nums[0] === i) dp[0][i] = true;
    else dp[0][i] = false;
  }

  for (let i=1; i<nums.length; i++) {
    for (let j=1; j<sum/2+1; j++) {
      dp[i][j] = dp[i-1][j];
      if (!dp[i][j] && nums[i] <= j) dp[i][j] = dp[i][j-nums[i]];
    }
  }

  return dp[nums.length-1][sum/2];
}


let nums = [1,2,5,4];
console.log(`isEqualPartitionSol1: ${isEqualPartitionSol1(nums)}`);
nums = [1,2,5,4];
console.log(`isEqualPartitionSol2: ${isEqualPartitionSol2(nums)}`);
nums = [1,2,5,4];
console.log(`isEqualPartitionSol2: ${isEqualPartitionSol3(nums)}`);