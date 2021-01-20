const tripPreview = document.querySelector('.trip-preview');
const highlight = document.querySelector('.dashboard-message')
const pastTripList = document.querySelector('.past-trips')
const upcomingTripList = document.querySelector('.future-trips')
const currentTripList = document.querySelector('.current-trips')
const tripPreviewTitle = document.querySelector('.trip-preview-title');
const dashboard = document.querySelector('.dashboard')

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
    yearCost.innerText = `$${traveler.findYearlyTravelCost(lastYear).toFixed(2)}`
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

  checkFields() {
    const tripStartDate = document.querySelector('.start-date')
    const tripEndDate = document.querySelector('.end-date')
    const travelerCount = document.querySelector('.traveler-count')
    const tripDestination = document.querySelector('.destination-list')
    const bookItButton = document.querySelector('.book-trip');

    if (tripStartDate.value && tripEndDate.value && travelerCount.value) {
      bookItButton.classList.remove('hidden')
      return
    } else {
      tripPreviewTitle.innerText = "Please fill out form completely!"
    }
  },

  showSuccessPost() {
    const messageTitle = document.querySelector('.destination-preview-title')
    const message = document.querySelector('.destination-preview-message')
    tripPreview.classList.add('hidden')
    highlight.classList.remove('hidden')
    messageTitle.innerText = "Request submitted!"
    message.innerText = "Your trip is pending. Please wait for an agent to approve!"
  }

}