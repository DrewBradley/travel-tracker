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

  isPast(today){
    if (this.date < today) {
      return { "id": this.id, "destination": this.destinationID, "date": this.date }
    }
  }

  isCurrent(today) {
    let currentDate = new Date(this.date);
    let datesArray = []
    for (let i = 0; i < this.duration; i++){
      currentDate.setDate(currentDate.getDate()+1);
      datesArray.push(currentDate.toISOString().slice(0,10).replaceAll("-", "/"));
    }
    if (datesArray.includes(today)) {
      console.log('THIS IS HAPPENING!')
    }
  }
  
  isFuture(today){
    if (this.date > today) {
      return { "id": this.id, "destination": this.destinationID, "date": this.date }
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
