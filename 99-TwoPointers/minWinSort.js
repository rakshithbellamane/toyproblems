const findMinWin = arr => {
  let r = Math.ceil(arr.length/2);
  let l = r-1;
  let i,j;

  let left = arr[l];
  let right = arr[r];
  
  while (l >=0 || r < arr.length) {
    if (arr[l] > arr[r]) {

    }
  }
}

const arr = [1, 2, 5, 3, 7, 10, 9, 12];
console.log(findMinWin(arr));