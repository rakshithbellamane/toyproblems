const listBabyNames = (freqList, synonList) => {
  // from the synon list, generate a map of names to synon name.
  let synonMap = {};

  // loop through the synon list
  for (let i=0; i<synonList.length; i++) {
    // if the synon already exists, get the root synon and map the name to the root synon
    if (synonMap[synonList[i].synon]) {
      synonMap[synonList[i].name] = synonMap[synonList[i].synon];
    } else synonMap[synonList[i].name] = synonList[i].synon;
  }

  // loop through the freq list and generate the new freqList
  let newFreqMap = {};
  for (let i=0; i<freqList.length; i++) {
    // check the synonMap to get synon name
    let synonName = synonMap[freqList[i].name] ? synonMap[freqList[i].name] : freqList[i].name;
    if (newFreqMap[synonName]) newFreqMap[synonName] += freqList[i].freq;
    else newFreqMap[synonName] = freqList[i].freq;
  }

  return newFreqMap;
}

const freqList = [{name: 'John', freq: 15}, {name: 'Jon', freq: 12}, {name: 'Chris', freq: 13}, {name: 'Kris', freq: 4},
 {name: 'Christopher', freq: 19}, {name: 'Kristopher', freq: 19}, {name: 'Rakshith', freq: 1}, {name: 'Johnny', freq: 10}];

const synonList = [{name: 'Jon',synon: 'John'},{name: 'Johnny', synon: 'John'},{name: 'Kris', synon: 'Chris'},{name: 'Christopher', synon: 'Kris'},{name: 'Kristopher', synon: 'Christopher'}];

console.log(listBabyNames(freqList, synonList));