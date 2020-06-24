const longestSequence = num => {
  console.log(num.toString(2));

  let curLen =0, prevLen = 0, maxLen = 0;
  while (num > 0) {
    if (num & 1) {
      curLen++;
    } else {
      prevLen = num & 2 === 0 ? 0 : curLen+1;
      curLen = 0;
    }
    maxLen = Math.max(prevLen+curLen, maxLen);
    num >>>= 1;
  }

  return maxLen;
}

console.log(longestSequence(22));