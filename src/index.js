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

let traveler

const pageLoad = () => {
  getTraveler(10)
    .then(traveler => traveler = new Traveler(traveler.id, traveler.name, traveler.travelerType))
    .then(traveler => console.log(traveler.returnFirstNameLastInitial()))
  const trips = getTrips()
    .then(trips => console.log(trips))

}

window.onload = pageLoad();