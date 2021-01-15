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
const tripCardTemplate = document.querySelector('.past-trips-template').content;
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
  return trips.reduce((acc, trip) => {
    if (trip.date > today) {
      acc.push({ "id": trip.id, "destination": trip.destinationID, "date": trip.date})
    }
    return acc
  }, [])
}

const findPastTrips = (today, trips) => {
  return trips.reduce((acc, trip) => {
    if (trip.date < today) {
      acc.push({ "id": trip.id, "destination": trip.destinationID, "date": trip.date})
    }
    return acc
  }, [])
}

const displayUserTrips = (trips) => {
  let today = new Date().toISOString().slice(0,10).replaceAll("-", "/")
  console.log("Today is", today)
  let upcoming = findUpcomingTrips(today, trips);
  let past = findPastTrips(today, trips);
  console.log(past)
  past.forEach(trip => {
    let tripCard = tripCardTemplate.cloneNode(true);
    pastTrips.appendChild(tripCard);
    console.log(trip)
    tripCardTemplate.querySelector('.trip-info').textContent = `${trip.id} ${trip.destination} ${trip.date}`
  })
  console.log(upcoming)
  upcoming.forEach(trip => {
    let tripCard = tripCardTemplate.cloneNode(true);
    upcomingTrips.appendChild(tripCard);
    tripCardTemplate.querySelector('.trip-info').innerText = `${trip.id}`
  })
}

window.onload = pageLoad();