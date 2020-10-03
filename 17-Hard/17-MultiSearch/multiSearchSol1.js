const searchAll = (big, small) => {
  let lookup = [];
  
  // loop through each small str
  small.forEach(str => {
    let locations = [];
    let i = 0;
    while (i < big.length) {
      // get the index of occurrence of str in big starting from location i
      let j = big.indexOf(str,i);
      
      // if found, store the loc and set the next starting pos to search as j+1
      if (j >= 0) {
        locations.push(j);
        i = j+1;
      } else break;
    }
    lookup.push({str, locations});
  })

  return lookup;
}

let big = 'mississippi';
// let small = ['is','ppi','hi','sis','i','ssippi'];
let small = ['i','is','pp','ms'];

console.log(searchAll(big, small));