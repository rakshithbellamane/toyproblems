const longestSequence = num => {
  let binStr = num.toString(2);

  // build the alternating sequences of 0 & 1
  let prevBit = '0';
  let counter = 0;
  let sequences = [];
  for (let i=binStr.length-1; i>=0; i--) {
    let curBit = binStr[i];
    if (prevBit !== curBit) {
      sequences.push(counter);
      counter = 1;
      prevBit = curBit;
    } else {
      counter++;
    }
  }
  sequences.push(counter);
  console.log(binStr);
  console.log(sequences);

  let zeroSeq, oneLeftSeq, oneRightSeq, curSeq, maxSeq = 0;

  for (let i=0; i<sequences.length; i=i+2) {
    zeroSeq = sequences[i];
    oneLeftSeq = i > 0 ? sequences[i-1] : 0;
    oneRightSeq = i < sequences.length - 1 ? sequences[i+1] : 0;
    
    if (zeroSeq === 1) {
      curSeq = oneLeftSeq + 1 + oneRightSeq;
    } else if (zeroSeq > 1) {
      curSeq = 1 + Math.max(oneLeftSeq, oneRightSeq);
    } else if (zeroSeq === 0) {
      curSeq = Math.max(oneLeftSeq, oneRightSeq);
    }

    if (curSeq > maxSeq) maxSeq = curSeq;
  }

  return maxSeq;
}

console.log(longestSequence(7));