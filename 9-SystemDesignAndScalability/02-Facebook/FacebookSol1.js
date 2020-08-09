// class to represent all the people and their friends
class Graph {
  people = {};

  // adds a person (node) to the graph
  addPerson (name) {
    this.people[name] = [];
  }

  // adds a friend (edge) to a person
  addFriend (name, friend) {
    this.people[name].push(friend);
    this.people[friend].push(name);
  }

  // finds the shortest path of friends between two persons
  findShortestPath (person1, person2) {
    // since the Graph is a common entity, create a data store for tracking nodes to be visited and visited nodes while traversing the graph
    let person1Data = new PersonData(this, person1);
    let person2Data = new PersonData(this, person2);

    // loop through until either person1's data or person2's data is empty
    // We will traverse person1 -> person2 and then person2 -> person1 and see where the traversal collides
    // this is a breadth first search but doing one level at a time
    while(person1Data.queue.length > 0 && person2Data.queue.length > 0) {
      // find the common friend by traversing person1 -> person2 one level at a time
      let commonFriend = this.findCommonFriend(person1Data, person2Data);

      // if we have found the common friend, form the path from person1 <-> person2
      if (commonFriend) {
        return this.mergeFriendList(person1, person1Data, person2, person2Data, commonFriend);
      }

      // if we did not find the common friend while searching person1 -> person2, we search from person2 -> person1 on level at a time
      commonFriend = this.findCommonFriend(person2Data, person1Data);

      // if we have found the common friend, form the path from person1 <-> person2
      if (commonFriend) {
        return this.mergeFriendList(person1, person1Data, person2, person2Data, commonFriend);
      }
    }
  }

  // this function tries to find a common friend using fromPerson's data and toPerson's data
  findCommonFriend (fromPerson, toPerson) {
    // since we want to search one level at a time, we don't want to push the friends into the queue because it will otherwise traverse the entire bfs
    let nextToSearchQueue = [];

    // loop through all the friends of fromPerson in the current level 
    while (fromPerson.queue.length > 0) {
      // get the first friend in the queue. We also get a reference back to friend's friend.
      let { prevFriend, friend: fromPersonFriend } = fromPerson.queue.shift();
      // mark the friend as visited
      fromPerson.visited[fromPersonFriend] = { prevFriend };

      // check if friend of fromPerson was already in toPerson's friends. If yes, then we have found the common friend. 
      if (toPerson.visited[fromPersonFriend]) return fromPersonFriend;

      // If the friend was not in toPerson's friend list, then add all the fromPerson's friend's friends so that we can loop through next time
      this.people[fromPersonFriend].forEach(friend => {
        // add to the queue to be searched next time only if the friend was not visitied earlier or the friend is not already in the queue
        if (!fromPerson.queue.includes(friend) && !fromPerson.visited[friend]) nextToSearchQueue.push({prevFriend: fromPersonFriend, friend});
      });
    }

    // add all the friends to be traversed next into the fromPerson's queue
    nextToSearchQueue.forEach(friend => fromPerson.queue.push(friend));
  }

  // this function creates a path person1 -> commonFriend -> person2
  mergeFriendList (person1, person1Data, person2, person2Data, commonFriend) {
    let path = [];

    // push the common friend. We will start moving up from the common friend all the way to person1 using the prevFriend link
    path.push(commonFriend);
    let prevFriend = person1Data.visited[commonFriend].prevFriend;

    // loop until preFriend is null which is the node for person1.
    while (prevFriend !== null) {
      // add it to the front the path;
      path.unshift(prevFriend);
      // get previous friend and move up one level
      prevFriend = person1Data.visited[prevFriend].prevFriend;
    }

    // start from the common friend in person2's friend list. We will not push commonFriend into the path because we already added that person.
    prevFriend = person2Data.visited[commonFriend].prevFriend;

    // loop until person2's node
    while (prevFriend !== null) {
      // we now push the friends to end of the path untill we reach person2
      path.push(prevFriend);
      prevFriend = person2Data.visited[prevFriend].prevFriend;
    }

    // return the formed path
    return path;
  }
}


// this class is to store the temporary data while determining common friend and later path from person1 -> commonFriend -> person2
class PersonData {
  // this queue stores the friends to traverse
  queue = [];
  // this map stores the friends who were visited
  visited = {};

  // the constructor takes the graph reference and the person in the graph and loads all the person's friends into the queue to be traversed.
  // it also marks self as a person visited. This will help us in creating the path.
  constructor (graph, person) {
    graph.people[person].forEach(friend => this.queue.push({prevFriend: person, friend}));
    this.visited[person] = { prevFriend: null};
  }
}

let facebook = new Graph();
facebook.addPerson('a');
facebook.addPerson('b');
facebook.addPerson('c');
facebook.addPerson('d');
facebook.addPerson('e');
facebook.addPerson('f');
facebook.addFriend('a','b');
facebook.addFriend('b','c');
facebook.addFriend('b','d');
facebook.addFriend('c','f');
facebook.addFriend('e','f');

console.log(facebook);
console.log(facebook.findShortestPath('a','e'));