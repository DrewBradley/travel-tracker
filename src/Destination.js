class Destination {
  constructor(id, destination, estimatedLodgingCostPerDay, estimatedFlightCostPerPerson, image, text) {
    this.id = id;
    this.name = destination;
    this.costPerDay = estimatedLodgingCostPerDay;
    this.costPerPerson = estimatedFlightCostPerPerson;
    this.image = image;
    this.altText = text;
  }
}

export default Destination;