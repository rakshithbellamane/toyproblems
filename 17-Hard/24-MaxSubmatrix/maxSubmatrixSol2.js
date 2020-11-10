const getMaxMatrix = matrix => {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  let bestMatrix = null;
  let bestSum = 0;

  let sumThru = precomputeSums(matrix);

  for (let r1=0; r1<rowCount; r1++) {
    for (let r2=r1; r2<rowCount; r2++) {
      for (let c1=0; c1<colCount; c1++) {
        for (let c2=c1; c2<colCount; c2++) {
          let sum = sumMatrix(sumThru, r1, c1, r2, c2);
          if (bestMatrix === null || sum > bestSum) {
            bestSum = sum;
            bestMatrix = {r1, c1, r2, c2, bestSum};
          }
        }
      }
    }
  }

  return bestMatrix;
}

const precomputeSums = matrix => {
  let sumThru = [];

  for (let r=0; r<matrix.length; r++) {
    let sumRow = [];
    for (let c=0; c<matrix[0].length; c++) {
      let top = r > 0 ? sumThru[r-1][c] : 0;
      let left = c > 0 ? sumRow[c-1] : 0;
      let overlap = (r > 0 && c > 0) ? sumThru[r-1][c-1]: 0;

      sumRow.push(top+left-overlap+matrix[r][c]);
    }
    sumThru.push(sumRow);
  }

  return sumThru;
}

const sumMatrix = (sumThru, r1, c1, r2, c2) => {

  let full = sumThru[r2][c2];
  let top = r1 > 0 ? sumThru[r1-1][c2] : 0;
  let left = c1 > 0 ? sumThru[r2][c1-1]: 0;
  let topLeft = (r1> 0 && c1 > 0) ? sumThru[r1][c1] : 0;

  return full-top-left+topLeft;
}

const matrix = [[9,-8,1,3,-2],
                [-3,7,6,-2,4],
                [6,-4,-4,8,-7]];

console.log(getMaxMatrix(matrix));