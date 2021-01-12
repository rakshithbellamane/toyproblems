class WeightedDirectedGraph {
  nodes = {};

  addEdge (from, to, weight) {
    if (!this.nodes[from]) this.nodes[from] = [{node: to, weight}];
    else this.nodes[from].push({node: to, weight});
  }

  findComponents () {
    let visited = {};
    for (let node in this.nodes) {
      if (!visited[node]) {
        console.log(this.dfs(node, visited));
      }
    }

    return;
  }

  dfs (node, visited = {}, path=[]) {
    if (visited[node]) return;

    visited[node] = true;
    path.push(node);

    let totalWeight = 0;
    let neighbors = this.nodes[node];

    if (neighbors) {
      for (let i=0; i<neighbors.length; i++) {
        if (!visited[neighbors[i].node]) {
          totalWeight += this.dfs(neighbors[i].node, visited, path).totalWeight + neighbors[i].weight;
        }
      }
    }

    return {path, totalWeight};
  }
}

let myGraph = new WeightedDirectedGraph();
myGraph.addEdge(0,4,1);
myGraph.addEdge(0,13,1);
myGraph.addEdge(0,14,1);
myGraph.addEdge(4,8,1);
myGraph.addEdge(8,14,1);
myGraph.addEdge(13,14,1);

myGraph.addEdge(12,12,0);

myGraph.addEdge(6,7,1);
myGraph.addEdge(7,11,1);
myGraph.addEdge(11,6,1);

myGraph.addEdge(3,9,1);
myGraph.addEdge(15,9,1);
myGraph.addEdge(15,2,1);
myGraph.addEdge(2,9,1);
myGraph.addEdge(10,15,1);

myGraph.findComponents();