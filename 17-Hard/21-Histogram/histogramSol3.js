// this approach calculates how much water is above you.
// The amount of water above you depends on min of (max on your left and max on your right)
// If the min is > your height then there is water above you.
const computeHistoVol = (histo) => {
  let leftMaxes = [];
  let leftMax = histo[0];

  for(let i=0;i<histo.length; i++) {
    leftMax = Math.max(leftMax, histo[i]);
    leftMaxes[i] = leftMax;
  }

  let sum = 0;
  let rightMax = histo[histo.length-1];

  for (let i=histo.length-1;i>=0; i--) {
    rightMax = Math.max(rightMax, histo[i]);
    let secondTallest = Math.min(rightMax,leftMaxes[i]);

    if (secondTallest > histo[i]) sum += secondTallest - histo[i];
  }

  return sum;
}

let histo = [0,0,4,0,0,6,0,0,3,0,8,0,2,0,5,2,0,3,0,0];
console.log(computeHistoVol(histo));