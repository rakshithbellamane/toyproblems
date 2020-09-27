const findBestSplit = (dictionary, sentence) => {
  let memo = [];
  let result = split(dictionary, sentence, 0, memo);

  return result === null ? null : result;
}

// recursive function to split the sentence with least num of invalid chars
const split = (dictionary, sentence, start, memo) => {
  // base case: we have reached the end of the sentence
  if (start >= sentence.length) return {invalid: 0, parsed: ''};

  // if there is already a result for the start, then return that
  if (memo[start]) return memo[start];

  let bestInvalid = Number.MAX_VALUE, bestParsing = '', partial = '', index = start;

  // loop through each char from the start
  while (index < sentence.length) {
    let c = sentence[index];
    // form the partial word
    partial += c;

    // if the word exists, then we don't have any invalid chars. Otherwise, invalid chars is = length of the partial word
    let invalid = dictionary[partial] ? 0 : partial.length;

    // if the current invalid is < the bestInvalid, then continue to split the sentence
    if (invalid < bestInvalid) {
      let result = split(dictionary, sentence, index+1, memo);
      // if the num of invalid from the split < bestInvalid so far, update the bestInvalid and bestParsing
      if (invalid+result.invalid < bestInvalid) {
        bestInvalid = invalid + result.invalid;
        bestParsing = partial + ' ' + result.parsed;

        // if the invalid chars is zero, then we cannot do better. So just break
        if (bestInvalid === 0) break;
      }
    }
    index++;
  }

  // update the memo with the bestInvalid & bestParsing for the start
  memo[start] = {invalid: bestInvalid, parsed: bestParsing};

  // return the result
  return memo[start];
}

const sentence = 'thisismikesfavoritefood';
const dictionary = {'this':true,'mike':true,'mikes':true,'favor':true,'favorite':true,'food':true};

console.log(findBestSplit(dictionary, sentence));