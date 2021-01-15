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

window.onload = pageLoad();

const pageLoad = () => {
  
}