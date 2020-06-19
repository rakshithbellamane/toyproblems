/* this uses a my custom hashtable datastructure */

const HashTable = require('../../DataStructures/HashTable');

const isPermutationOfPalindrome = phrase => {
  let table = new HashTable();
  let oddCount = 0;

  for(let i=0; i<phrase.length; i++) {
    let item = table.get(phrase.charCodeAt(i));

    if (item) {
      let value = item[Object.keys(item)[0]];

      (value+1) % 2 === 0 ? oddCount-- : oddCount++;

      table.set(phrase.charCodeAt(i), value+1);
    } else {
      table.set(phrase.charCodeAt(i), 1);
      oddCount++;
    }
  }

  return !(oddCount > 1);
}

console.log(isPermutationOfPalindrome('abc   bacc$'));