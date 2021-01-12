class Graph {
  nodes = {};

  // fields to track visited status
  visited = {};
  visitedToken = 0;

  addEdge (from, to, capacity) {
    let e1 = {node: to, capacity, flow: 0};
    let e2 = {node: from, capacity: 0, flow: 0};

    e1.residual = e2;
    e2.residual = e1;

    if (this.nodes[from]) this.nodes[from].push(e1);
    else this.nodes[from] = [e1];

    // add the residual edge with capacity 0
    if (this.nodes[to]) this.nodes[to].push(e2);
    else this.nodes[to] = [e2];
  }

  dfs (node, t, flow) {
    // if node === t (sink), return flow;
    if (node === t) return flow;

    this.visited[node] = this.visitedToken;

    let edges = this.nodes[node];
    
    // perform dfs for each edge for the node
    for (let i=0; i<edges.length; i++) {
      let edge = edges[i];
      let remainingCapacity = edge.capacity - edge.flow;

      // follow the edge only if there is remaining capacity and the edge has not been visited in the current run
      if (remainingCapacity > 0 && this.visited[edge.node] !== this.visitedToken) {
        // the flow the can be passed through the edge is the min of bottleneck/flow value so far and the capacity of the edge
        let bottleneck = this.dfs(edge.node, t, Math.min(flow, remainingCapacity));

        // once we know the min/bottleneck capacity for the path, augment the path flow for the edge and its residual edge.
        if (bottleneck > 0) {
          edge.flow += bottleneck;
          edge.residual.flow -= bottleneck;

          return bottleneck;
        }
      }
    }

    return 0;
  }

  findMaxFlow (s, t) {
    let maxFlow = 0;
    // find augmenting path flows until there is no more capacity left
    for (let f = this.dfs(s, t, Infinity); f !== 0; f = this.dfs(s, t, Infinity)) {
      // visitedToken allows us to reuse the visited array for subsequent loops without resetting the visited array
      this.visitedToken++;
      // update the maxFlow of the graph using the bottleneck/flow value for each dfs 
      maxFlow += f;
    }

    return maxFlow;
  }
}

let n = 11;
let s = n-1;
let t = n-2;

let myGraph = new Graph();

myGraph.addEdge(s,0,10);
myGraph.addEdge(s,1,5);
myGraph.addEdge(s,2,10);

myGraph.addEdge(0,3,10);
myGraph.addEdge(1,2,10);
myGraph.addEdge(2,5,15);
myGraph.addEdge(3,1,20);
myGraph.addEdge(3,6,15);
myGraph.addEdge(4,1,15);
myGraph.addEdge(4,3,3);
myGraph.addEdge(5,4,4);
myGraph.addEdge(5,8,10);
myGraph.addEdge(6,7,10);
myGraph.addEdge(6,t,15);
myGraph.addEdge(7,4,10);
myGraph.addEdge(7,5,7);
myGraph.addEdge(8,t,10);

console.log(myGraph.findMaxFlow(s, t));
console.log(myGraph);
