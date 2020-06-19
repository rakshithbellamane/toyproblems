const oneEditAway = (first, second) => {
  if (Math.abs(first.length - second.length) > 1) return false;

  let s1 = '';
  let s2 = '';

  if (first.length - second.length <= 0) {
    s1 = first;
    s2 = second;
  } else {
    s1 = second;
    s2 = first;
  }

  let diffFound = false;
  let index1 = 0;
  let index2 = 0;

  while (index1 < s1.length) {
    if (s1[index1] !== s2[index2]) {
      if (diffFound) return false;
      diffFound = true;

      if (s1.length === s2.length) index1++;
    } else {
      index1++;
    }
    index2++;
  }

  return true;
}

console.log(oneEditAway('rad','raks'));