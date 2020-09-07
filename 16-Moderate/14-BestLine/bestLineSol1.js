const findBestLine = points => {
  // get a list of all lines (slope & y-intercept) from each point to the other point
  let linesBySlope = getListOfLines(points);

  // return the line that appears the most number of times
  return getBestLine(linesBySlope);
}

const getListOfLines = points => {
  let linesBySlope = {};

  // generate lines from each point to every other point
  for (let i=0; i<points.length; i++) {
    for (let j=i+1; j<points.length; j++) {
      let line = getLine(points[i],points[j]);
      // see if there is already a equivalent line (i.e. same line)
      let equiLine = findEquiLine(line, linesBySlope);
      
      // if there is an equivalent line, then increment the count for that line
      if (equiLine) {
        linesBySlope[equiLine.slope].count++;
      } else {
      // if there is NO equivalent line, then add the new line with count of samelines as 1
        linesBySlope[line.slope] = {line,count:1};
      }
    }
  }

  return linesBySlope;
}

// find the line that passes through the most number of points or has the max count
const getBestLine = linesBySlope => {
  let bestLine = null;
  // since every line has a count of 1, we will start with that
  let bestCount = 1;

  for (let slope in linesBySlope) {
    // if we find a line that pass through more points then set that as the best line
    if (linesBySlope[slope].count > bestCount) {
      bestLine = linesBySlope[slope];
      bestCount = linesBySlope[slope].count;
    }
  }

  return bestLine;
}

const getLine = (p, q) => {
  let slope,intercept,infiniteSlope = false;
  // if both p & q points are NOT (almost. i.e. variance is > epsilon) vertical, then assign slope and intercept
  if (Math.abs(p.x - q.x) > Number.EPSILON) {
    // slope = (y1-y2)/(x1-x2)
    slope = (p.y - q.y)/(p.x - q.x);
    // intercept = y - mx; (or y = mx+b)
    intercept = p.y - slope * p.x;
  } else {
  // both p & q points are (almost) vertical. Hence set infiniteSlop = true and intercept is where it cuts x
    slope = Infinity;
    infiniteSlope = true;
    intercept = p.x;
  }

  // the line with slope, intercept and infiniteSlope indicator
  return {slope,intercept,infiniteSlope};
}

const findEquiLine = (newline, linesBySlope) => {
  // loop through the lines and return the line whose slope 
  for(let slope in linesBySlope) {
    let curLine = linesBySlope[slope].line;
    // find the absolute slope and intercept difference between the two lines
    let absSlopeDiff = Math.abs(curLine.slope - newline.slope);
    let absInterceptDiff = Math.abs(curLine.intercept - newline.intercept);

    // slopes are same if
      // the absolute slope diff is almost same OR
      // the absolute slope diff is 0 => both slopes are exactly same OR
      // both the slopes are Infinity
    let sameSlope = ((absSlopeDiff < Number.EPSILON) || (absSlopeDiff === 0) || (curLine.slope === Infinity && newline.slope === Infinity));
    let sameIntercept = (absInterceptDiff < Number.EPSILON) || (absInterceptDiff === 0);
    let sameInfiniteSlopeIndicator = curLine.infiniteSlope === newline.infiniteSlope;

    // if the slopes are same, then return the curLine as the equivalent line
    if (sameSlope && sameIntercept && sameInfiniteSlopeIndicator) return curLine;
  }

  return null;
}

let points = [
  {x:2,y:2},
  {x:6,y:7},
  {x:4,y:-4},
  {x:6,y:-10},
  {x:-2,y:-2},
  {x:-4,y:-4},
  {x:-6,y:6},
];

console.log(findBestLine(points));