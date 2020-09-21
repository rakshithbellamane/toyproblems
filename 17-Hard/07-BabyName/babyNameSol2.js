// graph data structure
class Graph {
  nodes = {};

  addNode = val => {
    this.nodes[val] = [];
  }

  addEdge = (val1, val2) => {
    this.nodes[val1].push(val2);
    this.nodes[val2].push(val1);
  }
}

const listBabyNames = (freqList, synonList) => {
  // graph to store the synon names
  let synonGraph = new Graph();

  // loop through the synonList and build a graph
  for (let i=0; i<synonList.length; i++) {
    // if the name and synon doesn't exist in the graph, add them
    if (!synonGraph.nodes[synonList[i].name]) synonGraph.addNode(synonList[i].name);
    if (!synonGraph.nodes[synonList[i].synon]) synonGraph.addNode(synonList[i].synon);

    // link the name and synon
    synonGraph.addEdge(synonList[i].name, synonList[i].synon);
  }

  // loop through the freqList to determine the true frequencies
  let trueFreqList = [];
  let visited = {}; // to track already visited names so that we don't infinite loop
  for (name in freqList) {
    !visited[name] && trueFreqList.push({name, count: countTrueFreq(name, freqList, synonGraph, visited)});
  }

  return trueFreqList;
}

// function to do a DFS in the synonGraph for the given name
const countTrueFreq = (name, freqList, synonGraph, visited, count=0) => {
  count += freqList[name]; // add freq to count for the given name
  visited[name] = true;
  // loop through each edge recursively only if there are synons
  synonGraph.nodes[name] && synonGraph.nodes[name].forEach(synonName => !visited[synonName] && (count = countTrueFreq(synonName, freqList, synonGraph, visited, count)));
  
  return count;
}

const freqList = {'John': 15, 'Jon': 12, 'Chris': 13, 'Kris': 4, 'Christopher': 19, 'Kristopher': 19, 'Rakshith': 1, 'Johnny': 10};

const synonList = [{name: 'Jon',synon: 'John'},{name: 'Johnny', synon: 'John'},{name: 'Kris', synon: 'Chris'},{name: 'Christopher', synon: 'Kris'},{name: 'Kristopher', synon: 'Christopher'}];

console.log(listBabyNames(freqList, synonList));