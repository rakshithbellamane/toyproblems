const findSubSetSum = (set, sum, n) => {
  if (sum === 0) return true;
  if (sum !== 0 && n === 0) return false;

  return findSubSetSum(set, sum, n-1) || findSubSetSum(set, sum-set[n], n-1)
}

let set = [3,34,4,12,5,2];
let sum = 9;

console.log(findSubSetSum(set, sum, set.length-1));

