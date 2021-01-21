const findTargetSumSol1 = (nums, sum, curIndex) => {
  if (sum === 0) return 1;

  if (curIndex >= nums.length) return 0;

  let count1 = findTargetSumSol1(nums, sum+nums[curIndex], curIndex+1);
  let count2 = (nums[curIndex] <= sum) ? findTargetSumSol1(nums,sum-nums[curIndex], curIndex+1) : 0;

  return count1+count2;
}

/************************************************ */
let nums = [1,2,7,1];
let sum = 9;
console.log(`findTargetSumSol1 ${findTargetSumSol1(nums, sum, 0)}`)