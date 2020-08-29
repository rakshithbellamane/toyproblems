// class to represent a point
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setLocation(x, y) {
    this.x = x;
    this.y = y;
  }
}

// class to represent a line
// stores slope & y-intercept
class Line {
  slope;
  yIntercept;

  constructor(start, end) {
    let deltaX = end.x - start.x;
    let deltaY = end.y - start.y;

    // slope = (y2-y1)/(x2-x1);
    this.slope = deltaY/ deltaX;
    // y-intercept is the point where the line intercects with y axis.
    // y-intercept = y - slope*x
    this.yIntercept = end.y - this.slope * end.x;
  }
}

// this function swap x&y coordinates of given two points
const swap = (one, two) => {
  x = one.x;
  y = one.y;
  one.setLocation(two.x, two.y);
  two.setLocation(x,y);
}

// function to determine whether a given point (middle) is in between start and end
isBetween = (start, middle, end) => {
  let middleXInBetween = false;
  let middleYInBetween = false;

  if (start.x < end.x) {
    middleXInBetween = start.x <= middle.x && middle.x <= end.x;
  } else {
    middleXInBetween = start.x >= middle.x && middle.x >= end.x;
  }

  if (start.y < end.y) {
    middleYInBetween = start.y <= middle.y && middle.y <= end.y;
  } else {
    middleYInBetween = start.y >= middle.y && middle.y >= end.y;
  }

  return middleXInBetween && middleYInBetween;
}

const intersection = (start1, end1, start2, end2) => {
  // rearrange the points in order of x values, so that start is before end and point1 is before point2
  if (start1.x > end1.x) swap(start1, end1);
  if (start2.x > end2.x) swap(start2, end2);
  if (start1.x > start2.x) {
    swap(start1, start2);
    swap(end1, end2);
  }

  // get the lines for the two points
  let line1 = new Line(start1, end1);
  let line2 = new Line(start2, end2);

  // if the slope of two lines are equal that means they are parallel
  // two parallel lines intersect only if their y-intercepts are same and begining of line2 is in between the start and end of line1
  if (line1.slope === line2.slope) {
    if (line1.yIntercept === line2.yIntercept && isBetween(start1,start2,end1)) return start2;

    return null;
  }

  // get the intersection
  let x = (line2.yIntercept - line1.yIntercept) / (line1.slope - line2.slope);
  let y = x * line1.slope + line1.yIntercept;
  let intersection = new Point(x,y);

  // ensure that the intersection point is in between line1 & line2.
  if (isBetween(start1,intersection,end1) && isBetween(start2, intersection, end2)) return intersection;

  return null;
}

let start1 = new Point(1,2);
let end1 = new Point(7,7);
let start2 = new Point(3,7);
let end2 = new Point(7,3);

console.log(intersection(start1,end1,start2,end2));