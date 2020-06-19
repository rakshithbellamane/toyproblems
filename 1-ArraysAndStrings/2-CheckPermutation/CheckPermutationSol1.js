/* we will consider that the strings are case sensitive and whitespace significant */
const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let arr1 = str1.split('');
  let arr2 = str2.split('');
  
  if (arr1.sort().join('') !== arr2.sort().join('')) return false;

  return true;
}

console.log(`abc is a permutation of bca = ${checkPermutation('abc','bca')}`);
console.log(`god is a permutation of dog   = ${checkPermutation('god','dog  ')}`);
console.log(`ab$ c is a permutation of B ca$ = ${checkPermutation('ab$ c','B ca$')}`);
console.log(`ab$ c is a permutation of b ca$ = ${checkPermutation('ab$ c','b ca$')}`);