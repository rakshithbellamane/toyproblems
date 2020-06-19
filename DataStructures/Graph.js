// this is an undirected graph
class Graph {
  nodes = {};

  addNode (value) {
    if (value === null) return;

    this.nodes[value] = this.nodes[value] || [];
  }

  addEdge (value1, value2) {
    if (!this.nodes[value1] || !this.nodes[value2]) return 'one of the given nodes is invalid';

    this.nodes[value1].push(value2);
    this.nodes[value2].push(value1);
  }

  contains (value) {
    if (value === null) return false;

    return this.nodes.hasOwnProperty(value);
  }

  hasEdge (value1, value2) {
    if (!this.nodes[value1] || this.nodes[value2]) return 'one of the given nodes is invalid';

    return this.nodes[value1].includes(value2);
  }

  removeEdge (value1, value2) {
    if (this.hasEdge(value1, value2)) {
      this.nodes[value1].splice(this.nodes[value1].indexOf(value2),1);
      this.nodes[value2].splice(this.nodes[value2].indexOf(value1),1);
    }
  }

  removeNode (value) {
    if (!this.nodes[value]) return;
    
    // if node has edges, then remove all the edges
    while(this.nodes[value].length > 0) {
      this.removeEdge(value, this.nodes[value][0]);
    }
    delete this.nodes[value];

    return;
  }

  forEach (callBack) {
    for (node in this.nodes) {
      callBack(node, this.nodes[node]);
    }
  }

  traverseDepthFirst (value, callBack, visited={}, distance=0) {
    if (!this.nodes[value]) return;
    
    if (!visited.hasOwnProperty(value)) {
      visited[value]=true;;
    }

    this.nodes[value].forEach(neighbor => {
      if (!visited.hasOwnProperty(neighbor)) {
        this.traverseDepthFirst(neighbor, callBack, visited, distance+1);
      }
    })
    callBack(value, distance);
  }

  traverseBreadthFirst (value, callBack, visited={}, distance=0) {
    if (!this.nodes[value]) return null;

    let queue = [value];
    visited[value] = 0;

    while (queue.length > 0) {
      let node = queue.shift();
      let nodeDistance = visited[node];
      
      callBack(node, nodeDistance);

      this.nodes[node].forEach(neighbor => {
        if (!queue.includes(neighbor) && !visited.hasOwnProperty(neighbor)) {
          queue.push(neighbor);
          visited[neighbor] = nodeDistance+1;
        }
      });
    }
  }
}

let myGraph = new Graph();
myGraph.addNode(0);
myGraph.addNode(1);
myGraph.addNode(2);
myGraph.addNode(3);
myGraph.addNode(4);
myGraph.addEdge(0,1);
myGraph.addEdge(0,3);
myGraph.addEdge(1,2);
myGraph.addEdge(2,3);
myGraph.addEdge(3,4);

console.log(myGraph.nodes);

let visited = [];
let dfs = [];
myGraph.traverseDepthFirst(3, (value, distance) => dfs.push([value,distance]), visited);
console.log(dfs);

visited = [];
let bfs = [];
myGraph.traverseBreadthFirst(3, (value, distance) => bfs.push([value,distance]), visited);
console.log(bfs);

myGraph.removeEdge(2,3);
console.log(myGraph.nodes);

myGraph.removeNode(3);
console.log(myGraph.nodes);
