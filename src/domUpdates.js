import {
  getDestinations,
} from './utility.js';

export const domUpdates = {
  
  displayTravelerName(traveler){
    const dashboardGreeting = document.querySelector('.dashboard-greeting')
    dashboardGreeting.innerText = "Hello, " + (traveler.returnFirstNameLastInitial())
  },

  addToDestinationList(destination) {
    const destinationList = document.querySelector('.destination-list')
    let option = document.createElement('option');
    destinationList.appendChild(option);
    option.innerText = `${destination.name}`
    option.setAttribute('value', `${destination.id}`)
  },

  displayHighlight(){
    const highlight = document.querySelector('.destination-preview')
    const highlightTitle = document.querySelector('.destination-preview-title')
    const highlightFlight = document.querySelector('.flight-cost')
    const hightlightDaily = document.querySelector('.expense-cost')
    const highlightImage = document.querySelector('.destination-preview-image')
    getDestinations()
    .then(places => {
      let highlightPlace = places.find(place => {
        return place.id === (Math.floor(Math.random() * 50))
      })
      highlightTitle.innerText = `${highlightPlace.name}`
      highlightFlight.innerText = `Flights start at $${highlightPlace.costPerPerson}`
      hightlightDaily.innerText = `Stay for as little as $${highlightPlace.costPerDay} a day!`
      highlightImage.setAttribute('src', highlightPlace.image)
      highlightImage.setAttribute('alt', highlightPlace.altText)
    })
  },

  showTrip(parent, trip){
    let li = document.createElement('li');
    parent.appendChild(li);
    li.innerText = `${trip.destinationData.name}, Date: ${trip.date}, ${trip.duration} days, Cost: $${trip.calculateTotalCost().toFixed(2)}, Status: ${trip.status}, TripID: ${trip.id}`
  },

  displayUserTrips(traveler){
    traveler.trips.forEach(trip => {
      const pastTripList = document.querySelector('.past-trips')
      const upcomingTripList = document.querySelector('.future-trips')
      const currentTripList = document.querySelector('.current-trips')
      if (trip.happeningData === 'past') {
        this.showTrip(pastTripList, trip);
      } else if (trip.happeningData === 'upcoming') {
        this.showTrip(upcomingTripList, trip);
      } else if (trip.happeningData === 'current') {
        this.showTrip(currentTripList, trip);
      }
    })
  },

  displayYearlyCost(traveler) {
    let lastYear = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().slice(0,10).replaceAll("-", "/")
    const yearCost = document.querySelector('.dashboard-year-cost');
    yearCost.innerText = `You have spent $${traveler.findYearlyTravelCost(lastYear).toFixed(2)} in the last year.`
  },
  
  displayEstimate(newTrip, destinationData) {
    tripPreviewTitle.innerText = `Your trip to ${destinationData.name}`
    tripPreviewData.innerHTML = `
    <p class="destination">Destination ${destinationData.name}</p>
    <p class="leaving">Departing on: ${newTrip.date}</p>
    <p class="duration">Duration ${newTrip.duration}</p>
    <p class="total-cost">Cost: $${newTrip.calculateTotalCost()}</p>
    <button class="book-trip">Book It!</button>`
    tripPreviewImage.setAttribute('src', destinationData.image)
    tripPreviewImage.setAttribute('alt', destinationData.altText)
  },

}