const hasWon = (board, row, col) => {
  let piece = board[row][col];

  if (piece == 0) return null;

  // check if anyone has won in the row
  let rowComplete = true;
  for (let i=1; i<board[0].length; i++) {
    if (board[row][i] !== board[row][0]) rowComplete = false;
  }

  if (rowComplete) return board[row][col];

  // check if anyone has won in the col
  let colComplete = true;
  for (let i=1; i<board.length; i++) {
    if (board[i][col] !== board[0][col]) colComplete = false;
  }

  if (colComplete) return board[row][col];

  // check diagonal scenarios
  // if row = col, then traverse left to right
  if (row === col) {
    let diagComplete = true;
    let i=1,j=1;
    while (i <board.length && j<board.length) {
      if (board[i][j] !== board[0][0]) {
        diagComplete = false;
        break;
      }
      i++;
      j++;
    }

    if (diagComplete) return board[row][col];
  }

  // check diagonal scenarios
  // traverse right to left if col = board.length - row - 1
  if (col === board.length - row - 1) {
    let diagComplete = true;
    let i=1, j=board.length - 2;
    while (i < board.length && j>0) {
      if (board[i][j] !== board[0][board.length-1]) {
        diagComplete = false;
        break;
      }
      i++;
      j--;
    }

    if (diagComplete) return board[row][col];
  }

  return null;
}

// const board = [[0,0,0,0],
//                [0,0,0,0],
//                [0,0,0,0],
//                [0,0,0,0]];

const board = [[1,2,2,2],
              [1,0,2,1],
              [1,2,2,1],
              [2,1,2,1]];


console.log(hasWon(board,1,2));