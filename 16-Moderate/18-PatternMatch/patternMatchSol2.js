// this approach forms the main substrings by just looping through the value once
const doesMatch = (pattern, value) => {
  if (pattern.length === 0) return (value.length === 0);

  let size = value.length;

  for (let mainSize = 0; mainSize < size; mainSize++) {
    // form the main substring
    let main = value.substring(0, mainSize+1);

    // based on the main substring, for all the possible alt substrings
    for (let altStart = mainSize+1; altStart <= size; altStart++) {
      for (let altEnd = altStart+1; altEnd <= size; altEnd++) {
        let alt = value.substring(altStart, altEnd);

        console.log(`main: ${main} alt: ${alt}`);
        // build the candidate from the pattern based on main and alt substrings
        let cand = buildFromPattern(pattern, main, alt);

        if (cand === value) return true;
      }
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


const pattern = 'abba';
const value = 'catcatgocatgo';

console.log(doesMatch(pattern, value));