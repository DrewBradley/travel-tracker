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

const dashboardGreeting = document.querySelector('.dashboard-greeting')
const destinationList = document.querySelector('.destination-list')
const pastTrips = document.querySelector('.dashboard-trips-past')
const upcomingTrips = document.querySelector('.dashboard-trips-future')
const currentTrips = document.querySelector('.dashboard-trips-present')
const pastTripList = document.querySelector('.past-trips')
const upcomingTripList = document.querySelector('.future-trips')
const currentTripList = document.querySelector('.current-trips')
const yearCost = document.querySelector('.dashboard-year-cost')

const pageLoad = () => {
  let rando = (Math.ceil(Math.random() * 49))
  // let rando = (1)

  const travelerResults = getTraveler(rando)
  const tripsResults = getTrips()
  const placeResults = getDestinations()
    .then(destinations => destinations = destinations.map(destination => {
      return new Destination(destination)
    }))
    
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
  console.log(traveler.trips.length)
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

const displayYearlyCost = (traveler) => {
  yearCost.innerText = `You have spent $${traveler.findYearlyTravelCost(today, lastYear).toFixed(2)} in the last year.`
}


window.onload = pageLoad();