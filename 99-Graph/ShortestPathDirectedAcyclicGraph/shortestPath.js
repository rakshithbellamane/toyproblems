class DAG {
  nodes = {};

  addEdge (from, to, weight) {
    if (!this.nodes[from]) this.nodes[from] = [{node: to, weight}];
    else this.nodes[from].push({node: to, weight});
  }

  dfs (node, visited, topOrder) {
    visited[node] = true;

    if (!this.nodes[node]) {
      topOrder.unshift({node, sPath: Infinity})
      return;
    }

    this.nodes[node].forEach(neighbor => {
      if (!visited[neighbor.node]) this.dfs(neighbor.node, visited, topOrder)
    });

    topOrder.unshift({node, sPath: Infinity});

    return;
  }

  topSort (start) {
    let topOrder = [];
    let visited = {};

    this.dfs(start, visited, topOrder);

    return topOrder;
  }

  findShortestPath (node) {
    let topOrder = this.topSort(node);

    console.log(topOrder);

    topOrder[0].sPath = 0;

    for (let i=0; i<topOrder.length; i++) {
      let neighbors = this.nodes[topOrder[i].node] ? this.nodes[topOrder[i].node] : [];

      neighbors.forEach(neighbor => {
        for (let j=1; j<topOrder.length; j++) {
          if (neighbor.node === topOrder[j].node) {
            let newSPath = topOrder[i].sPath + neighbor.weight;
            if (newSPath < topOrder[j].sPath) topOrder[j].sPath = newSPath;
            
            break;
          }
        }
      });
    }

    return topOrder;
  }
}

let myGraph = new DAG();
myGraph.addEdge('a', 'b', 3);
myGraph.addEdge('a', 'c', 6);

myGraph.addEdge('b', 'c', 4);
myGraph.addEdge('b', 'd', 4);
myGraph.addEdge('b', 'e', 11);

myGraph.addEdge('c', 'd', 8);
myGraph.addEdge('c', 'g', 11);

myGraph.addEdge('d', 'e', -4);
myGraph.addEdge('d', 'f', 5);
myGraph.addEdge('d', 'g', 2);

myGraph.addEdge('e', 'h', 9);

myGraph.addEdge('f', 'h', 1);

myGraph.addEdge('g', 'h', 2);

console.log(myGraph.findShortestPath('a'));