class Trip {
  constructor(data) {
    this.data = data;
  }
  findUserTrips(user) {
    let userTrips = this.data.filter(element => {
      return element.userID === user
    })
    return userTrips
  }


}

export default Trip;
// id
// userID;
// destinationID;
// travelers;
// date;
// duration;
// status;
// suggestedActivities;