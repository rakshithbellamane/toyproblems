// refer to https://blog.jakuba.net/2018-01-09-bit-vector-in-javascript/ for an excellent explanation about bit vector
const findDuplicates = arr => {
  // since an element in the array can be numbers from 1 to 32000, create a bitVector with 32000 bits to mark the position of these numbers
  let vec = buildVector(32000);
  // loop through each element in the array and flip the corresponding bit in the bitVector
  for (let i=0; i<arr.length; i++) {
    let num = arr[i];
    // bitVector (array) starts with index 0, but numbers start with 1
    // so subtract 1 from num so that we can correctly point to the bit in the vector
    let num0 = num - 1;
    // if the bit is already set then we have found a duplicate
    if (getBit(vec, num0)) {
      console.log(num);
    } else {
      setBit(vec, num0);
    }
  }
}

// build a vector to store the given range of numbers
const buildVector = range => {
  // each number is a 32 bit int. So each bit in the number can be used to mark 32 numbers.
  // get the number of elements in the vector needed to represent the range
  let numElements = Math.ceil(range/32);
  // build a vector (array) having numElements and initialize it with 0
  let vec = new Array(numElements).fill(0);

  return vec;
}

const setBit = (vec, num) => {
  // get the index of the element in bitVector that will hold num
  let index = Math.floor(num/32);
  // set the bit corresponding to the num in the index
  vec[index] |= (1 << num%32);
}

const getBit = (vec, num) => {
  // get the index of the element in bitVector that holds num
  let index = Math.floor(num/32);
  // return the bit corresponding to the num in the index
  return vec[index] & (1 << num%32);
}

let arr = [1, 100, 5, 30, 20, 4, 1, 20, 30];
findDuplicates(arr);