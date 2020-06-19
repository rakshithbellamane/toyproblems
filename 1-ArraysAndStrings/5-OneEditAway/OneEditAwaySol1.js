const oneEditReplace = (str1, str2) => {
  let diffFound = false;
  for (let i =0; i< str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (diffFound) return false;
      diffFound = true;
    }
  }

  return true;
}

const oneEditInsert = (str1, str2) => {
  let index1 = 0;
  let index2 = 0;

  while (index1 < str1.length) {
    if (str1[index1] === str2[index2]) {
      index1++;
      index2++;
    } else {
      if (index2 !== index1) return false;
      index2++;
    }
  }

  return true;
}

const oneEditAway = (str1, str2) => {
  if (str1.length === str2.length) return oneEditReplace(str1, str2);
  if (str1.length - str2.length === -1) return oneEditInsert(str1, str2); 
  if (str1.length - str2.length === 1) return oneEditInsert(str2, str1);

  return false;
}

console.log(oneEditAway('raks','rad'));