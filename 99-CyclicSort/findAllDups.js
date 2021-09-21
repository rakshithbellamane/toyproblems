const findAllDupsSol1 = arr => {
  let dups = [];
  let i=0;

  while (i<arr.length) {
    let j=arr[i]-1;
    if (arr[j] !== arr[i]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      if (j !== i)
        dups.push(arr[i]);
      i++;
    }
  }

  return dups;
}

const arr = [5, 4, 7, 2, 3, 5, 3];
console.log(findAllDupsSol1(arr));