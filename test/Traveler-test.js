import chai from 'chai';
const expect = chai.expect;

import { testTravelers } from '../test-data/test-traveler-data'
import { testTrips } from '../test-data/test-trip-data'
import { testDestinations } from '../test-data/test-destination-data'
import Traveler from '../src/Traveler';
import Trips from '../src/Trips';
import Destination from '../src/Destination'

describe('Traveler', function() {
  beforeEach
  it('should be a function', function() {
    expect(true).to.equal(true);
  });
});