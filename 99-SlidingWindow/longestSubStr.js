const findLongSubStr = str => {
  let maxLen = 0;
  let map = {};
  let start = 0;

  for (let end=0; end<str.length; end++) {
    if (typeof map[str[end]] === undefined)
      map[str[end]] = end;
    else {
      while (start <= map[str[end]]) {
        delete map[start];
        start++;
      }
      map[str[end]] = end;
    }

    maxLen = Math.max(maxLen, end-start+1);
  }

  return maxLen;
}

let str = 'abccde';
console.log(`findLongSubStr ${findLongSubStr(str)}`);