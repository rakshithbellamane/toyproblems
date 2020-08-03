const placeQueens = (row, colums=[], results=[]) => {
  if (row === 8) {
    results.push(colums.join(''));
    return;
  }

  for (let col=0; col<8; col++) {
    if (validPos(colums, row, col)) {
      colums.push(col);
      placeQueens(row+1, colums, results);
      colums.pop();
    }
  }

  return results;
}

validPos = (colums, row, col) => {
  for (let i=0; i<row; i++) {
    let j = colums[i];

    if (j === col) return false;

    if (Math.abs(j - col) === (row - i)) return false;
  }

  return true;
}

console.log(placeQueens(0));