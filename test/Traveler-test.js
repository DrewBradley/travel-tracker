import chai from 'chai';
const expect = chai.expect;

import { testTravelers } from '../test-data/test-traveler-data'
import { testTrips } from '../test-data/test-trip-data'
import { testDestinations } from '../test-data/test-destination-data'
import Traveler from '../src/Traveler';
import Trip from '../src/Trips';
import Destination from '../src/Destination'

describe('Traveler', function() {
  let traveler1, traveler2, trip1, trip2, trip3, trip4, trip5, destination1, destination2, destination3, destination4, destination5
  beforeEach(() => {
    traveler1 = new Traveler(testTravelers[0]);
    traveler2 = new Traveler(testTravelers[1]);
    destination1 = new Destination(testDestinations[0]);
    destination2 = new Destination(testDestinations[1]);
    destination3 = new Destination(testDestinations[2]);
    destination4 = new Destination(testDestinations[3]); 
    destination5 = new Destination(testDestinations[4]);
    trip1 = new Trip(testTrips[0], destination1);
    trip2 = new Trip(testTrips[1], destination3);
    trip3 = new Trip(testTrips[2], destination2);
    trip4 = new Trip(testTrips[3], destination5); 
    trip5 = new Trip(testTrips[4], destination4);
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

  it('should be able to calculate traveler\'s yearly travel costs', function() {
    // I CANNOT FIGURE OUT WHY THIS ISN'T PASSING!
    let lastYear = '2019/06/08'
    console.log(traveler2.findYearlyTravelCost(lastYear))
    let yearlySpending = traveler2.findYearlyTravelCost(lastYear);
    expect(yearlySpending).to.eql(19151);
  });

});
