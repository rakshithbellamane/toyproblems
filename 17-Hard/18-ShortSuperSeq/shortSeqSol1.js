const findShortSeq = (small, big) => {
  let bestStart = -1,bestEnd = -1;
  let bestDiff = bestEnd - bestStart;
  for (let i=0; i<big.length; i++) {
    // if ele in i is in small, find the index in big of the smallest subarr that has all the eles in small
    if (small.includes(big[i])) {
      let end = findClosure(small,big,i);
      // if we found a subarr will all the eles in small
      if (end !== -1) {
        // update the bestStart and bestEnd if the length of the subarr is smaller than the best
        if (bestDiff > 0 && (end - i) < bestDiff) {
          bestStart = i;
          bestEnd = end;
          bestDiff = bestEnd - bestStart;
        // if there is no best subarr, then set it
        } else if (bestDiff <= 0) {
          bestStart = i;
          bestEnd = end;
          bestDiff = bestEnd - bestStart;
        }
      }
    }
  }

  return {bestStart, bestEnd};
}

const findClosure = (small, big, start) => {
  // loop through each ele in small starting from pos i and return the max
  let posList = [];
  for (let i=0; i<small.length; i++) {
    let pos = big.indexOf(small[i], start);
    if ( pos !== -1) posList.push(pos);
    else return -1;
  }

  return Math.max(...posList);
}

const small = [1,5,9];
const big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7];
console.log(findShortSeq(small,big));