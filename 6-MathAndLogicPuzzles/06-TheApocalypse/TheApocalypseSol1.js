const getGirlToBoyRatio = numFamily => {
  let totalGirlCount = 0, totalBoyCount = 0;
  let i = 0;

  while (i < numFamily) {
    let { girlCount, boyCount} = oneFamily();
    
    totalBoyCount += boyCount;
    totalGirlCount += girlCount;

    i++;
  }

  return totalGirlCount/totalBoyCount;
}

const oneFamily = () => {
  const girl = true;
  const boy = false;
  let boyCount = 0;
  let girlCount = 0;
  let child = Math.random() < 0.5 ? true : false;

  while (child !== girl) {
    boyCount++;
    
    child = Math.random() < 0.5 ? true : false;
  }
  girlCount++;

  return {girlCount, boyCount};
}

console.log(getGirlToBoyRatio(100));