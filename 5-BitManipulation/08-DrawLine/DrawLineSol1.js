const drawBlankScreen = (x,y) => {
  let screen = [];
  for (let i=0; i<x; i++) {
    let row = [];
    for (let j=0; j<y; j++) {
      row.push(0);
    }
    screen.push(row);
  }

  return screen;
}

const drawLine = (screen, x1, x2, y) => {
  let x1Byte = Math.trunc(x1 / 8);
  let x1ByteBit = x1 % 8;
  let x2Byte = Math.trunc(x2 / 8);
  let x2ByteBit = x2 % 8;

  let x1Mask;
  let x2Mask;

  if (x1Byte === x2Byte) {
    x1Mask = parseInt('0xFF',16) >> x1ByteBit;
    x2Mask = ~(parseInt('0xFF',16) >> (x2ByteBit + 1));

    screen[y][x1Byte] |= (x1Mask & x2Mask);
  } else {
    curByte = x1Byte + 1;
    while (curByte < x2Byte) {
      screen[y][curByte] = parseInt('0xFF',16);
      curByte++;
    }

    x1Mask = (parseInt('0xFF',16) >> x1ByteBit);
    screen[y][x1Byte] |= x1Mask;

    x2Mask = ~(parseInt('0xFF',16) >> (x2ByteBit + 1));
    screen[y][x2Byte] |= x2Mask;
  }

  console.log(screen);
}

let screen = drawBlankScreen(10,10);
drawLine(screen, 18, 66, 5);