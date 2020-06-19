// nullifies the given row
const nullifyRow = (matrix, row) => {
  for (let i=0; i<matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
}

//nullifies the given column
const nullifyCol = (matrix, col) => {
  for (let i=0; i< matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

const setZeros = matrix => {
  let rowHasZeros = false;
  let colHasZeros = false;

  // traverse the first row to determine if it has any zeros

  for (let i=0; i< matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      rowHasZeros = true;
      break;
    }
  }

  // traverse the firs column to determine if it has any zeros

  for (let i=0; i< matrix.length; i++) {
    if (matrix[i][0] === 0) {
      colHasZeros = true;
      break;
    }
  }

  // traverse the rest of the matrix and update the first row and column

  for (let i=1; i< matrix.length; i++) {
    for (let j=1; j< matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // traverse the first column and nullify the rows

  for (let i=1; i< matrix.length; i++) {
    if (matrix[i][0] === 0) {
      nullifyRow(matrix, i);
    }
  }

  // traverse the first row and nullify the columns

  for (let i=1; i< matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      nullifyCol(matrix, i);
    }
  }

  // nullify the first row if it had any zeros
  if (rowHasZeros) nullifyRow(matrix, 0);

  // nullify the first column if it had any zeros
  if (colHasZeros) nullifyCol(matrix, 0);

  return true;
}

let matrix = [[1,1,0,1],
              [0,1,1,1],
              [1,1,1,1],
              [1,1,1,1]];

setZeros(matrix);
console.log(matrix);