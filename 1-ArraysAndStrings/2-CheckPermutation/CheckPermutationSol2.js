const checkPermutation = (str1, str2) => {
  let strCharCount = [];
  
  if (str1.length !== str2.length) return false;

  for (let i=0; i< str1.length; i++) {
    strCharCount[str1.charCodeAt(i)] ? strCharCount[str1.charCodeAt(i)]++ : strCharCount[str1.charCodeAt(i)] = 1;
  }
  
  for (i=0; i< str2.length; i++) {
    strCharCount[str2.charCodeAt(i)] ? strCharCount[str2.charCodeAt(i)]-- : strCharCount[str2.charCodeAt(i)] = -1;

    if (strCharCount[str2.charCodeAt(i)] < 0) return false;
  }

  return true;
}

console.log(`abc is a permutation of bca = ${checkPermutation('abc','bca')}`);
console.log(`god is a permutation of dog   = ${checkPermutation('god','dog  ')}`);
console.log(`ab$ c is a permutation of B ca$ = ${checkPermutation('ab$ c','B ca$')}`);
console.log(`ab$ c is a permutation of b ca$ = ${checkPermutation('ab$ c','b ca$')}`);