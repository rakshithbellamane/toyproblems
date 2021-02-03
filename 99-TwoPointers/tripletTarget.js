const findTriplet = (input, target) => {
  // sort the array
  // loop through the array and for each element 
    // using left & right, find the pair whose sum is closest to target-element
      // this happens when right-left=1
    // if the sum is smaller than the current smallest then make the new sum as the smallest and make the new set as the smallest triplet

  let arr = input.sort((a,b) => a-b);
  let smallestDiff = Number.MAX_VALUE;
  let tripletSum;

  for (let i=0; i<arr.length-2; i++) {
    let l = i+1;
    let r = arr.length-1;
    let targetSum = target-arr[i];
    let curSum = 0;

    while (l < r) {
      curSum = arr[l]+arr[r];
      if (curSum === targetSum)
        break;
      if (curSum < targetSum)
        l++;
      if (curSum > targetSum)
        r++;
    }

    if (targetSum-curSum < smallestDiff) {
      smallestDiff = targetSum-curSum;
      tripletSum = arr[i]+curSum;
    }
  }

  return tripletSum;
}

let input = [-2, 0, 1, 2];
let target = 2;
console.log(`${findTriplet(input, target)}`);