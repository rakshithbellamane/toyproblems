const setZeros = matrix => {
  let row = [];
  let col = [];

  for (let i=0; i< matrix.length; i++) {
    for (let j=0; j< matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        row.push(i);
        col.push(j);
      }
    }
  }

  console.log(row);
  console.log(col);

  //nullify rows
  for (let i=0; i< row.length; i++) {
    for (let j=0;j< matrix[0].length; j++) {
      matrix[row[i]][j] = 0;
    }
  }

  //nullify columns
  for (let i=0; i< col.length; i++) {
    for (let j=0; j< matrix.length; j++) {
      matrix[j][col[i]] = 0;
    }
  }

  return true;
}

let matrix = [[1,1,0,1],
              [0,1,1,1],
              [1,1,1,1],
              [1,1,1,1]];

setZeros(matrix);
console.log(matrix);