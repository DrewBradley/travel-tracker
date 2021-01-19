// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/ExcursiOnward-logo.png'
import './images/map-background.jpg'

import Trip from './Trips';
import Destination from './Destination'
import Traveler from './Traveler'
import Agency from './Agency'

import {
  getTraveler,
  getTrips,
  getDestinations,
  addTrip,
  updateTrip,
  deleteTrip
} from './utility.js';
let today = new Date().toISOString().slice(0,10).replaceAll("-", "/")
let lastYear = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().slice(0,10).replaceAll("-", "/");

// login
const loginScreen = document.querySelector('.login-dashboard');
const loginName = document.querySelector('#login-user-name');
const loginPassword = document.querySelector('#login-password');
const loginButton = document.querySelector('.login-button');

// dashboard
const dashboard = document.querySelector('.dashboard')
const dashboardGreeting = document.querySelector('.dashboard-greeting')
const destinationList = document.querySelector('.destination-list')
const pastTripList = document.querySelector('.past-trips')
const upcomingTripList = document.querySelector('.future-trips')
const currentTripList = document.querySelector('.current-trips')

// trip request selectors
const tripStartDate = document.querySelector('.start-date')
const tripEndDate = document.querySelector('.end-date')
const travelerCount = document.querySelector('.traveler-count')
const tripDestination = document.querySelector('.destination-list')
const estimateButton = document.querySelector('.get-estimate')

const tripPreviewTitle = document.querySelector('.trip-preview-title');
const tripPreviewData = document.querySelector('.trip-preview-data');
const tripPreviewImage = document.querySelector('.trip-preview-image');
const yearCost = document.querySelector('.dashboard-year-cost');

// let travelerID = (Math.ceil(Math.random() * 49))
let travelerID

const pageLoad = () => {

  const travelerResults = getTraveler(travelerID)
  const tripsResults = getTrips()
  const placeResults = getDestinations()
    
  Promise.all([travelerResults, tripsResults, placeResults])
    .then(values => {
      let traveler = new Traveler(values[0])
      let trips = values[1].map(trip => {
        let place = values[2].find(place => {
          return place.id === trip.destinationID
        })
        return new Trip(trip, place)
      })
      trips.forEach(trip => {
        trip.whenIsThisTrip(today)
        traveler.isThisMyTrip(trip)
      })
      values[2].forEach(destination => {
        addToDestinationList(destination)
      })
      displayTravelerName(traveler);
      displayUserTrips(traveler)
      displayYearlyCost(traveler)
    })
}

const displayTravelerName = (traveler) => {
  dashboardGreeting.innerText = "Hello, " + (traveler.returnFirstNameLastInitial())
}

const addToDestinationList = (destination) => {
  let option = document.createElement('option');
  destinationList.appendChild(option);
  option.innerText = `${destination.name}`
  option.setAttribute('value', `${destination.id}`)
}

const showTrip = (parent, trip) => {
    let li = document.createElement('li');
    parent.appendChild(li);
    li.innerText = `${trip.destinationData.name}, Date: ${trip.date}, ${trip.duration} days, Cost: $${trip.calculateTotalCost().toFixed(2)}, Status: ${trip.status}, TripID: ${trip.id}`
};

const displayUserTrips = (traveler) => {
  traveler.trips.forEach(trip => {
    if (trip.happeningData === 'past') {
      showTrip(pastTripList, trip);
    } else if (trip.happeningData === 'upcoming') {
      showTrip(upcomingTripList, trip);
    } else if (trip.happeningData === 'current') {
      showTrip(currentTripList, trip);
    }
  })
}

const findDuration = (start, end) => {
  let startDate = new Date(start);
  let endDate = new Date(end);
  return (endDate.getDate()) - (startDate.getDate())
}

const displayEstimate = (newTrip, destinationData) => {
  tripPreviewTitle.innerText = `Your trip to ${destinationData.name}`
  tripPreviewData.innerHTML = `
  <p class="destination">Destination ${destinationData.name}</p>
  <p class="leaving">Departing on: ${newTrip.duration}</p>
  <p class="returning">Returning on: ${newTrip.duration}</p>
  <p class="duration">Duration ${newTrip.duration}</p>
  <p class="total-cost">Cost: $${newTrip.calculateTotalCost()}</p>
  <button class="book-trip">Book It!</button>`
  tripPreviewImage.setAttribute('src', destinationData.image)
  tripPreviewImage.setAttribute('alt', destinationData.altText)
}

const returnTripEstimate = (event) => {
  getDestinations()
    .then(destinations => {
    let destinationData = destinations.find(place => {
      return place.id === parseInt(tripDestination.value)
    })
    let start = tripStartDate.value;
    let end = tripEndDate.value;
    let duration = findDuration(start, end);
    let newTrip = new Trip({
      "id": Date.now(),
      "userID": travelerID,
      "destinationID": parseInt(tripDestination.value),
      "travelers": parseInt(travelerCount.value),
      "date": start.replaceAll("-", "/"),
      "duration": duration,
      "status": 'pending',
      "suggestedActivities": ['do stuff'],
    }, destinationData)
    if (event.target.classList.contains('get-estimate')) {
      displayEstimate(newTrip, destinationData)
    } else if (event.target.classList.contains('book-trip')) {
    addTrip(newTrip)
    showTrip(upcomingTripList, newTrip)
    }
  })
}

const displayYearlyCost = (traveler) => {
  yearCost.innerText = `You have spent $${traveler.findYearlyTravelCost(today, lastYear)} in the last year.`
}

const login = () => {
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
}

loginButton.addEventListener('click', login)
dashboard.addEventListener('click', returnTripEstimate)
window.onload = pageLoad();