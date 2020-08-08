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

const getMaxHeight = boxList => {
  let maxHeight = 0;
  let boxMap = {};

  for (let i=0; i<boxList.length; i++) {
    let height = stackBoxes(boxList, i, boxMap);
    maxHeight = Math.max(height, maxHeight);
  }

  return maxHeight;
}

const stackBoxes = (boxList, index, boxMaxHeight={}) => {
  if (index < boxList.length && boxMaxHeight[index]) return boxMaxHeight[index];

  let curBox = boxList[index];
  let maxHeight = 0;

  for (let i=index+1; i<boxList.length; i++) {
    let nextBox = boxList[i];
    if (isNextBoxSmaller(curBox, nextBox)) {
        let height = stackBoxes(boxList, i, boxMaxHeight);
        maxHeight = Math.max(height, maxHeight);
    }
  }

  maxHeight += curBox.height;
  boxMaxHeight[index] = maxHeight;

  return maxHeight;
}

const isNextBoxSmaller = (curBox, nextBox) => {
  if (curBox.width >= nextBox.width && curBox.height >= nextBox.height && curBox.depth >= nextBox.depth) return true;
  else return false;
}

boxList.sort((box1, box2) => box2.width - box1.width);
console.log(boxList);
console.log(getMaxHeight(boxList));


