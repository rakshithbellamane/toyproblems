const sumSwap = (arr1, arr2) => {
  // get the sum for arrays
  let sum1 = arr1.reduce((sum,ele) => sum + ele);
  let sum2 = arr2.reduce((sum,ele) => sum + ele);

  // loop through each element in arr1
  for (let i=0; i<arr1.length; i++) {
    let ele1 = arr1[i];

    // imagine you add ele1 to arr2. So, calculate the new imaginary sums.
    let newSum2 = sum2+ele1;
    let newSum1 = sum1-ele1;

    // calculate the difference between the new sums.
    let diff = newSum2-newSum1;

    // if arr1's sum should be same as arr2's sum, then we need to transfer half of the difference back to arr1.
    let ele2 = diff/2;

    // if the half of diff exists in the arr2, then return those elements
    if (arr2.includes(ele2)) return {ele1, ele2};
  }
}

let arr2 = [4,1,2,1,1,2];
let arr1 = [3,6,5,3];

console.log(sumSwap(arr1, arr2));