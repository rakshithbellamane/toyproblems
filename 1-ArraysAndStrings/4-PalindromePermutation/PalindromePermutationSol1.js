/* this uses a my custom hashtable datastructure */

const HashTable = require('../../DataStructures/HashTable');

const buildCharFrequencyTable = phrase => {
  let table = new HashTable();

  for(let i=0; i<phrase.length; i++) {
    let item = table.get(phrase.charCodeAt(i));

    if (item) {
      table.set(phrase.charCodeAt(i), item[phrase.charCodeAt(i)]+1);
    } else {
      table.set(phrase.charCodeAt(i), 1);
    }
  }

  return table;
}

const checkMaxOneOdd = table => {
  let foundOdd = false;
  let maxOneOdd = true;
  table.forEach(item => {
    console.log(item);
    if (item[Object.keys(item)[0]] % 2 === 1) {
      if (foundOdd) maxOneOdd = false;
      foundOdd = true;
    }
  });
  
  return maxOneOdd;
}

const isPermutationOfPalindrome = phrase => {
  let table = buildCharFrequencyTable(phrase);

  return checkMaxOneOdd(table);
}

console.log(isPermutationOfPalindrome('abc  bacc$'));