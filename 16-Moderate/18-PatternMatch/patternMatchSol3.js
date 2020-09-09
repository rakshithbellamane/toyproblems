// this approach forms the main substrings by just looping through the value once
const doesMatch = (pattern, value) => {
  if (pattern.length === 0) return (value.length === 0);

  let size = value.length;

  // determine what is the main (first) char and then the alt char.
  let mainChar = pattern[0];
  let altChar = mainChar === 'a' ? 'b' : 'a';

  // find how many times the main and alt char appear in the pattern
  let countMain = mainChar === 'a' ? pattern.match(/a/g).length : pattern.match(/b/g).length;
  let countAlt = pattern.length - countMain;

  // since we now know count of the times main string should appear in the value, we can determine the maxSize of the string
  let maxMainSize = size / countMain;

  // for generating the main string, we loop only till the maxMainSize
  for (let mainSize = 1; mainSize <= maxMainSize; mainSize++) {
    // form the main substring
    let main = value.substring(0, mainSize);

    // to figure out what the alt string
    // find out the total remaining size all the alt strings for the given main string.
    let remainingLength = size - mainSize*countMain;

    // we will try to verify the main & alt strings combination only if
    // there are no alt strings based on the pattern OR
    // remaining total alt strings is perfectly divisible by count of alt in the pattern
    if (countAlt === 0 || remainingLength%countAlt === 0) {
      // get the start index in value of the first alt which is (index of alt char in patter) * (size of main string)
      let altStart = pattern.indexOf(altChar)*mainSize;
      // get the alt size, which is 0 if there are no alts OR  (remainingLength / count of alts) otherwise
      let altSize = countAlt === 0 ? 0 : remainingLength/countAlt;
      // now we can find out the alt string
      let alt = countAlt === 0 ? '': value.substring(altStart, altStart+altSize);

      console.log(`main: ${main} alt: ${alt}`);
      // build the candidate from the pattern based on main and alt substrings
      let cand = buildFromPattern(pattern, main, alt);
  
      if (cand === value) return true;
    }
  }

  return false;
}

const buildFromPattern = (pattern, main, alt) => {
  let str = '';
  let first = pattern[0];

  for (let i=0; i<pattern.length; i++) {
    if (pattern[i] === first) str += main;
    else str += alt;
  }

  return str;
}


const pattern = 'aab';
const value = 'catcatgocatgo';

console.log(doesMatch(pattern, value));