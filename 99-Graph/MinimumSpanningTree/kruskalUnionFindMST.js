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

class UnionFind {
  id = [];
  sz = [];
  numComponents;

  constructor (n) {
    this.numComponents = n;

    for (let i=0; i<n; i++) {
      this.id[i] = i;
      this.sz[i] = 1;
    }
  }
  
  find (p) {
    if (this.id[p] === p) return p;
    return this.id[p] = this.find(this.id[p]);
  }

  isConnected (p, q) {
    return this.find(p) === this.find(q);
  }

  components () {
    return this.numComponents;
  }

  union (p, q) {
    if (this.isConnected(p, q)) return;

    let root1 = this.find(p);
    let root2 = this.find(q);

    if (this.sz[root1] < this.sz[root2]) {
      this.sz[root2] += this.sz[root1];
      this.id[root1] = root2;
    } else {
      this.sz[root1] += this.sz[root2];
      this.id[root2] = root1;
    }

    this.numComponents--;
  }
}

class Graph {
  edges = [];
  pq = new PQ();
  numNodes;

  constructor (n) {
    this.numNodes = n;
  }

  addEdge (v1, v2, priority) {
    let edge = {v1, v2, priority};
    this.edges.push(edge);
    this.pq.insert(edge);
  }

  findMST () {
    let uf = new UnionFind(this.numNodes);
    let mstCost = 0;
    let mst = [];

    while (this.pq.elements.length) {
      let edge = this.pq.poll();

      if (uf.isConnected(edge.v1, edge.v2)) continue;

      uf.union(edge.v1, edge.v2);
      mstCost += edge.priority;
      mst.push(edge);

      if (uf.components() === 1) return {mstCost, mst};
    }

    if (uf.components() === 1) return {mstCost, mst};
    else return {};
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