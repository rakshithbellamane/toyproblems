// directed graph
class Graph {
  nodes = {};
  ids = [];
  low = [];
  stack = [];

  id = 0;
  totalScc = 0;
  numNodes;

  constructor (n) {
    this.numNodes = n;
    for (let i =0; i<n; i++) this.ids[i] = -1;
  }

  addEdge (from, to) {
    if (this.nodes[from]) this.nodes[from].push(to);
    else this.nodes[from] = [to];
  }

  dfs (at) {
    this.ids[at] = this.low[at] = this.id++;
    this.stack.push(at);
    
    this.nodes[at].forEach(to => {
      if (this.ids[to] === -1) this.dfs(to);
      if (this.stack.includes(to)) this.low[at] = Math.min(this.low[at], this.low[to]);
    });

    if (this.ids[at] === this.low[at]) {
      let node = this.stack.pop();
      while (node !== at) node = this.stack.pop();
      this.totalScc++;
    }
  }

  findSCC () {
    for (let i=0; i<this.numNodes; i++) {
      if (this.ids[i] === -1) this.dfs(i);
    }

    return {low: this.low, totalScc: this.totalScc};
  }
}

let myGraph = new Graph(8);
myGraph.addEdge(0,1);
myGraph.addEdge(0,2);
myGraph.addEdge(1,0);
myGraph.addEdge(1,3);
myGraph.addEdge(2,3);
myGraph.addEdge(3,4);
myGraph.addEdge(3,5);
myGraph.addEdge(4,2);
myGraph.addEdge(4,5);
myGraph.addEdge(4,6);
myGraph.addEdge(5,7);
myGraph.addEdge(6,5);
myGraph.addEdge(7,6);

console.log(myGraph.findSCC());