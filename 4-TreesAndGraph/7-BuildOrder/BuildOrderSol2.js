class Graph {
  nodes = {};

  addProject (project) {
    if (project === null) return;
    
    this.nodes[project] = [];
  }

  addDependency (project, dependent) {
    if (!project || !dependent) return;

    if (!this.nodes[project] || !this.nodes[dependent]) return;

    this.nodes[project].push(dependent);
  }

  doDFS (project, visited={}, incompleteProjects, completedProjects=[]) {
    let noCycle = true;
    if (!this.nodes[project]) return false;

    if (visited[project] === 'PARTIAL') return false;

    if (completedProjects.includes(project)) return true;

    visited[project] = 'PARTIAL';

    this.nodes[project].forEach(dependent => {  
      noCycle = this.doDFS(dependent, visited, incompleteProjects, completedProjects);
    });

    if (noCycle) {
      completedProjects.unshift(project);
      visited[project] = 'COMPLETE';
  
      return true;
    } else {
      return false;
    }
  }

  completeProjects (project, visited, incompleteProjects, completedProjects) {
    let noCycle = this.doDFS(project, visited, incompleteProjects, completedProjects);

    if (noCycle) {
      if (incompleteProjects.length === 0) return true;
      let newProject = incompleteProjects.pop();
      return this.completeProjects(newProject, visited, incompleteProjects, completedProjects);
    } else {
      return false;
    }
  }
}

let projectList = ['a','b','c','d','e','f','g','h'];
let incompleteProjects = ['a','b','c','d','e','f','g','h'];
let myProjects = new Graph();
myProjects.addProject('a');
myProjects.addProject('b');
myProjects.addProject('c');
myProjects.addProject('d');
myProjects.addProject('e');
myProjects.addProject('f');
myProjects.addProject('g');
myProjects.addProject('h');

myProjects.addDependency('f','c');
myProjects.addDependency('f','a');
myProjects.addDependency('f','b');

myProjects.addDependency('a','e');

myProjects.addDependency('b','e');
myProjects.addDependency('b','a');
myProjects.addDependency('b','h');

myProjects.addDependency('c','a');

myProjects.addDependency('d','g');

myProjects.addDependency('h','f');

console.log(myProjects.nodes);
let completedProjects = [];
let visited = {};
console.log(myProjects.completeProjects('b', visited, incompleteProjects, completedProjects));
console.log(completedProjects);
