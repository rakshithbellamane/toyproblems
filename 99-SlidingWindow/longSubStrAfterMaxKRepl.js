const findMaxSubStr = (str, K) => {
  let maxLen = 0;
  let start = 0;

  for (let end=0; end < str.length; end++) {
    if (str[end] !== str[start]) {
      let index=end+K;

      while (index < str.length && str[index] === str[start]) {
        index++;
      }

      
      if (index >= str.length) {
        maxLen = Math.max(maxLen, str.length-start);
        break;
      } else {
        maxLen = Math.max(maxLen, index-start);
        start = end;
      }
    } else {
      maxLen = Math.max(maxLen, end-start+1);
    }
  }

  return maxLen;
}

let str = 'aaaa';
let K = 2;
console.log(`max substr after ${K} replacement is ${findMaxSubStr(str, K)}`);