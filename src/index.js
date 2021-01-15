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

const pageLoad = () => {
  let rando = (Math.ceil(Math.random() * 49))
  getTraveler(rando)
    .then(traveler => traveler = new Traveler(traveler.id, traveler.name, traveler.travelerType))
    .then(traveler => dashboardGreeting.innerText = "Well Hello There, " + (traveler.returnFirstNameLastInitial()))
  getTrips()
    .then(trips => console.log(trips))
  getDestinations()
    .then(destination => console.log(destination))
}

window.onload = pageLoad();