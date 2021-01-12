class UndirectGraph {
  nodes = {};

  addEdge (from, to) {
    if (!this.nodes[from]) this.nodes[from] = [to];
    else this.nodes[from].push(to);

    if (!this.nodes[to]) this.nodes[to] = [from];
    else this.nodes[to].push(from);
  }

  dfs (node, visited={}, path=[]) {
    if (visited[node]) return;

    visited[node] = true;
    path.push(node);

    let neighbors = this.nodes[node];
    for (let i=0; i<neighbors.length; i++) {
      if (!visited[neighbors[i]]) this.dfs(neighbors[i], visited, path);
    }

    return path;
  }
}

let myGraph = new UndirectGraph();
myGraph.addEdge(0,1);
myGraph.addEdge(0,2);
myGraph.addEdge(1,2);
myGraph.addEdge(1,3);
myGraph.addEdge(2,3);
myGraph.addEdge(2,2);

console.log(myGraph.dfs(0));
console.log(myGraph.dfs(1));
console.log(myGraph.dfs(2));
console.log(myGraph.dfs(3));
