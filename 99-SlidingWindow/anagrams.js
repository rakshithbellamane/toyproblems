const find_permutation = function(str, pattern) {
  let winStart = 0;
  let anagrams = [];
  
  let patternMap = getPatternMap(pattern);
  let map = Object.assign({},patternMap);

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    let char = str[winEnd];
    if (!map[char]) {
      if (typeof map[char] === 'undefined') {
        map = Object.assign({}, patternMap);
        winStart = winEnd + 1;
      } else {
        map[str[winStart]]++;
        winStart++;
      }
      
      continue;
    }

    map[char]--;

    if (winEnd-winStart+1 === pattern.length) {
      anagrams.push(winStart);
      map[str[winStart]]++;
      winStart++;
    }
  }

  return anagrams;
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

console.log(find_permutation('abbcabc', 'abc'));