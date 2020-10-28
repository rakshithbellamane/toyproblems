class SquareCell {
  zerosRight = 0;
  zerosBelow = 0;

  constructor(rightZeros, belowZeros) {
    this.zerosRight = rightZeros;
    this.zerosBelow = belowZeros;
  }
}

// function to determine if the square of size starting from (row,col) (top-left corner) is an all black side square
const isSquare = (processed, row, col, size) => {
  // to determine whether all the sides of the square are black we need to find cells in top-left, top-right, bottom-left corners
  let topLeft = processed[row][col];
  let topRight = processed[row][col+size-1];
  let bottomLeft = processed[row+size-1][col];

  // return false if count of blacks along the edges at those corners < size which means not all are black
  if (topLeft.zerosRight < size || topLeft.zerosBelow < size || topRight.zerosBelow < size || bottomLeft.zerosRight < size) return false;

  // return true if all are black
  return true;
}

// function to loop through all the squares with the given size
const findSquareWithSize = (processed, size) => {
  // total num of squares of given size = length - size + 1;
  let count = processed.length - size + 1;

  for (let r=0; r<count; r++) {
    for (let c=0; c<count; c++) {
      // check if the square starting of size starting from (r,c) is an all black side square
      if (isSquare(processed, r, c, size)) return {row: r, col: c, size};
    }
  }
}

// creates a matrix that stores for each black cell the number of black cells to the right and below including itself.
const processSquare = matrix => {
  // Initializing a 2D array by first initializing array that will store each row.
  let processed = new Array(matrix.length);

  // loop through each cell starting from the bottom right corner
  for (let r=matrix.length-1; r>=0; r--) {
    // initialize a row
    processed[r] = new Array(matrix.length);
    for (let c=matrix.length-1; c>=0; c--) {
      let rightZeros=0, belowZeros=0;

      // process a cell only if it is a black cell
      if (matrix[r][c] === 0) {
        // increment the right & below count for itself
        rightZeros++;
        belowZeros++;

        // if there is a col to the right, get the count of continuous right black cells from it
        if (c+1 < matrix.length) {
          let previous = processed[r][c+1];
          rightZeros += previous.zerosRight;
        }

        // if there is a rol to the right, get the count of continuous below black cells from it
        if (r+1 < matrix.length) {
          let previous = processed[r+1][c];
          belowZeros += previous.zerosBelow;
        }
      }

      processed[r][c] = new SquareCell(rightZeros, belowZeros);
    }
  }

  return processed;
}

const findSquare = matrix => {
  // the processed is a matrix of the same size as the given matrix that stores the following values for each black (0) cell in the matrix
  // zerosRight = num continuous black cells to the right including the current cell
  // zerosBelow = num continuous black cells down including the current cell
  let processed = processSquare(matrix);
  
  // we try to find whether are squares that have all the sides with black cells.
  // start with the biggest square size which is matrix.length
  for(let i=matrix.length; i>=1; i--) {
    let square = findSquareWithSize(processed, i);

    // if we do find a square we return it
    if (square) return square;
  }

  return null;
}

let matrix = [[1,0,1],
              [0,1,0],
              [0,0,1]];

console.log(findSquare(matrix));