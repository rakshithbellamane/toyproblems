// map from 0 to 19
const ones = {0: '', 
              1: 'one',
              2: 'two',
              3: 'three',
              4: 'four',
              5: 'five',
              6: 'six',
              7: 'seven',
              8: 'eight',
              9: 'nine',
              10: 'ten', 
              11: 'eleven',
              12: 'twelve',
              13: 'thirteen',
              14: 'fourteen',
              15: 'fiveteen',
              16: 'sixteen',
              17: 'seventeen',
              18: 'eighteen',
              19: 'nineteen',
            };

// map for tens
const tens = {2: 'twenty', 
              3: 'thirty',
              4: 'forty',
              5: 'fifty',
              6: 'sixty',
              7: 'seventy',
              8: 'eighty',
              9: 'ninty',
            };

// map to store the suffix and the divisor for the corresponding part of the int
const data = {
  1: {suffix: '', div: 1},
  2: {suffix: 'thousand', div: 1000},
  3: {suffix: 'million', div: 1000000},
  4: {suffix: 'billion', div: 1000000000},
}

// since the same english words repeat for hunders, thousands, millions and billions
// create a generic function to generate english word for the the three digits
const getEnglishIntThreeDigits = int => {
  let str = int.toString();
  if (int === 0) return 'zero';
  if (int < 20) return ones[int];
  if (int >= 20 && int < 100) {
    let tenDigit = str[0];
    let oneDigit = str[1];
    return `${tens[tenDigit]} ${ones[oneDigit]}`
  }
  if (int >= 100) {
    let hundredDigit = str[0]
    let tenDigit = str[1];
    let oneDigit = str[2];
    return `${ones[hundredDigit]} hundred ${tens[tenDigit]} ${ones[oneDigit]}`
  }
}

const getEnglishInt = int => {
  let strInt = int.toString();
  let num = int;
  let englishInt = '';
  // find the number of parts in the integer
  let parts = Math.ceil(strInt.length/3);

  // if int is 0, just return zero
  if (int === 0) return getEnglishIntThreeDigits(0);

  // loop through each part
  while(parts > 0) {
    // get the suffix based on the part
    let numSuffix = data[parts].suffix;
    // get the three digits for the part using the divisor from the map
    let threeDigits = Math.trunc(num/data[parts].div);
    // generate the english word for the three digits and attach the suffix
    englishInt = englishInt + getEnglishIntThreeDigits(threeDigits) + ' ' + numSuffix + ' ';
    
    // update the num so that we now process the next set of parts
    num = num % data[parts].div;
    // update the part number to process the next part
    parts--;
  }

  return englishInt;
}

console.log(getEnglishInt(19));