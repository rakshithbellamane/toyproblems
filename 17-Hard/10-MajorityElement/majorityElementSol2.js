const findMajorityEle = arr => {
  // get the candidate from the array that could be the majority
  let candidate = findCandidate(arr);
  // validate if the candidate is truly the majority by scanning the array
  return validate(arr,candidate) ? candidate : null;
}

// function to find the majority candidate
const findCandidate = arr => {
  // loop through the eles in the array
  let i = 0;
  // keep track of the count of times the begining ele appears in the sub array starting with that ele
  let count=0;
  // start off with setting the first ele as the potential majority
  let majority=arr[i];
  // loop through the eles in the array 
  while (i < arr.length) {
    // if the count is zero from the prev sub array, 
      // skip the last ele since it is not the majority in the sub array and set the current ele as the majority
    if (count === 0) majority = arr[i];
    // the current ele is same as the majority candidate, increment the count
    if (arr[i] === majority) count++;
    // the current ele is not same as the majority candidate, decrement the count
    else count--;
    
    i++;
  }

  return count > 0 ? majority : null;
}

// function to scan through the arr and see if the majority candidate is truly majority
const validate = (arr, majority) => {
  let count = 0;
  for (let i=0; i< arr.length; i++) {
    if (arr[i] === majority) count++;
  }

  return count >= (arr.length/2);
}

let arr = [1,3,5,3,9,6,3,3,3,3];

console.log(findMajorityEle(arr));
