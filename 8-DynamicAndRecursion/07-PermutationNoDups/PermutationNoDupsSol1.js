const getPerms = (str) => {
  // if there is only one char, then return that chart as the permutation
  if (str.length === 1) {
    let perm = [];
    perm.push(str);
    return perm;
  }

  // get all the permutations of str[1 to end]
  let perms = getPerms(str.slice(1));

  let char = str[0];
  let allPerms = [];
  // for each permutation, add the first char of the string to get the new set of permutations.
  perms.forEach(perm => {
    // first permutation is char + permutation
    allPerms.push(char+perm);
    for (let i=1; i<perm.length; i++) {
      // insert the chart at each position of the permutation to get new set of permutations.
      allPerms.push(perm.slice(0,i)+char+perm.slice(i));
    }
    // last permutation is permutation + char
    allPerms.push(perm+char);
  });

  return allPerms;
}

console.log(getPerms('abcd'));