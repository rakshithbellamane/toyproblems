// the map stores the frequencies of all the words so that on subsequent runs,
// we can find the frequency in O(1)
let wordMap = {};

const findFrequency = (inputWord, book) => {
  // convert the input into lowercase
  let lowerCaseInput = inputWord.toLowerCase();

  // if the map already has entries that means that this is NOT the first run
  // and we can directly get the frequency of a word
  if (Object.keys(wordMap).length > 0) {
    if (wordMap[lowerCaseInput]) return wordMap[lowerCaseInput];
    else return 0;
  }
  
  // if the map doesn't have entires, then build the map
  book.forEach(word => { 
    // store the frequencies for the lowercase of the words
    let lowerCaseWord = word.toLowerCase();
      if (wordMap[lowerCaseWord]) wordMap[lowerCaseWord]++;
      else wordMap[lowerCaseWord] = 1;
  });

  // return the frequency if it exists in the map
  return wordMap[lowerCaseInput] ? wordMap[lowerCaseInput] : 0;
}

let book = ['rak','abd','abd','ABC','RAK','abC','DDD','Rak'];

console.log(findFrequency('RAK',book));
console.log(findFrequency('abd',book));
console.log(findFrequency('ccc',book));
console.log(findFrequency('RAK',book));
console.log(findFrequency('ddD',book));