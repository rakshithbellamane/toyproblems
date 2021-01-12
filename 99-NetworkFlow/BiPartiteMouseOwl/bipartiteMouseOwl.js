class Graph {
  nodes = {};

  visited = {};
  visitedToken = 0;

  addEdge (from, to, capacity) {
    let e1 = {node: to, capacity, flow: 0};
    let e2 = {node: from, capacity: 0, flow: 0};

    e1.residual = e2;
    e2.residual = e1;

    if (this.nodes[from]) this.nodes[from].push(e1);
    else this.nodes[from] = [e1];

    if (this.nodes[to]) this.nodes[to].push(e2);
    else this.nodes[to] = [e2];
  }

  dfs (node, t, flow) {
    if (node === t) return flow;
    this.visited[node] = this.visitedToken;

    let edges = this.nodes[node];

    for (let i=0; i<edges.length; i++) {
      let edge = edges[i];
      let remainingCapacity = edge.capacity - edge.flow;

      if (remainingCapacity > 0 && this.visited[edge.node] !== this.visitedToken) {
        let bottleneck = this.dfs(edge.node, t, Math.min(flow, remainingCapacity));

        if (bottleneck > 0) {
          edge.flow += bottleneck;
          edge.residual -= bottleneck;

          return bottleneck;
        }
      }
    }

    return 0;
  }

  findMaxFlow (s, t) {
    let maxFlow = 0;
    for (let f=this.dfs(s, t, Infinity); f !== 0; f=this.dfs(s, t, Infinity)) {
      this.visitedToken++;
      maxFlow += f;
    }

    return maxFlow;
  }
}

let myGraph = new Graph();

let mice = [{x: 1, y: 0}, {x: 0, y: 1}, {x: 8, y: 1}, {x: 12, y: 0}, {x: 12, y: 4}, {x: 15, y: 5}];
let holes = [{x: 1, y: 1, capacity: 1}, {x: 10, y: 2, capacity: 2}, {x: 14, y: 5, capacity: 1}];
let radius = 3;

let n = mice.length+holes.length+2;
let s = n-1;
let t = n-2;

mice.forEach((mouse, m) => myGraph.addEdge(s, m, 1));

mice.forEach((mouse, m) => {
  holes.forEach((hole, h) => {
    let mouseIndex = m;
    let holeIndex = mice.length+h;
    if (Math.sqrt(Math.pow((hole.x - mouse.x),2)+Math.pow((hole.y - mouse.y),2)) <= radius) myGraph.addEdge(mouseIndex, holeIndex, hole.capacity);
  });
});

holes.forEach((hole, h) => myGraph.addEdge(mice.length+h, t, hole.capacity));

console.log(myGraph.findMaxFlow(s, t));