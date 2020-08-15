const sortedMerge = (arr1, arr2) => {
  // start merging from the end of both the arrays
  // get the index of the last element of both the arrays
  let index1 = arr1.length -1;
  let index2 = arr2.length -1;

  // get the index of the last element of the merged array
  let mIndex = arr1.length+arr2.length-1;

  // add the buffer to store the arr2 to the end of arr1
  arr2.forEach(() => arr1.push(0));

  // loop through the second array until the begining
  while (index2 >=0) {
    // if arr1 element is greater than arr2 element, then copy the arr1 element to the merged array position indicated by mIndex
    if (index1 >= 0 && arr1[index1] > arr2[index2]) {
      arr1[mIndex] = arr1[index1];
      // move to the next element in arr1
      index1--;
    } else {
      // either the arr1 element is less than or equal to arr2 element. So copy the arr2 element to the merged array position indicated by mIndex;
      arr1[mIndex] = arr2[index2];
      // move to the next element in arr2
      index2--;
    }

    // update the merged index correctly
    mIndex--;
  }
  
  return arr1;
}

let arr1 = [1,4,5,0,0,0];
let arr2 = [2,4,6];

console.log(sortedMerge(arr1,3,arr2,3));