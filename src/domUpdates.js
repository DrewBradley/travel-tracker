import {
  getDestinations,
} from './utility.js';

const tripPreview = document.querySelector('.trip-preview');
const highlight = document.querySelector('.destination-preview')
const pastTripList = document.querySelector('.past-trips')
const upcomingTripList = document.querySelector('.future-trips')
const currentTripList = document.querySelector('.current-trips')
const tripPreviewTitle = document.querySelector('.trip-preview-title');

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
    const highlightTitle = document.querySelector('.destination-preview-title')
    const highlightFlight = document.querySelector('.flight-cost')
    const hightlightDaily = document.querySelector('.expense-cost')
    const highlightImage = document.querySelector('.destination-preview-image')
    getDestinations()
    .then(places => {
      let highlightPlace = places.find(place => {
        return place.id === (Math.floor(Math.random() * 10))
      })
      highlight.classList.remove('hidden')
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
    this.checkFields();
    tripPreview.classList.remove('hidden')
    highlight.classList.add('hidden')
    const tripPreviewDestination = document.querySelector('.trip-preview-destination');
    const tripPreviewDeparture = document.querySelector('.trip-preview-leaving');
    const tripPreviewDuration = document.querySelector('.trip-preview-duration');
    const tripPreviewTotalCost = document.querySelector('.trip-preview-total-cost');
    const tripPreviewImage = document.querySelector('.trip-preview-image');
    tripPreviewTitle.innerText = `Your trip to ${destinationData.name}`
    tripPreviewImage.setAttribute('src', destinationData.image)
    tripPreviewImage.setAttribute('alt', destinationData.altText)
    tripPreviewDestination.innerHTML = `Destination ${destinationData.name}`
    tripPreviewDeparture.innerHTML = `Departing on: ${newTrip.date}`
    tripPreviewDuration.innerHTML = `Duration ${newTrip.duration}`
    tripPreviewTotalCost.innerHTML = `Cost: $${newTrip.calculateTotalCost()}`
  },
  
  login() {
    const loginScreen = document.querySelector('.login-dashboard');
    const loginName = document.querySelector('#login-user-name');
    const loginPassword = document.querySelector('#login-password');
    if (loginName.value.slice(0, 8) === 'traveler' && loginPassword.value === 'travel2020') {
      travelerID = loginName.value.slice(8, 10)
      dashboard.classList.toggle('hidden')
      loginScreen.classList.toggle('hidden')
      pageLoad();
    } else if (loginName.value.slice(0, 8) === 'traveler' && loginPassword.value !== 'travel2020') {
      let warning = document.createElement('p');
      loginScreen.appendChild(warning)
      warning.innerText = "Please enter a valid password!"
    } else if (loginName.value.slice(0, 8) !== 'traveler') {
      let warning = document.createElement('p');
      loginScreen.appendChild(warning)
      warning.innerText = "Please enter a valid username!"
    }
  },

  checkFields() {
    const tripStartDate = document.querySelector('.start-date')
    const tripEndDate = document.querySelector('.end-date')
    const travelerCount = document.querySelector('.traveler-count')
    const tripDestination = document.querySelector('.destination-list')
    const bookItButton = document.querySelector('.book-trip');
    console.log(travelerCount.value.length)
    if (tripStartDate.value && tripEndDate.value && travelerCount.value) {
      bookItButton.classList.remove('hidden')
      return
    } else {
      tripPreviewTitle.innerText = "Please fill out form completely!"
    }
  }

}