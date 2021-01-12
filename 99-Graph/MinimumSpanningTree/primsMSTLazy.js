class PQ {
  elements = [];

  reHeapifyUp (childIndex) {
    let parentIndex = Math.ceil((childIndex-2)/2);
    
    if (parentIndex < 0) return;

    if (this.elements[parentIndex].priority > this.elements[childIndex].priority) {
      let temp = this.elements[parentIndex];
      this.elements[parentIndex] = this.elements[childIndex];
      this.elements[childIndex] = temp;

      this.reHeapifyUp(parentIndex);
    }
  }

  reHeapifyDown (parentIndex) {
    let childIndex = (2*parentIndex+1 < this.elements.length && this.elements[2*parentIndex+1].priority < this.elements[parentIndex].priority) ? 2*parentIndex+1 : parentIndex;
    childIndex = (2*parentIndex+2 < this.elements.length && this.elements[2*parentIndex+2].priority < this.elements[childIndex].priority) ? 2*parentIndex+2 : childIndex;

    if (childIndex !== parentIndex) {
      let temp = this.elements[parentIndex];
      this.elements[parentIndex] = this.elements[childIndex];
      this.elements[childIndex] = temp;

      this.reHeapifyDown(childIndex);
    }
  }

  insert (ele) {
    this.elements.push(ele);
    this.reHeapifyUp(this.elements.length-1);
  }

  poll () {
    let ele = this.elements[0];
    this.elements[0] = this.elements.pop();
    this.reHeapifyDown(0);

    return ele;
  }
}

class Graph {
  nodes = {};
  numNodes;

  constructor (n) {
    this.numNodes = n;
  }

  addEdge (fromNode, toNode, cost) {
    if (this.nodes[fromNode]) this.nodes[fromNode].push({from: fromNode, to: toNode, cost});
    else this.nodes[fromNode] = [{from: fromNode, to: toNode, cost}];

    if (this.nodes[toNode]) this.nodes[toNode].push({from: toNode, to: fromNode, cost});
    else this.nodes[toNode] = [{from: toNode, to: fromNode, cost}];
  }
  
  findMST (s=0) {
    let pq = new PQ();
    let visited = {};
    let mstCost = 0, mst = [];

    // add edges from s into a min PQ 
    this.nodes[s].forEach(edge => {
      if (!visited[edge.to]) {
        pq.insert({from: edge.from, to: edge.to, priority: edge.cost});
      }
    });
    visited[s] = true;

    // loop through the edges in PQ 
    while (pq.elements.length && mst.length < this.numNodes-1) {
      let edge = pq.poll();

      // skip nodes that we have already visited to avoid cycles
      if (visited[edge.to]) continue;

      mst.push(edge);
      mstCost += edge.priority;
      visited[edge.to] = true;
      
      // add edges leading from edge.to into pq
      this.nodes[edge.to].forEach(newEdge => {
        if (!visited[newEdge.to]) {
          pq.insert({from: newEdge.from, to: newEdge.to, priority: newEdge.cost});
        }
      });
    }

    // if number of edges in mst is not equal to numNodes-1 in graph, we did not find an mst
    if (mst.length < this.numNodes-1) return {};

    return {mstCost, mst};
  }
}

let myGraph = new Graph(10);
myGraph.addEdge(0,1,5);
myGraph.addEdge(0,3,9);
myGraph.addEdge(0,4,1);
myGraph.addEdge(1,3,2);
myGraph.addEdge(1,2,4);
myGraph.addEdge(2,7,4);
myGraph.addEdge(2,8,1);
myGraph.addEdge(2,9,8);
myGraph.addEdge(3,4,2);
myGraph.addEdge(3,5,5);
myGraph.addEdge(3,6,11);
myGraph.addEdge(3,7,2);
myGraph.addEdge(4,5,1);
myGraph.addEdge(5,6,7);
myGraph.addEdge(6,7,1);
myGraph.addEdge(6,8,4);
myGraph.addEdge(7,8,6);
myGraph.addEdge(8,9,0);

console.log(myGraph.findMST());