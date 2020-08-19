const findElement = (matrix, num) => {
  let numRow = matrix.length;
  let numCol = matrix[0].length;
  let c=numCol-1;
  let r=0;

  let eleFound = false;
  while (r <numRow && c>=0 && !eleFound) {
    if (matrix[r][c] === num) {
      eleFound = true;
      console.log(`row=${r}, col=${c}`);
    } else if (num < matrix[r][c]) {
      c--;
    } else {
      r++;
    }
  }
}

let matrix = [[1,2,3,4,5,6],
              [7,8,9,10,11,12],
              [13,14,15,16,17,18],
              [19,20,21,22,23,24],
              [25,26,27,28,29,30]];

findElement(matrix, 16);