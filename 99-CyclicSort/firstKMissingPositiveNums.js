const findMissingNums = (arr, k) => {
  let missing = [];

  let i =0;
  while (i < arr.length) {
    let j= arr[i]-1;
    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else
      i++;
  }

  for (let i=0; i<arr.length; i++) {
    if (arr[i] !== i+1)
      missing.push(i+1);

    if (missing.length === k) return missing;
  }

  let next = arr.length+1;
  while (missing.length < k) {
    missing.push(next++);
  }

  return missing;
}

const arr = [2, 1, 3, 6, 5];
const k = 2;
console.log(findMissingNums(arr,k));