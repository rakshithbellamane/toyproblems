const getMaxMatrix = matrix => {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  let bestMatrix = null;
  let bestSum = 0;

  for (let r1=0; r1<rowCount; r1++) {
    for (let r2=r1; r2<rowCount; r2++) {
      for (let c1=0; c1<colCount; c1++) {
        for (let c2=c1; c2<colCount; c2++) {
          let sum = sumMatrix(matrix, r1, c1, r2, c2);
          if (bestMatrix === null || sum > bestSum) {
            bestSum = sum;
            bestMatrix = {r1, c1, r2, c2};
          }
        }
      }
    }
  }

  return bestMatrix;
}

const sumMatrix = (matrix, r1, c1, r2, c2) => {
  let sum = 0;

  for (let r=r1; r<=r2; r++) {
    for (let c=c1; c<=c2; c++) {
      sum += matrix[r][c];
    }
  }

  return sum;
}

const matrix = [[9,-8,1,3,-2],
                [-3,7,6,-2,4],
                [6,-4,-4,8,-7]];

console.log(getMaxMatrix(matrix));