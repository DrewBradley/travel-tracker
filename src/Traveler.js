import Trip from "./Trips";

class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.trips = [];
  }
  returnFirstNameLastInitial() {
    return this.name.split(' ')[0] + ' ' + this.name.split(' ')[1][0];
  }
  
  isThisMyTrip(trip) {
    if (trip.userID === this.id) {
      this.trips.push(trip)
    }
  }
}

export default Traveler;