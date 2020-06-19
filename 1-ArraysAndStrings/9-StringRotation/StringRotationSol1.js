/* 
if str1 = xy, then the rotated string is yx.
if str2 = yx
then str2 is rotation of str1 if str2 is substr of str1str1, i.e yx is substr of xyxy
*/

const isRotation = (str1, str2) => {
  if (str2.length > 0 && str1.length === str2.length) {
    let str1str1 = str1 + str1;

    if (str1str1.includes(str2)) return true;
  }

  return false;
}

console.log(isRotation('waterbottle','eabottlewat'));
console.log(isRotation('waterbottle','erbottlewat'));