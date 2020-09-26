const findWordDistance = (locMap,w1,w2) => {
  // get the location list for each of the words
  let loc1 = locMap[w1];
  let loc2 = locMap[w2];

  // indexes to track the loc1 & loc2 
  let cur1=0,cur2=0;
  // starting shortest distance
  let shortDis = Math.abs(loc1[cur1]-loc2[cur2]);

  // loop through the lists to find the shortest distance
  while (cur1 < loc1.length && cur2 < loc2.length) {
    let distance = Math.abs(loc1[cur1]-loc2[cur2]);
    // update the shortest distance
    if (distance < shortDis) shortDis = distance;

    // increment the indexes
    if (loc1[cur1] < loc2[cur2]) cur1++;
    else cur2++;
  }

  return shortDis;
}

// function to build hash table of words and their locs
const buildMap = list => {
  let locMap = {};
  list.forEach((word, i) => {
    if (locMap[word]) locMap[word].push(i) 
    else locMap[word] = [i]
  });

  return locMap;
}

const list = ['a','b','e','h','b','c','f','k','a','g','c'];
// build a map of all the locs where a word occurs
let locMap = buildMap(list);
console.log(findWordDistance(locMap,'a','c'));