/* note that this implementation is different than what is in the book, but uses similar concept */
const findKthMultiple = k => {
  // count to track the eles so that we can return the kth element
  let count = 4;

  // arr to hold multiples
  let multiples = [1,3,5,7];

  // index to track the level in each array
  let i = 0;

  // arr to hold eles as we find factors 
  // three will hold multiples of 3
  // five will hold multiples of 5 and 3 * multiples of 5
  // seven will hold multiples of 7 and 3 * multiples of 7 and 5 * multiples of 7
  let three=[3], five=[5], seven=[7];

  
  // We will loop processing each level in the arrs and adding new multiples until count >= k
  while (count < k) {
    let ele = three[i]*3;
    three.push(ele);
    multiples.push(ele);

    ele = five[i]*3;
    five.push(ele);
    multiples.push(ele);

    ele = seven[i]*3;
    seven.push(ele);
    multiples.push(ele);

    ele = five[i]*5;
    five.push(ele);
    multiples.push(ele);

    ele = seven[i]*5;
    seven.push(ele);
    multiples.push(ele);

    ele = seven[i]*7;
    seven.push(ele);
    multiples.push(ele);

    count += 6
    i++;
  }

  console.log(multiples);

  // kth multiple would be k-1 index
  return multiples[k-1];
}

console.log(findKthMultiple(6));