const areStrSame = (str1, str2) => {
  let r=str1.length-1;
  let newStr1 = '';

  while (r >= 0) {
    let back = 0;
    if (str1[r] !== '#') {
      newStr1 += str1[r];
      r--;
    } else {
      while (str1[r] === '#') {
        back++;
        r--;
      }
      r -= back;
    }
  }

  r=str2.length-1;
  let newStr2 = '';

  while (r >= 0) {
    let back = 0;
    if (str2[r] !== '#') {
      newStr2 += str2[r];
      r--;
    } else {
      while (str2[r] === '#') {
        back++;
        r--;
      }
      r -= back;
    }
  }

  return newStr1 === newStr2;
}

let str1 = 'xy#z';
let str2 = 'xyz#';
console.log(areStrSame(str1, str2));