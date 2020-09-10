const findPonds = plot => {
  let ponds = [];
  let visited = {};

  // loop through each cell in the plot
  for (let i=0; i<plot.length; i++) {
    for (let j=0; j<plot[0].length; j++) {
      // get the water size for the cell
        let size = getPondSize(i, j, plot, visited);
        if (size > 0) ponds.push(size);
    }
  }

  return ponds;
}

const getPondSize = (row, col, plot, visited) => {
  // start the size as 1
  let size = 1;
  let maxRow = plot.length;
  let maxCol = plot[0].length;

  // return 0, if the cell is outside the plot's boundary OR there is no water OR it has already been visted
  if (!isWithinBoundary(row, col, maxRow, maxCol) || !isThereWater(row, col, plot, visited)) return 0;

  // mark the cell as visited
  if (visited[row]) visited[row].push(col);
  else visited[row] = [col];

  // loop through all the surrounding cells and recursively get the pond sizes.
  for (let i=row-1; i<=row+1; i++) {
    for (let j=col-1; j<=col+1; j++) {
      size += getPondSize(i, j, plot, visited);
    }
  }

  return size;
}

const isWithinBoundary = (row, col, maxRow, maxCol) => {
  return (row >= 0 && row < maxRow && col >= 0 && col < maxCol);
}

const isThereWater = (row, col, plot, visited) => {
  // return true that there is water if
  // the cell has water AND it wasn't visited before
  return (plot[row][col] === 0 && (visited[row] ? !visited[row].includes(col) : true));
}

const pond = [[0,2,1,0],
              [0,1,0,1],
              [1,1,0,1],
              [0,1,0,1]];

console.log(findPonds(pond));