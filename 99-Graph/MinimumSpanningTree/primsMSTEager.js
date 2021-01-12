class IPQ {
  elements = [];
  indexMap = {};

  swap (parentIndex, childIndex) {
    let parent = this.elements[parentIndex];
    let child = this.elements[childIndex];

    let temp = this.elements[parentIndex];
    this.elements[parentIndex] = this.elements[childIndex];
    this.elements[childIndex] = temp;

    this.indexMap[parent.to] = childIndex;
    this.indexMap[child.to] = parentIndex;
  }

  reHeapifyUp (childIndex) {
    let parentIndex = Math.ceil((childIndex-2)/2);

    if (parentIndex < 0) return;

    if (this.elements[childIndex].cost < this.elements[parentIndex].cost) {
      this.swap(parentIndex, childIndex);
      this.reHeapifyUp(parentIndex);
    }
  }

  reHeapifyDown (parentIndex) {
    let childIndex = (2*parentIndex+1 < this.elements.length-1 && this.elements[2*parentIndex+1].cost < this.elements[parentIndex].cost) ? 2*parentIndex+1 : parentIndex;
    childIndex = (2*parentIndex+2 < this.elements.length-1 && this.elements[2*parentIndex+2].cost < this.elements[childIndex].cost) ? 2*parentIndex+2 : childIndex;

    if (childIndex !== parentIndex) {
      this.swap(parentIndex, childIndex);
      this.reHeapifyDown(childIndex);
    }
  }

  insert (key, ele) {
    this.elements.push(ele);
    this.indexMap[key] = this.elements.length-1;

    this.reHeapifyUp(this.elements.length-1);
  }

  poll () {
    this.swap(0, this.elements.length-1);
    let ele = this.elements.pop();
    delete this.indexMap[ele.to];

    this.reHeapifyDown(0);

    return ele;
  }

  contains (key) {
    if (this.indexMap[key] === undefined) return false;
    else return true;
  }

  update (key, newEdge) {
    let index = this.indexMap[key];

    this.elements[index] = newEdge;

    this.reHeapifyUp(index);

    if (this.indexMap[key] === index) this.reHeapifyDown(index);
  }

  decreaseKey (key, newEdge) {
    let index = this.indexMap[key];
    let curEdge = this.elements[index];

    if (newEdge.cost < curEdge.cost) this.update(key, newEdge);
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
    let ipq = new IPQ();
    let mstCost = 0, mst = [];
    let visited = {};

    this.nodes[s].forEach(newEdge => {
      if (!visited[newEdge.to]) {
        if (ipq.contains(newEdge.to)) ipq.decreaseKey(newEdge.to, newEdge);
        else ipq.insert(newEdge.to, newEdge);
      }
    });
    visited[s] = true;

    while (ipq.elements.length && mst.length < this.numNodes-1) {
      let edge = ipq.poll();

      if (visited[edge.to]) continue;

      mst.push(edge);
      mstCost += edge.cost;

      this.nodes[edge.to].forEach (newEdge => {
        if (!visited[newEdge.to]) {
          if (ipq.contains(newEdge.to)) ipq.decreaseKey(newEdge.to, newEdge);
          else ipq.insert(newEdge.to, newEdge);
        }
      });
      visited[edge.to] = true;
    }

    if (mst.length !== this.numNodes-1) return {};
    
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