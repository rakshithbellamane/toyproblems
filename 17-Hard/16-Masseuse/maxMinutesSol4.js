const maxMins = (arr) => {
  let i, oneAway = 0, twoAway=0;

  for (i=arr.length-1; i >=0 ; i--) {
    let bestWithIndex = arr[i] + twoAway;
    let bestWithoutIndex = oneAway
    
    let current = Math.max(bestWithIndex, bestWithoutIndex);
    twoAway = oneAway;
    oneAway = current;
  }

  return oneAway;
}

const apts = [30,15,60,75,45,15,15,45];

console.log(maxMins(apts));