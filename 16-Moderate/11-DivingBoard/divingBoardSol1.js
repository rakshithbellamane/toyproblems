const getLens = (k, short, long, length=0, allLens=[]) => {
  if (k === 0) {
    !allLens.includes(length) && allLens.push(length);
    return;
  }

  getLens(k-1, short, long, length+short, allLens);
  getLens(k-1, short, long, length+long, allLens);

  return allLens;
}

console.log(getLens(4,1,2));