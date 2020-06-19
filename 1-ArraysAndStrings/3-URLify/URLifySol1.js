const urlify = str => {
  let newStr = str.trim().replace(/\s/g,'%20');

  return newStr;
}

console.log(urlify('Mr John Smith    '));