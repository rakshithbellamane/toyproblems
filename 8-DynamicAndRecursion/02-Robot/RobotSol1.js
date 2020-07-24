const findPath = (maze, curRow, curCol, tarRow, tarCol, path) => {
  if (curRow < 0 || curCol < 0 || maze[curRow][curCol]) return false;

  if ((curRow === tarRow && curCol === tarCol) 
      || findPath(maze, curRow, curCol -1, tarRow, tarCol, path) 
      || findPath(maze, curRow -1 , curCol, tarRow, tarCol, path))
      {
        path[curRow][curCol] = 1;
        return true;
      }

  return false;
}

const maze = [[0,0,1,0,0,0],
              [0,0,0,0,0,0],
              [0,0,1,0,1,0],
              [0,0,0,1,0,0],
              [0,1,0,1,0,0],
              [0,0,1,0,0,0]];

const path = [[0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0]];

console.log(findPath(maze, 5, 5, 0, 0, path));

console.log(path);