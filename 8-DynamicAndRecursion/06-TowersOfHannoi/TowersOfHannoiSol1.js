// initial call is to move disks from src to dest using buffer
const moveDisks = (n, src, dest, buffer) => {
  if (n <= 0) return;

  // move the top n-1 disks from src to buffer using dest as buffer.
  moveDisks(n-1, src,buffer,dest);

  // move the last remaining disk in src to dest
  dest.push(src.pop());

  // repeat the steps by moving the disks from buffer to dest using src as buffer
  moveDisks(n-1, buffer,dest,src);
}

// time complexity is 2ⁿ
let src = [8,7,6,5,4,3,2,1];
let dest = [];
let buffer = [];

console.log(moveDisks(src.length, src, dest, buffer));