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

  findDependency (project) {
    for (let i in this.nodes) {
      if (this.nodes[i].includes(project)) return true;
    }

    return false;
  }

  completeProjects (completedProjects=[],prevCompleteProjectCount=0) {
    for(let project in this.nodes) {
      if (!completedProjects.includes(project)) {
        let hasDependency = this.findDependency(project);

        if (!hasDependency) {
          completedProjects.push(project);
          this.nodes[project] = [];
        }
      }
    }

    if (prevCompleteProjectCount < completedProjects.length) {
      prevCompleteProjectCount = completedProjects.length;
      this.completeProjects(completedProjects, prevCompleteProjectCount);
    } else {
      return completedProjects;
    }

    return completedProjects;
  }
}

let projectList = ['a','b','c','d','e','f','g'];
let myProjects = new Graph();
myProjects.addProject('a');
myProjects.addProject('b');
myProjects.addProject('c');
myProjects.addProject('d');
myProjects.addProject('e');
myProjects.addProject('f');
myProjects.addProject('g');

myProjects.addDependency('f','c');
myProjects.addDependency('f','a');
myProjects.addDependency('f','b');

myProjects.addDependency('a','e');

myProjects.addDependency('b','e');
myProjects.addDependency('b','a');

myProjects.addDependency('c','a');

myProjects.addDependency('d','g');

console.log(myProjects.nodes);
console.log(myProjects.completeProjects());
