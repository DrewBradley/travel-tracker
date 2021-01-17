class Traveler {
  constructor(id, name, travelerType) {
    this.id = id;
    this.name = name;
    this.travelerType = travelerType;
    this.pastTrips = [];
    this.currentTrips = [];
    this.futureTrips = [];
  }
  returnFirstNameLastInitial() {
      return this.name.split(' ')[0] + ' ' + this.name.split(' ')[1][0];
  }
}

export default Traveler;