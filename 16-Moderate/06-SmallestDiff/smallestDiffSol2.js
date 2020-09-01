const findSmallestDiff = (arr1, arr2) => {
  let sortArr1 = arr1.sort((a,b) => a-b);
  let sortArr2 = arr2.sort((a,b) => a-b);

  // loop until we reach end of sortArr1 or sortArr2
  let i=0,j=0;

  let minDiff;
  while (i<sortArr1.length && j<sortArr2.length) {
    // get the difference
    let diff = Math.abs(sortArr1[i] - sortArr2[j]);
    // update the minDiff if diff is smaller
    if (!minDiff || diff < minDiff) minDiff = diff;
    
    // update the index of the array whose next element is the smaller
    if (sortArr1[i+1] < sortArr2[j+1]) i++;
    else j++;
  }

  return minDiff;
}

let arr1 = [1,3,15,33,2];
let arr2 = [23,127,235,19,8];

console.log(findSmallestDiff(arr1, arr2));