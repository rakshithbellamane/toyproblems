/* Notes:
  - ASCII chars - 128
  - Extended ASCII chars - 256
  - Unicode char - currently there are 143859 chars with allowable space for 1,114,112 chars
*/

const isUnique = input => {
  //assumes ASCII chars - 128

  if (input.length > 128) return false;

  let charCounter = [];

  for (let i=0; i<input.length; i++) {
    let charCode = input.charCodeAt(i);
    if (charCounter[charCode] === true) return false;
    charCounter[charCode] = true;
  }

  return true;
};

console.log(`string abc isUnique = ${isUnique('abc')}`);
console.log(`string abbc isUnique = ${isUnique('abbc')}`);
console.log(`string ab$c^$ isUnique = ${isUnique('ab$c^$')}`);