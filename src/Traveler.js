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

  findYearlyTravelCost(today, lastYear) {
    return this.trips.reduce((total, trip) => {
      if (trip.findTripEndDate().replaceAll("-", "/") < today) {
        total += trip.calculateTotalCost()
        return total
      }
    }, 0)
  }
}

export default Traveler;