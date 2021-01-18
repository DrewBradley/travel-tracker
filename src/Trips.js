class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id
    this.userID = tripData.userID;
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

  whenIdThisTrip(today) {
    let endDate = this.findTripEndDate()
    if (endDate < today) {
      return "IT HAPPENED!"
      // find the user 
      // push this trip into user past array
    } else if (endDate > today && this.date > today) {
      return 'THIS IS HAPPENING!'
    } else if (this.date > today) {
      return 'THIS HAS NOT HAPPENED!'
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
