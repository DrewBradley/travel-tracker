class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id
    this.userID = tripData.userID;
    this.happeningData;
    this.destinationID = tripData.destinationID;
    this.destinationData = destinationData;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
  }

  findTripEndDate() {
    let date = new Date(this.date)
    let endDate = new Date(date.setDate(date.getDate() + this.duration))
    return new Date(endDate).toISOString().slice(0,10)
  }

  whenIsThisTrip(today) {
    let endDate = this.findTripEndDate().replaceAll("-", "/")
    let startDate = this.date;
    if (endDate > today && startDate < today) {
      this.happeningData = 'current';
    } else if (endDate < today) {
      this.happeningData = 'past';
    } else if (this.date > today) {
      this.happeningData = 'upcoming';
    }
  }

  calculateAgentFee(totalTravelCost){
    let agentFee = totalTravelCost/10;
    return agentFee
  }

  calculateTripCost() {
    let tripCostPerPerson = this.destinationData.costPerPerson + (this.destinationData.costPerDay * this.duration)
    return tripCostPerPerson * this.travelers;
  }

  calculateTotalCost() {
    let travelCost = this.calculateTripCost();
    let agentFee = this.calculateAgentFee(travelCost);
    return travelCost + agentFee
  }

}

export default Trip;
