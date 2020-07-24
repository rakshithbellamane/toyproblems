let count = 0;
const findPath = (maze, curRow, curCol, tarRow, tarCol, path) => {
  count++;
  if (curRow < 0 || curCol < 0 || maze[curRow][curCol]) return false;

  if (failedPath[curRow][curCol]) return false;

  if ((curRow === tarRow && curCol === tarCol) 
      || findPath(maze, curRow, curCol -1, tarRow, tarCol, path) 
      || findPath(maze, curRow -1 , curCol, tarRow, tarCol, path))
      {
        path[curRow][curCol] = 1;
        return true;
      }
  
  failedPath[curCol][curRow] = 1;

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

const failedPath = [[0,0,0,0,0,0],
                    [0,0,0,0,0,0],
                    [0,0,0,0,0,0],
                    [0,0,0,0,0,0],
                    [0,0,0,0,0,0],
                    [0,0,0,0,0,0]];

findPath(maze, 5, 5, 0, 0, path);

console.log(path);
console.log(count);