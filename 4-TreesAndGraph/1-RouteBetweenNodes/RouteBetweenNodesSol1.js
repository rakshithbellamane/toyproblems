class Graph {
  nodes = {};

  addNodes (value) {
    this.nodes[value] = [];
  }

  addEdges (value1, value2) {
    if (!this.nodes[value1] || !this.nodes[value2]) return;

    this.nodes[value1].push(value2);
  }

  hasPath (value1, value2) {
    let visited = {};
    let queue = [];
    let routeFound = false;

    if (!this.nodes[value1] || !this.nodes[value2]) return false;

    queue.push(value1);
    visited[value1] = true;

    while (queue.length > 0) {
      let value = queue.shift();

      this.nodes[value].forEach(neighbor => {
        if (neighbor === value2) routeFound = true;
        if (!queue.includes(neighbor) && !visited.hasOwnProperty(neighbor)) {
          visited[neighbor] = true
          queue.push(neighbor);
        };
      });
    }

    return routeFound;
  }
}

let myGraph = new Graph();
myGraph.addNodes(1);
myGraph.addNodes(2);
myGraph.addNodes(3);
myGraph.addNodes(4);
myGraph.addNodes(5);
myGraph.addEdges(1,2);
myGraph.addEdges(2,3);
myGraph.addEdges(3,1);
myGraph.addEdges(4,1);
myGraph.addEdges(5,1);
console.log(myGraph.nodes);
console.log(myGraph.hasPath(5,3));
console.log(myGraph.hasPath(5,4));
