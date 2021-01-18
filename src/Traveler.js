class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.pastTrips = [];
    this.currentTrips = [];
    this.futureTrips = [];
  }
  returnFirstNameLastInitial() {
      return this.name.split(' ')[0] + ' ' + this.name.split(' ')[1][0];
  }
}

export default Traveler;