class Destination {
  constructor(destination) {
    this.id = destination.id;
    this.name = destination.destination;
    this.costPerDay = destination.estimatedLodgingCostPerDay;
    this.costPerPerson = destination.estimatedFlightCostPerPerson;
    this.image = destination.image;
    this.altText = destination.text;
  }
  
  returnDestinationName(id) {
    if (this.id === id){
      return this.name;
    }
  }
}

export default Destination;