/* this is the solution as per the book */

const urlify = (str, trueLength) => {
  let spaceCount = 0;

  for (let i=0; i<trueLength; i++) {
    if (str[i] === ' ') spaceCount++;
  }

  let index = trueLength + spaceCount*2 -1;
  for (i=trueLength-1; i>=0; i--) {
    if(str[i] === ' ') {
      str[index] = '0';
      str[index-1]='2';
      str[index-2]='%'
      index=index-3;
    } else {
      str[index] = str[i];
      index--;
    }
  }

  return str.join('');
}

console.log(urlify('Mr John Smith    '.split(''), 13));