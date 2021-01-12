class DirectedGraph {
  nodes = {};

  addEdge (from, to, weight) {
    if (!this.nodes[from]) this.nodes[from] = [{node: to, weight}];
    else this.nodes[from].push({node: to, weight});
  }

  dfs (node, visited, topOrder) {
    if (!this.nodes[node]) {
      topOrder.unshift(node);
      return;
    }

    this.nodes[node].forEach(neighbor => {
      if (!visited[neighbor.node]) {
        visited[neighbor.node] = true;
        this.dfs (neighbor.node, visited, topOrder);
      }
    });

    topOrder.unshift(node);

    return;
  }

  topSort () {
    let topOrder = [];
    let visited = {};

    for (let node in this.nodes) {
      if (!visited[node]) 
      {
        visited[node] = true;
        this.dfs(node, visited, topOrder);
      }
    }

    return topOrder;
  }
}

let myGraph = new DirectedGraph();
myGraph.addEdge('a', 'd', 1);

myGraph.addEdge('b', 'd', 1);

myGraph.addEdge('c', 'a', 1);
myGraph.addEdge('c', 'b', 1);

myGraph.addEdge('d', 'h', 1);
myGraph.addEdge('d', 'g', 1);

myGraph.addEdge('e', 'd', 1);
myGraph.addEdge('e', 'a', 1);
myGraph.addEdge('e', 'f', 1);

myGraph.addEdge('f', 'k', 1);
myGraph.addEdge('f', 'j', 1);

myGraph.addEdge('g', 'i', 1);

myGraph.addEdge('h', 'i', 1);
myGraph.addEdge('h', 'j', 1);

myGraph.addEdge('i', 'l', 1);

myGraph.addEdge('j', 'm', 1);
myGraph.addEdge('j', 'l', 1);

myGraph.addEdge('k', 'j', 1);

console.log(myGraph.topSort());
