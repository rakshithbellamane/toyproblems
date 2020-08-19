const findElement = (matrix, num, r1=0, c1=0, r2=matrix.length-1, c2=matrix[0].length-1) => {
  if (!isWithinBounds(matrix, r1,c1) || !isWithinBounds(matrix, r2,c2)) return false;

  if (matrix[r1][c1] === num) {
    console.log(`row = ${r1} col = ${c1}`);
    return true;
  } else if (!isStartBeforeEnd(r1,c1,r2,c2)) return false;

  // if (isBaseCase(r1,c1,r2,c2)) {
  //   return findElementInBaseCase(matrix, num, r1, c1, r2, c2)
  // }

  let sR1 = r1;
  let sC1 = c1;
  let diagDist = Math.min(r2-r1, c2-c1);
  let sR2 = r2+diagDist;
  let sC2 = c2+diagDist;

  if (!isWithinBounds(matrix, sR1, sC1)) {
    let boundedRowCol = bringWithinBounds(matrix, sR1, sC1);
    sR1 = boundedRowCol.row;
    sC1 = boundedRowCol.col;
  }

  if (!isWithinBounds(matrix, sR2, sC2)) {
    let boundedRowCol = bringWithinBounds(matrix, sR2, sC2);
    sR2 = boundedRowCol.row;
    sC2 = boundedRowCol.col;
  }

  while (isStartBeforeEnd(sR1, sC1, sR2, sC2)) {
    let mr = Math.trunc((sR1+sR2)/2);
    let mc = Math.trunc((sC1+sC2)/2);

    if (matrix[mr][mc] > num) {
      sR2 = mr - 1;
      sC2 = mc - 1;
    } else {
      sR1 = mr + 1;
      sC1 = mc + 1;
    }
  }

  let result = findElement(matrix, num, r1, sC1, sR1-1, c2);
  if (!result) result = findElement(matrix, num, sR1, c1, r2, sC1-1);

  return result;
}

const isBaseCase = (r1, c1, r2, c2) => {
  if (r1 === r2 && c1 === c2) return true;
  if ((r1+1 === r2) && (c1+1 === c2)) return true;
  if (r1 === r2 && (c1+1 === c2)) return true;
  if ((r1+1 === r2) && c1 === c2) return true;

  return false;
}

const findElementInBaseCase = (matrix, num, r1, c1, r2, c2) => {
  for (let i=r1; i<=r2; i++) {
    for (let j=c1; j<=c2; j++) {
      if (matrix[i][j] === num) {
        console.log(`row = ${i} col = ${j}`);
        return true;
      }
    }
  }

  return false;
}

const isStartBeforeEnd = (sR1, sC1, sR2, sC2) => {
  return (sR1 <= sR2 && sC1 <= sC2)
}

const isWithinBounds = (matrix, r, c) => {
  return (r >=0 && r<matrix.length && c >=0 && c<matrix[0].length)
}

const bringWithinBounds = (matrix, r, c) => {
  let boundedRowCol = {row: r, col: c};
  if (r < 0) boundedRowCol.row = 0;
  if (r > matrix.length-1) boundedRowCol.row = matrix.length-1;
  if (c < 0) boundedRowCol.col = 0;
  if (c > matrix[0].length-1) boundedRowCol.col = matrix[0].length-1;

  return boundedRowCol;
}

let matrix = [[1, 2, 3, 4, 5, 6],
              [7, 8, 9, 10,11,12],
              [13,14,15,16,17,18],
              [19,20,21,22,23,24],
              [25,26,27,28,29,30]];

console.log(findElement(matrix, 30));