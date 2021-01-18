import chai from 'chai';
const expect = chai.expect;

import { testTravelers } from '../test-data/test-traveler-data'
import { testTrips } from '../test-data/test-trip-data'
import { testDestinations } from '../test-data/test-destination-data'
import Traveler from '../src/Traveler';
import Trips from '../src/Trips';
import Destination from '../src/Destination'

describe('Traveler', function() {
  let traveler1, traveler2, trip1, trip2, trip3, trip4, trip5, destination1, destination2, destination3, destination4, destination5
  beforeEach(() => {
    traveler1 = new Traveler(testTravelers[0]);
    traveler2 = new Traveler(testTravelers[1]);
    trip1 = new Trips(testTrips[0]);
    trip2 = new Trips(testTrips[1]);
    trip3 = new Trips(testTrips[2]);
    trip4 = new Trips(testTrips[3]); 
    trip5 = new Trips(testTrips[4]);
    destination1 = new Destination(testDestinations[0]);
    destination2 = new Destination(testDestinations[1]);
    destination3 = new Destination(testDestinations[2]);
    destination4 = new Destination(testDestinations[3]); 
    destination5 = new Destination(testDestinations[4]);
  });
  
  it('should be an instance of Traveler', function() {
    expect(traveler1).to.be.an.instanceof(Traveler);
    expect(traveler2).to.be.an.instanceof(Traveler);
  });

  it('should have a an id and a name', function() {
    expect(traveler1.id).to.eql(1);
    expect(traveler2.name).to.eql("Rachael Vaughten");
  });

  it('should be able to return the traveler name formatted', function() {
    let travelerName = traveler1.returnFirstNameLastInitial()
    expect(travelerName).to.eql("Ham L");
  });

  it('should be able to store traveler\'s trips', function() {
    traveler1.trips.push(trip1, trip2, trip3);
    expect(traveler1.trips.length).to.eql(3);
    expect(traveler1.trips).to.deep.equal([trip1, trip2, trip3]);
  });

  it('should be able to tell if a trip belongs to a traveler', function() {
    traveler2.isThisMyTrip(trip1);
    traveler2.isThisMyTrip(trip2);
    traveler2.isThisMyTrip(trip3);
    traveler2.isThisMyTrip(trip4);
    traveler2.isThisMyTrip(trip5);
    expect(traveler2.trips.length).to.eql(2);
    expect(traveler2.trips).to.deep.equal([trip1, trip2]);
  });

  // it('should be able to store traveler\'s current trips', function() {
  //   traveler1.currentTrips.push(trip4);
  //   expect(traveler1.currentTrips.length).to.eql(1);
  //   expect(traveler1.currentTrips).to.deep.equal([trip4]);
  // });

});
