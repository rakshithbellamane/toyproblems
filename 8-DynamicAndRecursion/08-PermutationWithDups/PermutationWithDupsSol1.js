// build a hash table giving the count of each chars in the string
const buildStrHash = str => {
  let hash = {};

  for (i=0; i<str.length; i++) {
    let char = str[i];
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }

  return hash;
}

// follow the prefix approach only this time use hash as the string representation so that we don't process dups
const getPerms = (prefix, hash, remaining, result=[]) => {
  if (remaining === 0) return result.push(prefix);

  for (let char in hash) {
    if (hash[char] > 0) {
      hash[char]--;
      getPerms(prefix+char, hash, remaining-1, result);
      hash[char]++;
    }
  }

  return result;
}

let str = 'abcb'
let strHash = buildStrHash(str);
console.log(getPerms('', strHash, str.length));