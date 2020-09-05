const getLens = (k, short, long) => {
  let allLens = [];
  for (let numShort = 0; numShort <=k; numShort++) {
    let numLong = k - numShort;
    length = numShort*short + numLong*long;
    allLens.push(length);
  }

  return allLens;
}

console.log(getLens(4,1,2));