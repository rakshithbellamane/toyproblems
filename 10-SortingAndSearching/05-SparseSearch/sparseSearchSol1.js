const sparseSearch = (list, str, start=0, end=list.length) => {
  let mid = Math.trunc((start+end)/2);
  if (list[mid] === str) return mid;

  if (list[mid] === '') mid = findNonEmpty(list, mid, start, end);

  // if str comes before mid, search left
  if (list[mid].localeCompare(str) > 0) {
    return sparseSearch(list, str, start, mid-1)
  // if str comes after mid, search right
  } else if (list[mid].localeCompare(str) < 0) {
    return sparseSearch(list, str, mid+1, end);
  // mid = str
  } else {
    return mid;
  }
}

// find a non empty string either on the left or right
const findNonEmpty = (list, mid, start, end) => {
  let left = mid-1;
  let right = mid+1;
  while (left >= start && right <=end) {
    if (list[left] !== '') return left;
    if (list[right] !== '') return right;
    left--;
    right++;
  }
}

let list = ['at','','','','ball','','','car','','','dad','',''];
console.log(sparseSearch(list,'at'));