const createPeakAndValley = arr => {
  // start from the 2ⁿᵈ element. Swap it with the max of left and right elements.
  // This creates a peak and valley respectively.
  for (i=1; i<arr.length-1; i+=2) {
    // get the max index
    let maxIndex = getMaxIndex(arr, i-1, i, i+1);

    // if maxIndex = i, that means the i is already a peak. So we don't need to do anything
    // else swap i with maxIndex
    if (i !== maxIndex) {
      let temp = arr[maxIndex];
      arr[maxIndex] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

const getMaxIndex = (arr, a, b, c) => {
  let max = Math.max(arr[a], Math.max(arr[b],arr[c]));

  if (max === arr[a]) return a;
  else if (max === arr[c]) return c;
  else return b;
}

const arr = [4,1,4,9,0,8]
console.log(createPeakAndValley(arr));