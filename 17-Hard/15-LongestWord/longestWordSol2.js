const printLongestWord = arr => {
  // create a map of all the given words
  let map = {};
  arr.forEach(str => map[str] = true);

  // sort the arr by length
  sortArr = arr.sort((a, b) => b.length - a.length);

  // loop through each word in sorted arr and see if it is the longest word made up of other words
  for (let i=0; i< sortArr.length; i++) {
    if (canBuildWord(sortArr[i], true, map)) {
      console.log(sortArr[i]);
      return sortArr[i];
    }
  }

  return null;
}

const canBuildWord = (str, isOriginalWord, map) => {
  // we are using memoization here. If we find a subWord in the map, then we reuse the result  
  if (Object.keys(map).includes(str) && !isOriginalWord) return map[str];

  // loop through each substring in the str. 
  // Divide it into left and right parts. Check if left exists in map and recursively check if right exists in map
  for (let i=1; i<str.length; i++) {
    let left = str.substring(0, i);
    let right = str.substring(i);

    if (map[left] && canBuildWord(right, false, map)) return true;
  }

  // if we reached here that means that the str was not longest word. 
  // So update the map to false so that we don't process it again
  map[str] = false;
  return false;
}

let arr = ['a','b','c','ab','acba','abc','adbcae'];
printLongestWord(arr);