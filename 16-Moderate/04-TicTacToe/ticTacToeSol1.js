// this program currently does two things:
// 1. Given a size, it creates all the boards and stores them in a hash map
// 2. If the board is a winning board, stores the winner in the hash map.
// So, for solving a tic-tac-toe, given a board, we need to see if the board is a winning board and if yes, return the winner.

const isWinningBoard = (board, size) => {
  // check whether there is a winning row
  let totalSlots = size * size;

  let i=0,j=0;
  while (i<totalSlots) {
    let piece = board[i];
    if (piece !== '0') {
      j=i;
      while (j<(i+size)) {
        if (board[j] !== piece) break;
        j++;
      }
      if (j === (i+size)) {
        return piece;
      }
    }
    i += size;
  }

  // check whether there is a winning column

  i=0,j=0;
  while (i<size) {
    let piece = board[i];
    if (piece !== '0') {
      j=i;
      while (j<totalSlots) {
        if (board[j] !== piece) break;
        j += size;
      }
      if (j === totalSlots) {
        return piece;
      }
    }
    i++;
  }

  // check whether there is a winning diagonal (left to right)
  i=0,j=i;
  let piece = board[i];
  if (piece !== '0') {
    while (i<totalSlots) {
      if (board[i+j] !== piece) break;
      i += size;
      j++;
    }

    if (i >= totalSlots) return piece;
  }

  // check whether there is a winning diagonal (right to left)
  i=0,j=size-1;
  piece = board[i+j];
  if (piece !== '0') {
    while (i<totalSlots) {
      if (board[i+j] !== piece) break;
      i += size;
      j--;
    }

    if (i >= totalSlots) return piece;
  }

  return false;
}

const createBoards = size => {
  let boards = {};
  let totalSlots = size * size;

  // setup the initial board 
  board = '0'.repeat(totalSlots);
  boards[board] = false;
  for (let i=0; i<totalSlots; i++) {
    let newBoards = {};
    for (let j=0; j<3; j++) {
      for (board in boards) {
        if (boards[board] === false) {
          let newBoard = '';
          let result = false;
          newBoard = board.substring(0,i)+j+board.substring(i+1);
          result = isWinningBoard(newBoard, size);
          newBoards[newBoard] = result;
        }
      }
    }
    boards = Object.assign(boards,newBoards);
  }

  return boards;
}

let boards = createBoards(3);
for (let board in boards) {
  if (boards[board] !== false) console.log(`${board}:${boards[board]}`);
}
// console.log(boards);
console.log(Object.keys(boards).length);
// console.log(Math.pow(3,9));