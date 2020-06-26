const swapPosition = num => {
  let oddMaskAndShiftEven = (num & parseInt('0xaaaaaaaa',16)) >>> 1;
  let evenMaskAndShiftOdd = (num & parseInt('0x55555555',16)) << 1;
  return (oddMaskAndShiftEven | evenMaskAndShiftOdd);
}

console.log(swapPosition(parseInt('10101011',2)).toString(2));