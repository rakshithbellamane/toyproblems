const findFreeRoom = (rooms, meeting) => {
  for (let i=0; i<rooms.length; i++) {
    if (rooms[i][1] <= meeting[0]) return i;
  }

  return null;
}

const minMeetingRooms = meetings => {
  let sortedMeetings = meetings.sort((a,b) => (a[0]-b[0]));
  let rooms = [];
  let minRooms = 0;

  for(let i=0; i<sortedMeetings.length; i++) {
    let freeRoom = findFreeRoom(rooms, sortedMeetings[i]);

    if (freeRoom === null) {
      rooms.push(sortedMeetings[i]);
      minRooms++;
    } else {
      rooms[freeRoom] = sortedMeetings[i];
    }
  }

  return minRooms;
}

const meetings = [[4,5], [2,3], [2,4], [3,5]];
console.log(minMeetingRooms(meetings));