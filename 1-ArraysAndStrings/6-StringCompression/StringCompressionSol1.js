const compress = str => {
  let compressedStr = [];
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

console.log(compress('rakkshithhhhhhhhh'));