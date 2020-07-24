const findMagicIndex = (inputArray, start, end) => {
  for (let i=0; i<end; i++) {
    if (inputArray[i] === i) return i;
  }
}

const inputArray = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];

console.log(findMagicIndex(inputArray, 0, 11));