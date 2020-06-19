/* this approach determines the length of the compressed string before compressing the string */

const countCompression = str => {
  let compressedStrLen = 0;
  let countConsecutive = 0; 

  for (let i=0; i<str.length; i++) {
    countConsecutive++;
    if ((i+1) > str.length || str[i] !== str[i+1]) {
      compressedStrLen += 1 + countConsecutive.toString().length;
      countConsecutive = 0;
    }
  }

  console.log(compressedStrLen);
  return compressedStrLen;
}

const compress = str => {
  let compressedStr = [];

  let compressedStrLen = countCompression(str);
  if (compressedStrLen >= str.length) return str;

  let index = 0;
  let charCount = 1;

  while (index < str.length) {
    if (str[index] === str[index+1] && (index+1) < str.length) {
      charCount++;
    } else {
      compressedStr.push(str[index],charCount);
      charCount = 1;
    }
    index++;
  }

  return compressedStr.join('').length > str.length ? str : compressedStr.join('');
}

console.log(compress('rakkshithhhhhhhhhh'));
console.log(compress('rakkshith'));