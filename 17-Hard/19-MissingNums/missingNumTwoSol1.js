// find two missing num
const findMissingNum = (list, N) => {
  // we will be using how to solve a quadratic equation ax²+bx+c
  
  // calculate s = x+y
  let listSum = list.reduce((total,num) => total+num);
  let correctSum = N*(N+1)/2;
  let s = correctSum-listSum;

  // calculate t = x²+y²
  let listSumSquare = list.reduce((total,num) => total+(num*num));
  let correctSumSquare = squareSum(N);
  let t = correctSumSquare-listSumSquare;

  // s = x+y => y = x-s;
  // t = x²+(x-s)² => x²+x²+s²-2sx => 2x²-2sx+s² => 2x²-2sx+s²-t = 0
  // to solve a quadratic equation ax²+bx+c=0, the formula is x = -b + sqrt(b²-4ac)/2a
  // so for our quadratic equation, a = 2, b = -2s, c = s²-t
  let a = 2;
  let b = -2*s;
  let c = (s*s)-t;

  let x = (-1*b + Math.sqrt(b*b - 4*a*c))/(2*a);
  let y = s-x;

  return {x,y};
}

const squareSum = (N) => {
  let sum=0;
  for (let i=1;i<=N;i++) sum += (i*i);

  return sum;
}

let list = [1,2,3,4,6,7,8,10];
console.log(findMissingNum(list,10));