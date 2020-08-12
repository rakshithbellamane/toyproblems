const mergeArr = (leftSortedArr, rightSortedArr) => {
  let mergedArr = [];
  let lIndex=0, rIndex = 0;

  while (mergedArr.length < (leftSortedArr.length+rightSortedArr.length)) {
    if (lIndex === leftSortedArr.length) mergedArr = mergedArr.concat(rightSortedArr.slice(rIndex));
    else if (rIndex === rightSortedArr.length) mergedArr = mergedArr.concat(leftSortedArr.slice(lIndex));
    else if (leftSortedArr[lIndex] <= rightSortedArr[rIndex]) mergedArr.push(leftSortedArr[lIndex++]);
    else mergedArr.push(rightSortedArr[rIndex++]);
  }

  return mergedArr;
}

const mergeSort = inputArray => {
  if (inputArray.length === 1) return inputArray;

  let mid = Math.round(inputArray.length/2);
  let leftArr = inputArray.slice(0,mid);
  let rightArr = inputArray.slice(mid);

  let leftSortedArr = mergeSort(leftArr);
  let rightSortedArr = mergeSort(rightArr);

  return mergeArr(leftSortedArr, rightSortedArr);
}

let inputArray = [8,5,6,1,2,9,8,4];
console.log(mergeSort(inputArray));