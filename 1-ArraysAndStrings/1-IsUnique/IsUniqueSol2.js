/* this solution uses bit vector method */

const isUnique = input => {
  let checker = 0;

  for (let i=0; i<input.length; i++) {
    let val = input.charCodeAt(i) - 'a'.charCodeAt(0);

    if((checker & (1 << val)) > 0) return false;

    checker |= (1 << val);
    console.log(checker);
  }

  return true;
}

console.log(`string abc isUnique = ${isUnique('abc')}`);
console.log(`string abbc isUnique = ${isUnique('abbc')}`);
console.log(`string ab$c^$ isUnique = ${isUnique('ab$c^$')}`);