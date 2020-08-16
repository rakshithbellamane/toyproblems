// data structure similar to array which return the element at index i, but return -1 if not found.
class Listy {
  elements = [];

  add (ele) {
    this.elements.push(ele);
  }

  elementAt (i) {
    if (i >= this.elements.length) return -1;
    else return this.elements[i];
  }
}

// the search without lenght involves:
//  - find the length
//  - run binarySearch
const search = (list, num) => {
  // find the length
  let len = 2;
  while (list.elementAt(len) !== -1) {
    len *= 2;
  }

  // run binary search where end = len calculated earlier
  let result = binarySearch(list, num, 0, len);
  
  return result;
}

const binarySearch = (list, num, start, end) => {
  let mid = Math.trunc((start+end)/2);
  let midEle = list.elementAt(mid);

  // return mid if midEle = num to be searched
  if (num === midEle) return mid;

  // if mid != num & mid is not out of range
  if (midEle !== -1) {
    // run binary search on left side
    if (num < midEle) return binarySearch(list, num, start, mid-1);
    // run binary search on left side
    else return binarySearch(list, num, mid+1, end);
  // mid is out of range, so binary search on left side
  } else {
    return binarySearch(list, num, start, mid-1);
  }
}

let list = new Listy();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(5);
list.add(6);

console.log(search(list, 1));

