class Call {
  static statusTypes = {
    OPEN: 'open',
    ASSIGNED: 'assigned',
    CLOSED: 'closed'
  }

  status;
  assignee;
  grade;
  
  constructor (inputGrade) {
    this.grade = inputGrade;
    this.status = Call.statusTypes.OPEN;
    this.assignee = null;
  }
}

class CallCenter {
  allRespondents = [];
  allManagers = [];
  allDirectors = [];
  openCallQueue = [];
  
  availableToRespond = {
    respondents: [],
    managers: [],
    directors: [],
  };

  busyResponding = {
    respondents: [],
    managers: [],
    directors: [],
  };

  constructor (respondents, managers, directors) {
    respondents.forEach(respondent => {
      this.allRespondents.push(respondent);
      this.availableToRespond[respondents].push(respondent);
    });

    managers.forEach(manager => {
      this.allManagers.push(manager);
      this.availableToRespond[managers].push(manager);
    });

    directors.forEach(director => {
      this.allDirectors.push(director);
      this.availableToRespond[directors].push(director);
    })
  }

  dispatchCall (call, grade) {
    let assignee = null;

    if (grade === 'respondent') {
      if (this.availableToRespond['respondents'].length > 0) {
        assignee = this.availableToRespond['respondents'].pop();

        call.assignee = assignee;
        call.status = Call.statusTypes.ASSIGNED;

        assignee.receiveCall(call);
      } else {
        this.reassignCall(call, 'manager');
      }
    }

    if (call.grade === 'manager') {

    }

    if (call.grade === 'director') {

    }
  }

  isAvailableToTakeCall (grade) {
    return this.availableToRespond[grade].length > 0;
  }

  reassignCall (call, grade) {
    if (grade === 'manager' && this.isAvailableToTakeCall('manager')) {
      this.dispatchCall(call, 'manager');
    } else if (grade === 'director' && this.isAvailableToTakeCall('director')) {
      this.dispatchCall(call, 'director');
    } else {
      this.openCallQueue.push(call);
    }
  }
}

class Employee {
  assignedCall;
  grade;

  constructor (inputGrade) {
    this.grade = inputGrade;
  }

  receiveCall (callCenter, call) {

  }

  completeCall (callCenter, call) {

  }

  escalateCall (callCenter, call) {

  }
}

class Respondent extends Employee{
  constructor() {
    super('respondent');
  }

  receiveCall (callCenter, call) {
    let ableToHandle = true;
    if (ableToHandle) {
      callCenter.busyResponding['respondents'].push(this);
    } else {
      this.escalateCall(callCenter, call, 'manager');
    }
  }
}

class Manager {

}

class Director {

}