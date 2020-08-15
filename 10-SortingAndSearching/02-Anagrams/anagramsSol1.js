const sortAnagrams = strList => {
  // create a map("bucket") to store the anagrams
  let map = {};
  // for each string in list, form a key by sorting the chars in the string
  for (let i=0; i<strList.length; i++) {
    let key = [...strList[i]].sort().join('');
    // if the key exists, then add the string which is an anagram of the key to the bucket
    if (map[key]) {
      map[key].push(strList[i]);
    } else {
    // if the key does not exist, then add a new bucket to store all the anagrams for the key
      map[key] = [];
      map[key].push(strList[i]);
    }
  }

  let sortedAnagrams = [];
  // loop through all the anagrams in the map and form an array which will contain the strings that are anagrams next to each other.
  for (key in map) {
    map[key].forEach(str => sortedAnagrams.push(str));
  }

  return sortedAnagrams;
}

let strList = ['abc','def','acb','efd','pqr'];

console.log(sortAnagrams(strList));