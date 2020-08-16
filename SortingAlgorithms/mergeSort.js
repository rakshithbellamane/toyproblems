const mergeArr = (leftSortedArr, rightSortedArr) => {
  let mergedArr = [];
  let lIndex=0, rIndex = 0;

  // loop until the length of the merged array is = left+right length
  while (mergedArr.length < (leftSortedArr.length+rightSortedArr.length)) {
    // if we have merged all the left itmes, just concat the remaining right items
    if (lIndex === leftSortedArr.length) mergedArr = mergedArr.concat(rightSortedArr.slice(rIndex));
    // if we have merged all the right items, just concat the remaining left items
    else if (rIndex === rightSortedArr.length) mergedArr = mergedArr.concat(leftSortedArr.slice(lIndex));
    // if left is <= right, add left to merged array
    else if (leftSortedArr[lIndex] <= rightSortedArr[rIndex]) mergedArr.push(leftSortedArr[lIndex++]);
    // right > left, add right to merged array
    else mergedArr.push(rightSortedArr[rIndex++]);
  }

  return mergedArr;
}

const mergeSort = inputArray => {
  if (inputArray.length === 1) return inputArray;

  // divide the array into two parts
  let mid = Math.round(inputArray.length/2);
  let leftArr = inputArray.slice(0,mid);
  let rightArr = inputArray.slice(mid);

  // sort the left and right arrays recursively
  let leftSortedArr = mergeSort(leftArr);
  let rightSortedArr = mergeSort(rightArr);

  // merge the left and right sorted arrays
  return mergeArr(leftSortedArr, rightSortedArr);
}

let inputArray = [8,5,6,1,2,9,8,4];
console.log(mergeSort(inputArray));