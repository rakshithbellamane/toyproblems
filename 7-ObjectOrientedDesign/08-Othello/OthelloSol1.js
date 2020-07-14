const direction = {
  UP: 'up',
  DOWN: 'down',
  RIGHT: 'right',
  LEFT: 'left',
}

class Game {

}

class Board {
  board = [];
  blackCount = 0;
  whiteCount = 0;
  numRow;
  numCol;

  constructor (inputNumRow, inputNumCol) {
    this.numRow = inputNumRow;
    this.numCol = inputNumCol;
  }

  initializeBoard () {
    let middleRow = this.numRow/2;
    let middleCol = this.numCol/2;

    this.board = new Array(this.numRow);
    for (let i=0; i<this.numRow; i++) {
      this.board[i] = new Array(this.numCol);
    }

    this.board[middleRow][middleCol] = new Piece(Piece.colorTypes.BLACK);
    this.board[middleRow - 1][middleCol - 1] = new Piece(Piece.colorTypes.BLACK);
    this.board[middleRow - 1][middleCol] = new Piece(Piece.colorTypes.WHITE);
    this.board[middleRow][middleCol - 1] = new Piece(Piece.colorTypes.WHITE);
  }

  placeColor (row, col, color) {
    let results = [];
    let flipped = 0;

    results[0] = this.flipSection(row, col - 1, piece.color, direction.LEFT);
    results[1] = this.flipSection(row, col + 1, piece.color, direction.RIGHT);
    results[2] = this.flipSection(row - 1, col, piece.color, direction.UP);
    results[3] = this.flipSection(row + 1, col - 1, piece.color, direction.DOWN);

    flipped = results.reduce((count, val) => count + val);

    if (flipped > 0) {
      this.board[row][col] = new Piece(color);
      this.updateScore(color, flipped+1);
    }
  }

  flipSection (row, col, color, dir) {
    let rowOffset = 0;
    let colOffset = 0;

    if (dir === direction.UP) rowOffset = -1;
    if (dir === direction.DOWN) rowOffset = 1;
    if (dir === direction.LEFT) colOffset = -1;
    if (dir === direction.RIGHT) colOffset = 1;

    if (row > this.numRow || row < 0 || col > this.numCol || col < 0 || !this.board[row][col]) return -1;

    if (this.board[row][col].color === color) return 0;

    let flipped = this.flipSection(row+rowOffset, col+colOffset, color, dir);

    if (flipped < 0) return -1;

    if (this.board[row][col].color !== color) {
      this.board[row][col].flipColor();
      flipped++;
    }

    return flipped;
  }

  updateScore (color, count) {
    if (color === Piece.colorTypes.WHITE) this.whiteCount += count;
    if (color === Piece.colorTypes.BLACK) this.blackCount += count;
  }
}

class Piece {
  static colorTypes = {
    BLACK: 'black',
    WHITE: 'white',
  };

  color;

  constructor (inputColorType) {
    this.color = inputColorType;
  }

  flipColor () {
    if (this.color === Piece.colorTypes.BLACK) this.color = Piece.colorTypes.WHITE;
    if (this.color === Piece.colorTypes.WHITE) this.color = Piece.colorTypes.BLACK;
  }
}