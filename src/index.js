// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/ExcursiOnward-logo.png'
import './images/background-image.png'

import Trip from './Trips';
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

import {
  domUpdates
} from './domUpdates';

let today = new Date().toISOString().slice(0,10).replaceAll("-", "/")

// login
const loginButton = document.querySelector('.login-button');

// dashboard
const dashboard = document.querySelector('.dashboard')
const upcomingTripList = document.querySelector('.future-trips')
const highlight = document.querySelector('.destination-preview-button')
// trip request selectors
const tripStartDate = document.querySelector('.start-date')
const tripEndDate = document.querySelector('.end-date')
const travelerCount = document.querySelector('.traveler-count')
const tripDestination = document.querySelector('.destination-list')

let travelerID = (Math.ceil(Math.random() * 49))
// let travelerID

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
        domUpdates.addToDestinationList(destination)
      })
      domUpdates.displayTravelerName(traveler);
      domUpdates.displayUserTrips(traveler);
      domUpdates.displayYearlyCost(traveler);
    })
}

const findDuration = (start, end) => {
  let startDate = new Date(start);
  let endDate = new Date(end);
  return (endDate.getDate()) - (startDate.getDate())
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
      domUpdates.displayEstimate(newTrip, destinationData)
    } else if (event.target.classList.contains('book-trip')) {
    addTrip(newTrip)
    domUpdates.showTrip(upcomingTripList, newTrip)
    }
  })
};

loginButton.addEventListener('click', domUpdates.login)
// highlight.addEventListener('click', domUpdates.displayHighlight)
dashboard.addEventListener('click', returnTripEstimate)
window.onload = pageLoad();