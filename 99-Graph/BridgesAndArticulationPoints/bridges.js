class Graph {
  nodes = {};
  low = [];
  id = [];
  bridges = [];

  addEdge (from, to) {
    if (this.nodes[from]) this.nodes[from].push(to);
    else this.nodes[from] = [to];

    if (this.nodes[to]) this.nodes[to].push(from);
    else this.nodes[to] = [from];

    this.low[from] = this.id[from] = from;
    this.low[to] = this.id[to] = to;
  }

  dfs (node, parent, visited) {
    visited[node] = true;

    for (let i=0; i<this.nodes[node].length; i++) {
      let edge = this.nodes[node][i];

      if (edge === parent) continue;
      
      if (!visited[edge]) {
        visited[edge] = true;
        this.dfs(edge, node, visited);
        
        this.low[node] = Math.min(this.low[edge], this.low[node]);
        if (this.id[node] < this.low[edge]) this.bridges.push({from: node, to: edge});
      } else {
        this.low[node] = Math.min(this.low[node], this.id[edge]);
      }
    }
  }

  findBridges () {
    let visited = {};
    for (let node in this.nodes) {
      if (!visited[node]) {
        this.dfs(node, -1, visited);
      }
    }

    return this.bridges;
  }
}

let myGraph = new Graph();
myGraph.addEdge(0,1);
myGraph.addEdge(1,2);
myGraph.addEdge(2,0);
myGraph.addEdge(2,3);
myGraph.addEdge(2,5);
myGraph.addEdge(3,4);
myGraph.addEdge(5,6);
myGraph.addEdge(6,7);
myGraph.addEdge(7,8);
myGraph.addEdge(8,5);

// myGraph.addEdge(0,1);
// myGraph.addEdge(0,2);
// myGraph.addEdge(1,2);
// myGraph.addEdge(2,3);
// myGraph.addEdge(2,4);
// myGraph.addEdge(3,4);

console.log(myGraph.findBridges());