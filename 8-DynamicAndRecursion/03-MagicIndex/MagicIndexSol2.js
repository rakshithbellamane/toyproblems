// distinct and sorted

const findMagicIndex = (inputArray, start, end) => {
  if (end < start) return -1;

  let mid = Math.round((start + end)/2);

  if (inputArray[mid] === mid) {
    return mid;
  } else if (inputArray[mid] < mid) {
    return findMagicIndex(inputArray, mid+1, end);
  } else {
    return findMagicIndex(inputArray, start, mid-1);
  }
}

const inputArray = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];

console.log(findMagicIndex(inputArray, 0, 11));