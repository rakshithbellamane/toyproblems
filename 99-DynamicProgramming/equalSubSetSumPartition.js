const hasEqualSum = (part1, part2) => {
  let sum1 = part1.reduce(((sum, i) => sum + i), 0);
  let sum2 = part2.reduce(((sum, i) => sum + i), 0);

  return sum1 === sum2;
}

const isEqualPartition = (nums, i=0, part1=[], part2=[]) => {
  if (i >= nums.length && hasEqualSum(part1, part2)) return true;

  let newPart11 = [...part1];
  let newPart12 = [...part1, nums[i]];

  let newPart21 = [...part2];
  let newPart22 = [...part2, nums[i]];

  return (isEqualPartition(nums, i+1, newPart11, newPart12) || isEqualPartition(nums, i+1, newPart21, newPart22));
}


let nums = [1,2,3,4];
console.log(isEqualPartition(nums, 1, [nums[0]], []));