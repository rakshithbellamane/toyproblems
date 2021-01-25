const find_permutation = function(str, pattern) {
  let winStart = 0;
  let matchedCnt = 0;
  
  let patternMap = getPatternMap(pattern);
  let map = Object.assign({},patternMap);

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    let char = str[winEnd];
    if (!map[char]) {
      if (typeof map[char] === 'undefined') {
        map = Object.assign({}, patternMap);
        winStart = winEnd + 1;
        matchedCnt = 0;
      } else {
        if (map[str[winStart]] === 0)
          matchedCnt--;
        map[str[winStart]]++;
        winStart++;
      }
      
      continue;
    }

    map[char]--;

    if (matchedCnt === pattern.length) return true;
  }
  return false;
};

const getPatternMap = function(pattern) {
  let patternMap = {};
  for(let i=0; i<pattern.length; i++){
    const char = pattern.charAt(i);
    let charLength = patternMap[char] || 0;
    charLength++;
    patternMap[char] = charLength;
  }
  return patternMap;
};

console.log(find_permutation('bcdxabcdy', 'bcdxabcdy'));