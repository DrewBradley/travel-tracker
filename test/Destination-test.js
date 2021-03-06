import chai from 'chai';
const expect = chai.expect;

import { testDestinations } from '../test-data/test-destination-data'
import Destination from '../src/Destination'

describe('Destination', function() {
  let destination1, destination2, destination3, destination4, destination5

  beforeEach(() => {
    destination1 = new Destination(testDestinations[0]);
    destination2 = new Destination(testDestinations[1]);
    destination3 = new Destination(testDestinations[2]);
    destination4 = new Destination(testDestinations[3]); 
    destination5 = new Destination(testDestinations[4]);
  });

  it('should be an instance of Destination', function() {
    expect(destination1).to.be.an.instanceof(Destination);
    expect(destination2).to.be.an.instanceof(Destination);
  });

  it('should contain a destination id and name', function() {
    expect(destination3.id).to.eql(3);
    expect(destination4.name).to.eql("Cartagena, Colombia");
  });

  it('should contain estimated cost details', function() {
    expect(destination1.costPerDay).to.eql(70);
    expect(destination2.costPerPerson).to.eql(780);
  });

});