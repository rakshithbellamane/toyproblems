// NOT distinct and sorted

const findMagicIndex = (inputArray, start, end) => {
  if (end < start) return -1;

  let mid = Math.round((start + end)/2);

  if (inputArray[mid] === mid) {
    return mid;
  }

  let left = Math.min(mid-1, inputArray[mid]);
  let leftMagic = findMagicIndex(inputArray, start, left);
  if (leftMagic > 0) return leftMagic;

  let right = mid + 1;
  return findMagicIndex(inputArray, right, end);
}

const inputArray = [-10, -5, 1, 1, 1, 3, 4, 7, 9, 12, 13];

console.log(findMagicIndex(inputArray, 0, 11));