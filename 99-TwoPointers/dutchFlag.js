const swap = (l, r, flag) => {
  let temp = flag[l];
  flag[l] = flag[r];
  flag[r] = temp;
}

const sortFlag = flag => {
  let l = 0;
  let r = flag.length-1;
  let i = 0;

  while (i < r) {
    if (flag[i] === 0){
      swap(l, i, flag);
      l++;
      continue;
    }
     
    if (flag[i] === 2){
      swap(i, r, flag);
      r--;
      continue
    }
    i++;
  }

  return flag;
}

let flag = [1,0,2,1,0];
console.log(sortFlag(flag));