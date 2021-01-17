import chai from 'chai';
const expect = chai.expect;

import { testTravelers } from '../test-data/test-traveler-data'
import { testTrips } from '../test-data/test-trip-data'
import { testDestinations } from '../test-data/test-destination-data'
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import Destination from '../src/Destination'

describe('Destination', function() {
  let destination1, destination2, destination3, destination4, destination5

  beforeEach(function() {
    destination1 = new Destination(testTrips[0]);
    destination2 = new Destination(testTrips[1]);
    destination3 = new Destination(testTrips[2]);
    destination4 = new Destination(testTrips[3]); 
    destination5 = new Destination(testTrips[4]);
  });
  it('should be an instance of Destination', function() {
    expect(destination1).to.be.an.instanceof(Destination);
    expect(destination2).to.be.an.instanceof(Destination);
  });
});