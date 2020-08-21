const createPeakAndValley = arr => {
  // sort the array in ascending order
  let sortedArr = arr.sort((a, b) => a-b);
  
  // starting from the 2ⁿᵈ element, swap 2ⁿᵈ and 3ʳᵈ elements.
  // This creates a peak and valley respectively.
  for (i=1; i<sortedArr.length-1; i+=2) {
      let temp = sortedArr[i+1];
      sortedArr[i+1] = sortedArr[i];
      sortedArr[i] = temp;
  }

  return sortedArr;
}

const arr = [4,1,7,9,0,8]
console.log(createPeakAndValley(arr));