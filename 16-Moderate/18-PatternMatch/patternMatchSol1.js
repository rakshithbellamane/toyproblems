// brute force method
const patternMatch = (pattern, value) => {
  // get all the substrings
  let substrs = getAllSubStrs(value);

  // for each combination of substrings for a & b, check if there is a pattern match to the given value
  for (let i=0; i<substrs.length; i++) {
    for (let j=i+1; j<substrs.length; j++) {
      // put it into an object for easy lookup in checkPatternMatch function
      let substrObj = {'a': substrs[i], 'b': substrs[j]};

      console.log(`main: ${substrObj.a} alt: ${substrObj.b}`)
    
      let matchesPattern = checkPatternMatch(substrObj, pattern, value);

      if (matchesPattern) return true;
    }
  }

  return false;
}

const checkPatternMatch = (substrObj, pattern, value) => {
  let str = '';

  // form the string by replacing a & b in the pattern with the passed in sub-strings.
  for (let i=0; i<pattern.length; i++) {
    str += substrObj[pattern[i]];
  }

  // return the result whether the formed string matches the given value
  return (str === value);
}

const getAllSubStrs = value => {
  let substrs = [];

  // form substrings by starting with each char in the value and then concatanating with each substring after it
  for (let i=0; i<value.length; i++) {
    substrs.push(value[i]);
    for (let j=i+1; j<value.length; j++) {
      substrs.push(value[i] + value.substring(i+1,j+1));
    }
  }

  return substrs;
}

const pattern = 'abba';
const value = 'catcatgocatgo';

console.log(patternMatch(pattern, value));