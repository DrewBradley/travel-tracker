// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/ExcursiOnward-logo.png'

import Trips from './Trips';
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
const pastTripTemplate = document.querySelector('.past-trips-template')
const upcomingTrips = document.querySelector('.dashboard-trips-future')
const upcomingTripTemplate = document.querySelector('.future-trips-template')

const pageLoad = () => {
  let rando = (Math.ceil(Math.random() * 49))
  getTraveler(rando)
  .then(traveler => traveler = new Traveler(traveler.id, traveler.name, traveler.travelerType))
  .then(traveler => dashboardGreeting.innerText = "Hello, " + (traveler.returnFirstNameLastInitial()))
  getTrips()
    .then(trips => trips = new Trips(trips))
    .then(trips => trips.findUserTrips(rando))
    .then(trips => displayUserTrips(trips))
  getDestinations()
    .then(destination => console.log(destination))
}

const findUpcomingTrips = (today, trips) => {
  let futureTrips = trips.filter(trips => {
    return trips.date > today
  })
  if (futureTrips.length) {
    return futureTrips
  } else {
    return "You have no upcoming trips!"
  }
}

const findPastTrips = (today, trips) => {
  let pastTrips = trips.filter(trips => {
    return trips.date < today
  })
  return pastTrips
}

const displayUserTrips = (trips) => {
  let today = new Date().toISOString().slice(0,10)
  let upcoming = findUpcomingTrips(today, trips);
  let past = findPastTrips(today, trips);
  console.log(past)
  past.forEach(trip => {
    let tripCard = pastTripTemplate.cloneNode(true);
    pastTrips.appendChild(tripCard);
    console.log(trip)
    pastTripTemplate.querySelector('.trip-info').textContent = `${trip}`
  })
  // upcoming.forEach(trip => {
  //   let tripCard = upcomingTripTemplate.cloneNode(true);
  //   upcomingTrips.appendChild(tripCard);
  //   tripCard.querySelector('.trip-info').innerText = `${trip.id}`
  // })
}

window.onload = pageLoad();