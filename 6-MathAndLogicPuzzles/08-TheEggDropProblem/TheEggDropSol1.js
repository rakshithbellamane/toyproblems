let dropCount = 0;

const eggBreak = eggDropFloor => {
  const breakingPoint = 100;

  dropCount++;

  return eggDropFloor >= breakingPoint;
}

const findBreakingPoint = numFloors => {
  let interval = 14;
  let prevFloor = 0;
  let egg1 = interval;

  while (!eggBreak(egg1) && egg1 <= numFloors) {
    prevFloor = egg1;
    interval--;
    egg1 += interval;
  }

  let egg2 = prevFloor+1;

  while (!eggBreak(egg2) && egg2 <= numFloors && egg2 <= egg1) {
    egg2++;
  }

  return egg2 <= numFloors ? egg2 : -1;
}

findBreakingPoint(100);
console.log(dropCount);