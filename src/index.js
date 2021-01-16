// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/ExcursiOnward-logo.png'

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


const dashboardGreeting = document.querySelector('.dashboard-greeting')
const pastTrips = document.querySelector('.dashboard-trips-past')
const tripCardTemplate = document.querySelector('.past-trips-template').content;
const upcomingTrips = document.querySelector('.dashboard-trips-future')
const upcomingTripTemplate = document.querySelector('.future-trips-template')

const pageLoad = () => {
  let rando = (Math.ceil(Math.random() * 49))

  const travelerResults = getTraveler(rando)
    .then(traveler => traveler = new Traveler(traveler.id, traveler.name, traveler.travelerType))
    .then(traveler => dashboardGreeting.innerText = "Hello, " + (traveler.returnFirstNameLastInitial()))

  const tripsResults = getTrips()

  const placeResults = getDestinations()
    .then(destinations => destinations = destinations.map(destination => {
      return new Destination(destination)
    }))
    

  Promise.all([travelerResults, tripsResults, placeResults])
    .then(values => values[1].map(trip => {
      let place = values[2].find(place => {
        return place.id === trip.destinationID
      })
      return new Trip(trip, place)
    }))
    .then(values => values.filter(trip => {
      if (trip.userID === rando) {
      return trip }
    }))
    .then(values => values.forEach(trip => {
      console.log(trip.calculateTripCost())
      displayUserTrips(trip)
    }))
    // .then(values => console.log(values))
}

const showTrip = (trip, when) => {
  let tripCard = tripCardTemplate.cloneNode(true);
  if (when === 'past') {
    pastTrips.appendChild(tripCard);
    tripCardTemplate.querySelector('.trip-info').textContent = `${trip.destinationData.name}, Date: ${trip.date}, Cost: ${trip.calculateTripCost()}, TripID: ${trip.id}`
  } else if (when === 'future') {
    upcomingTrips.appendChild(tripCard);
    tripCardTemplate.querySelector('.trip-info').textContent = `${trip.destinationData.name}, Date: ${trip.date}, TripID: ${trip.id}`
  }
}

const displayUserTrips = (trip) => {
  let today = new Date().toISOString().slice(0,10).replaceAll("-", "/")
  if (trip.isPast(today)) {
    showTrip(trip, 'past')
  } else if (trip.isFuture(today)) {
    showTrip(trip, 'future')
  }
}

window.onload = pageLoad();