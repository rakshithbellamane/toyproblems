const find_permutation = function(str, pattern) {
  let start = 0;
  let anagrams = [];
  let count = 0;

  
  let map = getPatternMap(pattern);

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    let char = str[winEnd];

    if (char in map) {
      map[char]--;
      if (map[char] === 0)
        count++;
    }

    if (count === Object.keys(map).length) {
      anagrams.push(start);
    }

    if (winEnd >= pattern.length-1) {
      if (map[str[start]] === 0)
        count--;
      map[str[start]]++;
      start++;
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

console.log(find_permutation('ppqp', 'pq'));