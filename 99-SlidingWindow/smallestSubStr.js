const findSmallestSubStr = (str, pattern) => {
  let map = {};
  for (let i=0; i<pattern.length; i++) {
    if (!map[pattern[i]])
      map[pattern[i]] = 0;
    map[pattern[i]]++;
  }

  let start = 0;
  let matchCnt = 0;
  let smallestSubStr = '';
  let minLen = Number.MAX_VALUE;

  for(let end=0; end < str.length; end++) {
    let rightChar = str[end];

    if(rightChar in map) {
      map[rightChar]--;
      if (map[rightChar] === 0)
        matchCnt++;
    }

    while (matchCnt === pattern.length) {
      if (Math.min(minLen,end-start+1) < minLen) {
        minLen = end-start+1;
        smallestSubStr = str.substr(start, minLen);
      }

      let leftChar = str[start];

      if (leftChar in map) {
        if (map[leftChar] === 0) {
          matchCnt--;
        }
        map[leftChar]++;
      }
      start++;
    }
  }

  return smallestSubStr;
}

let str = 'aabdec';
let pattern = 'abc';
console.log(`smallest sub str ${findSmallestSubStr(str, pattern)}`);