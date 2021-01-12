const IPQ = require('../../PriorityQueue/indexedPriorityQueue');

class Graph {
  nodes = {};

  addEdge (from, to, distance) {
    if (this.nodes[from]) this.nodes[from].push({node: to, distance});
    else this.nodes[from] = [{node: to, distance}];
  }

  determinePath (to, dist) {
    let path = [{node: to, distance: dist[to].shortestDistance}];
    let node = dist[to].prev; 
    while(node !== null) {
      path.unshift({node, distance: dist[node].shortestDistance})
      node = dist[node].prev;
    }

    return path;
  }

  findShortestPath (start, end) {
    let visited = {}; // map to track nodes that we already visited
    let dist = []; // array to track distances to each node from start
    let pq = new IPQ(); // indexed min priority queue to track next node with the shortest distance to visit

    dist[start] = {shortestDistance: 0, prev: null}; // distance to start node is 0 and there is no prev node
    pq.insert({data: start, priority: 0}); // begin with the start node
    
    // loop through the next node with the shortest distance
    while(pq.elements.length) {
      let {data:node, priority:distance} = pq.poll(); // get the next node with the shortest distance

      visited[node] = true; // mark the node as visited

      // if the node is the end node, we have found the shortest distance, so build the path
      if (node === end) return this.determinePath(end, dist); 
      
      // if we had already found a path with shorter distance than what was in the pq, just ignore it (i.e. don't follow this path)
      if (dist[node].shortestDistance < distance) continue;

      dist[node].shortestDistance = distance;

      // we have found a shorter path, so process all the next nodes from this new node
      if (this.nodes[node]) this.nodes[node].forEach(next => {
        // calculate a newDistance using the current shorter path
        let newDistance = dist[node].shortestDistance+next.distance;

        // add the next node to PQ, only if it has not been visited (processed) and 
        // if the newDistance is less than the current shortest distance to that node.
        if (!visited[next.node] && (!dist[next.node] || newDistance < dist[next.node].shortestDistance)) {
          // update the shortest distance and also link the prev node to the shorter path node
          dist[next.node] = {shortestDistance: newDistance, prev: node};

          // if the next node is not in PQ, insert it with the newDistance. Otherwise update it with the new shorter distance.
          // This avoids duplicate items in PQ.
          if (!pq.contains(next.node)) pq.insert({data: next.node, priority: newDistance});
          else pq.decreasePriority(next.node, newDistance);
        }
      });
    }

    return path;
  }
}

let myGraph = new Graph();
myGraph.addEdge(0,1,4);
myGraph.addEdge(0,2,1);
myGraph.addEdge(2,1,2);
myGraph.addEdge(1,3,1);
myGraph.addEdge(2,3,5);
myGraph.addEdge(3,4,3);

console.log(myGraph.findShortestPath(0,4));