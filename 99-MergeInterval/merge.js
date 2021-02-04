class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  } 
}

const merge = intervals => {
  let sortedIntervals = intervals.sort((a,b) => a.start-b.start);
  let mergedIntervals = [];

  let interval = sortedIntervals[0];

  for (let i=1; i<sortedIntervals.length; i++) {
    let curInterval = sortedIntervals[i];

    if (curInterval.start <= interval.end) {
      interval.end = Math.max(interval.end, curInterval.end);
    } else {
      mergedIntervals.push(interval);
      interval = curInterval;
    }
  }

  mergedIntervals.push(interval);

  return mergedIntervals;
}
let intervals = [new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)];
let mergedIntervals = merge(intervals);
console.log(mergedIntervals);