class Graph {
  nodes = {};
  numNodes = 0;

  constructor(n) {
    this.numNodes = n;
  }

  addEdge (from, to) {
    if (this.nodes[from]) this.nodes[from].push(to);
    else this.nodes[from] = [to];

    if (this.nodes[to]) this.nodes[to].push(from);
    else this.nodes[to] = [from];
  }

  findTreeCenters () {
    let degree = [];
    let leaves = [], nextLeaves = [];
    let count = 0;

    for (let i in this.nodes) {
      degree[i] = this.nodes[i].length;
      if (degree[i] === 0 || degree[i] === 1) {
        leaves.push(i);
        degree[i] = 0;
      }
    }

    count += leaves.length;

    while (count < this.numNodes) {
      nextLeaves = [];

      leaves.forEach(leaf => {
        this.nodes[leaf].forEach(neighbor => {
          if (degree[neighbor] > 0) degree[neighbor]--;
          if (degree[neighbor] === 1) nextLeaves.push(neighbor);
        });
        degree[leaf] =0;
      });

      count += nextLeaves.length;
      leaves = [...nextLeaves];
    }

    return leaves;
  }

  rootTree (root, parent=null) {
    this.nodes[root.val].forEach(node => {
      if (parent && node === parent.val) return;

      let child = new Tree(node, root);
      root.children.push(child);
      this.rootTree(child, root);
    });

    return root;
  }
}

class Tree {
  val;
  children;
  parent;

  constructor (node, nodeParent) {
    this.val = node;
    this.children = [];
    this.parent = nodeParent;
  }

  encode () {
    if (this.children.length === 0) return '()';

    let labels = [];
    this.children.forEach(child => labels.push(child.encode()));

    labels.sort();

    return `(${labels.join('')})`;
  }
}

const isIsomorphic = (graph1, graph2) => {
  let graph1Centers = graph1.findTreeCenters();
  let graph2Centers = graph2.findTreeCenters();

  let tree1 = graph1.rootTree(new Tree(graph1Centers[0]));
  let tree1Code = tree1.encode();

  for (let i=0; i<graph2Centers.length ; i++) {
    let tree2 = graph2.rootTree(new Tree(graph2Centers[i]));
    let tree2Code = tree2.encode();

    if (tree1Code === tree2Code) return true;
  }

  return false;
}

let myGraph1 = new Graph(6);
myGraph1.addEdge(0,1);
myGraph1.addEdge(1,2);
myGraph1.addEdge(1,4);
myGraph1.addEdge(3,4);
myGraph1.addEdge(3,5);

let myGraph2 = new Graph(6);
myGraph2.addEdge(0,1);
myGraph2.addEdge(1,2);
myGraph2.addEdge(2,4);
myGraph2.addEdge(3,4);
myGraph2.addEdge(4,5);

console.log(isIsomorphic(myGraph1, myGraph2));