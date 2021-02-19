const findAllMissingNums = arr => {
  let missing = [];

  let i = 0;

  while (i < arr.length) {
    let j = arr[i]-1;
    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else
      i++;
  }

  for (let i=0; i<arr.length; i++) {
    if (arr[i] !== i+1) missing.push(i+1);
  }

  return missing;
}

const arr = [2, 4, 2, 2];
console.log(findAllMissingNums(arr));