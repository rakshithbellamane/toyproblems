// class to represent the ant
class Ant {
  // initial position is (0,0). i.e top left corner
  position = new Position(0,0);
  // initial orientation is right
  orientation = new Orientation(Orientation.right);

  // function to turn the ant whether clockwise or anticlockwise
  turn (clockwise) {
    this.orientation.dir = this.orientation.getTurn(this.orientation.dir, clockwise);
  }

  // moves the ant in the grid. It updates the position of the an based on the direction it is supposed to move
  move (grid) {
    if (this.orientation.dir === Orientation.left) {
      this.position.col--;
    } else if (this.orientation.dir === Orientation.right) {
      this.position.col++;
    } else if (this.orientation.dir === Orientation.up) {
      this.position.row--;
    } else if (this.orientation.dir === Orientation.down) {
      this.position.row++;
    }

    // updates the grid based on the cell the ant has landed
    let positionHash = (this.position.row * 31) ^ this.position.col;
    if ((this.position.row + this.position.col) % 2 === 0) grid[positionHash] = 'W' 
    else grid[positionHash] = 'B';
  }
}


// Class to represent the orientation of the ant
class Orientation {
  // static variable to hold the directions.
  static left = 'left';
  static right = 'right';
  static up = 'up';
  static down = 'down';

  // variable to hold the current orientation
  dir;

  constructor (initDir) {
    this.dir = initDir;
  }

  // this function returns the direction in which the ant would be pointing by turning clockwise or anti-clockwise based on the current direction
  getTurn (orientation, clockwise) {
    if (orientation === Orientation.left) return clockwise ? Orientation.up : Orientation.down;
    if (orientation === Orientation.up) return clockwise ? Orientation.right : Orientation.left;
    if (orientation === Orientation.down) return clockwise ? Orientation.left : Orientation.right;
    if (orientation === Orientation.right) return clockwise ? Orientation.down : Orientation.up;
  }
}

// class to hold the position which is row & col
class Position {
  row;
  col;

  constructor (row, col) {
    this.row = row;
    this.col = col;
  }
}

// class to represent the board
class Board {
  // variable to represent the current gride
  grid = {};
  ant = new Ant();
  // variables to hold the top left and bottom right corners which would give the size of the grid
  topLeftCorner = new Position(0,0);
  bottomRightCorner = new Position(0,0);

  // starts with a grid of 1 cell (0,0) which is white.
  constructor () {
    this.grid[this.topLeftCorner] = 'W';
  }
  
  // function to do all the steps involved in one move of the ant
  move () {
    let row = this.ant.position.row;
    let col = this.ant.position.col;

    // turn the ant.
    // if the current cell is white, then turn clockwise. Else anti-clockwise.
    this.ant.turn(this.isWhite(row, col));
    // flip the color the current cell
    this.flip(row, col);
    // move the ant one step
    this.ant.move(this.grid);
    // update the size of the grid so that it fits the ants position
    this.ensureFit(this.ant.position);
  }

  // function to flip the cell color
  flip (row, col) {
    // hash to store the row & col.
    let positionHash = (row * 31) ^ col;

    if (this.grid[positionHash] === 'W') this.grid[positionHash] = 'B';
    else this.grid[positionHash] = 'W';
  }

  // function to determine whether a cell is white.
  // It also adds the cell+color based on the row & col if the cell is not already in the grid.
  isWhite (row, col) {
    let positionHash = (row * 31) ^ col;

    if (this.grid[positionHash] === 'W') {
      return true;
    } else if (this.grid[positionHash] === 'B') {
      return false;
    } else if ((row + col) % 2 === 0) {
      this.grid[positionHash] = 'W';
      return true;
    } else {
      this.grid[positionHash] = 'B';
      return false;
    }
  }

  // function to update the grid size based on the current position of the ant
  ensureFit (position) {
    let row = position.row;
    let col = position.col;

    this.topLeftCorner.row = Math.min(this.topLeftCorner.row, row);
    this.topLeftCorner.col = Math.min(this.topLeftCorner.col, col);

    this.bottomRightCorner.row = Math.max(this.bottomRightCorner.row, row);
    this.bottomRightCorner.col = Math.max(this.bottomRightCorner.col, col);
  }

  // function to print the board
  toString () {
    let brd = [];

    let rowMin = this.topLeftCorner.row;
    let rowMax = this.bottomRightCorner.row;
    let colMin = this.topLeftCorner.col;
    let colMax = this.bottomRightCorner.col;

    for (let i=rowMin; i<= rowMax; i++) {
      for (let j=colMin; j<=colMax; j++) {
        if (this.isWhite(i, j)) {
          brd.push('W');
        } else {
          brd.push('B');
        }
      }
      brd.push('\n');
    }

    return brd.toString();
  }
}

let myBoard = new Board();
// move the ant 20 times
for (let i=0; i<20; i++) {
  myBoard.move();
}
console.log(myBoard.toString());