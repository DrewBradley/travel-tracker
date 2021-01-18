import chai from 'chai';
const expect = chai.expect;

import { testTravelers } from '../test-data/test-traveler-data'
import { testTrips } from '../test-data/test-trip-data'
import { testDestinations } from '../test-data/test-destination-data'
import Traveler from '../src/Traveler';
import Trips from '../src/Trips';
import Destination from '../src/Destination'

describe('Trips', function() {
  let traveler1, traveler2, trip1, trip2, trip3, trip4, trip5, destination1, destination2, destination3, destination4, destination5
  beforeEach(() => {
    traveler1 = new Traveler(testTravelers[0]);
    traveler2 = new Traveler(testTravelers[1]);
    destination1 = new Destination(testDestinations[0]);
    destination2 = new Destination(testDestinations[1]);
    destination3 = new Destination(testDestinations[2]);
    destination4 = new Destination(testDestinations[3]); 
    destination5 = new Destination(testDestinations[4]);
    trip1 = new Trips(testTrips[0], destination4);
    trip2 = new Trips(testTrips[1], destination3);
    trip3 = new Trips(testTrips[2], destination2);
    trip4 = new Trips(testTrips[3], destination5); 
    trip5 = new Trips(testTrips[4], destination4);
  });
  
  it('should be an instance of Trips', function() {
    expect(trip1).to.be.an.instanceof(Trips);
    expect(trip2).to.be.an.instanceof(Trips);
    expect(trip3).to.be.an.instanceof(Trips);
    expect(trip4).to.be.an.instanceof(Trips);
  });

  it('should have a an id', function() {
    expect(trip5.id).to.eql(5);
  });

  it('should be assigned to a specific user', function() {
    expect(trip3.userID).to.eql(3);
    expect(trip4.userID).to.eql(1);
  });

  it('should find the end date of a trip', function() {
    let endDate = trip1.findTripEndDate()
    expect(endDate).to.eql('2019-09-24');
  });

  it('should be able to tell if the trip has happened', function() {
    let today = '2020-06-08';
    let itHasNotHappened = trip3.whenIdThisTrip(today)
    let itHasHappened = trip1.whenIdThisTrip(today)
    let itIsHappening = trip5.whenIdThisTrip(today)
    expect(itHasNotHappened).to.eql('THIS HAS NOT HAPPENED!');
    expect(itHasHappened).to.eql('IT HAPPENED!');
    expect(itIsHappening).to.eql('THIS IS HAPPENING!');
  });

  it('should be able to calculate the cost of the travel', function() {
    let tripCost = trip1.calculateTripCost()
    expect(tripCost).to.eql(870);
  });

  it('should be able to calculate the agent fee', function() {
    let tripCost = trip3.calculateTripCost()
    let agentFee = trip3.calculateAgentFee(tripCost)
    expect(tripCost).to.eql(9920);
    expect(agentFee).to.eql(992);
  });

  it('should be able to calculate the total cost of a trip, including agent fee', function() {
    let tripCost = trip4.calculateTripCost()
    let agentFee = trip4.calculateAgentFee(tripCost)
    let tripTotalCost = trip4.calculateTotalCost()
    expect(tripCost).to.eql(4300);
    expect(agentFee).to.eql(430);
    expect(tripTotalCost).to.eql(4730);
  });

});