let boxList = [{width: 10, height: 5, depth: 3},
  {width: 12, height: 9, depth: 13},
  {width: 10, height: 8, depth: 23},
  {width: 20, height: 18, depth: 15},
  {width: 2, height: 20, depth: 15},
  {width: 5, height: 11, depth: 8},
  {width: 15, height: 6, depth: 5},
  {width: 21, height: 10, depth: 7},
  {width: 17, height: 4, depth: 14},
  {width: 8, height: 7, depth: 17},
  {width: 3, height: 13, depth: 4}];


const stackBoxes = (boxList, bottom, index, boxMaxHeight={}) => {
  if (index >= boxList.length) return 0;

    let newBottom = boxList[index];
    let heightWithBottom = 0;
    
    if (bottom === null || isNextBoxSmaller(bottom, newBottom)) {
      if (!boxMaxHeight[index]) {
        boxMaxHeight[index] = stackBoxes(boxList, newBottom, index+1, boxMaxHeight);
        boxMaxHeight[index] += newBottom.height;
      }
      heightWithBottom = boxMaxHeight[index];
    }

    let heightWithoutBottom = stackBoxes(boxList, bottom, index+1, boxMaxHeight);

    return Math.max(heightWithBottom, heightWithoutBottom);
}

const isNextBoxSmaller = (curBox, nextBox) => {
  if (curBox.width >= nextBox.width && curBox.height >= nextBox.height && curBox.depth >= nextBox.depth) return true;
  else return false;
}

boxList.sort((box1, box2) => box2.width - box1.width);
console.log(boxList);
console.log(stackBoxes(boxList, null, 0));


