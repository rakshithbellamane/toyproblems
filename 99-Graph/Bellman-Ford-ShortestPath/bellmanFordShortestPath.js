class Graph {
  nodes = {};

  addEdge (from, to, distance) {

    if (this.nodes[from]) this.nodes[from].push({node: to, distance});
    else this.nodes[from] = [{node: to, distance}];
  }

  findShortestPath (start, nodesCnt) {
    // create an arry to store the distances
    let dist = new Array(nodesCnt);
    
    // fill the dist array with +Infinity
    dist.fill({shortestDistance: Number.POSITIVE_INFINITY, prev: null});
    // start node will have its shortestDistance as 0
    dist[start] = {shortestDistance: 0, prev: null};

    // loop through the graph nodesCnt-1 times.
    for (let i=0; i<nodesCnt-1; i++) {
      // for each node's edge, keep updating (relaxing) the shortest distance 
      for (let node in this.nodes) {
        this.nodes[node].forEach(edge => {
            if (dist[edge.node].shortestDistance > dist[node].shortestDistance+edge.distance) 
              dist[edge.node] = {shortestDistance: dist[node].shortestDistance+edge.distance, prev: node};
        });
      }
    }

    // loop through the graph nodesCnt-1 times begining from start node.
    for (let i=0; i<nodesCnt-1; i++) {
      // for each node's edge, if we find a shorter distance, then it is part of a cycle. So update it to -Infinity
      for (let node in this.nodes) {
        this.nodes[node].forEach(edge => {
            if (dist[edge.node].shortestDistance > dist[node].shortestDistance+edge.distance) 
              dist[edge.node] = {shortestDistance: Number.NEGATIVE_INFINITY, prev: node};
        });
      }
    }

    return dist;
  }
}

let myGraph = new Graph();
myGraph.addEdge(0,1,5);
myGraph.addEdge(1,2,20);
myGraph.addEdge(1,5,30);
myGraph.addEdge(1,6,60);
myGraph.addEdge(2,3,10);
myGraph.addEdge(2,4,75);
myGraph.addEdge(3,2,-15);
myGraph.addEdge(4,9,100);
myGraph.addEdge(5,4,25);
myGraph.addEdge(5,6,5);
myGraph.addEdge(5,8,50);
myGraph.addEdge(6,7,-50);
myGraph.addEdge(7,8,-10);

console.log(myGraph.findShortestPath(0, 10));