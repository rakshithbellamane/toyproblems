class Graph {
  nodes = {};

  visited = {};
  visitedToken = 0;

  // this will be used to track the flow path
  prev = {};

  addEdge (from, to, capacity) {
    // first create edges
    let e1 = {node: to, capacity, flow: 0};
    let e2 = {node: from, capacity: 0, flow: 0}; // this is the residual edge for the given edge

    // then make e1 the residual of e2 and viceverse
    e1.residual = e2;
    e2.residual = e1;

    // add the edges
    if (this.nodes[from]) this.nodes[from].push(e1);
    else this.nodes[from] = [e1];

    if (this.nodes[to]) this.nodes[to].push(e2);
    else this.nodes[to] = [e2];
  }

  bfs (s, t) {
    let queue = [s];
    this.visited[s] = this.visitedToken;
    // there is no edge leading upto the source. So assign null.
    this.prev[s] = {from: null, edge: null};

    while (queue.length) {
      let node = queue.shift();
      // if the node is the sink, break
      if (node === t) break;

      // get all the edges for the node.
      let edges = this.nodes[node];
      // for each edge, follow only those edges that have remaining capacity and has not been visited.
      for (let i=0; i<edges.length; i++) {
        let edge = edges[i];
        let remainingCapacity = edge.capacity - edge.flow;
      
        if (remainingCapacity > 0 && this.visited[edge.node] !== this.visitedToken) {
          queue.unshift(edge.node);
          // assign the prev node for the edge's node. We will be using this later to traverse the path and also augment/update the flow
          this.prev[edge.node] = {from: node, edge};
          this.visited[edge.node] = this.visitedToken;
        }
      }
    }

    // if we did not find any path with remaining capcity to the sink, then we return 0
    if (!this.prev[t]) return 0;

    // let us calculate the bottleneck. We will set the bottleneck to Infinity and gradually reduce it.
    let bottleNeck = Infinity;

    // starting from the edge leading to sink, find the smallest bottleneck. 
    for (let {from, edge} = this.prev[t]; edge !== null; {from, edge} = this.prev[from]) {
      let remainingCapacity = edge.capacity - edge.flow;
      bottleNeck = Math.min(bottleNeck, remainingCapacity);
    }

    // once we find the bottleneck, we update the flow for the edges in the flow path
    for (let {from, edge} = this.prev[t]; edge !== null; {from, edge} = this.prev[from]) {
      edge.flow += bottleNeck;
      edge.residual.flow -= bottleNeck;
    }

    // finally return the bottleneck
    return bottleNeck;
  }

  findMaxFlow (s, t) {
    let maxFlow = 0;
    // do a bfs until all the paths are saturated. We have reached the max flow capacity
    for (let f=this.bfs(s,t); f !== 0; f=this.bfs(s, t)) {
      maxFlow += f;
      this.visitedToken++;
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