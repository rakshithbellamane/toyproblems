const sortArr = arr => {
  let i=1;

  while (i < arr.length) {
    let j = arr[i]-1;
    if (arr[i] !== arr[j])
      [arr[i],arr[j]] = [arr[j],arr[i]];
    else
      i++;
  }

  return arr;
}

const arr = [3, 1, 5, 4, 2];
console.log(sortArr(arr));