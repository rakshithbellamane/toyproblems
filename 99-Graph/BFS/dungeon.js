const findPath = (dungeon, start, end) => {
  let pathCnt = 1;
  let vectors = [[-1,0], [1,0], [0,-1], [0,1]];
  let queue = [start];
  let nextQueue = [];
  let maxX = dungeon.length-1;
  let maxY = dungeon[0].length-1;

  while (queue.length) {
    let {x, y} = queue.pop();

    if (x === end.x && y === end.y) return pathCnt;
    
    for (let i=0; i<vectors.length; i++) {
      let newX = x + vectors[i][0];
      let newY = y + vectors[i][1];

      if (newX >= 0 && newX <= maxX && newY >= 0 && newY <= maxY && !dungeon[newX][newY]) {
        dungeon[newX][newY] = 1;
        nextQueue.push({x: newX, y: newY});
      }
    }

    if (!queue.length && nextQueue.length) {
      pathCnt++;
      queue = [...nextQueue];
      nextQueue = [];
    }
  }

  return pathCnt;
}

let dungeon = [[0,0,0,1,0,0,0],
               [0,1,0,0,0,1,0],
                [0,1,0,0,0,0,0],
                [0,0,1,1,0,0,0],
                [1,0,1,0,0,1,0]];

let start = {x: 0, y: 0};
let end = {x: 4, y: 3};
dungeon.forEach(row => console.log(row.join('')));
console.log(findPath(dungeon, start, end))
dungeon.forEach(row => console.log(row.join('')));