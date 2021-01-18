import Destination from './Destination'


export const getTraveler = (userId) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${userId}`)
    .then(response => response.json())
    .then(traveler => traveler)
}

export const getTrips = () => {
  return fetch("http://localhost:3001/api/v1/trips")
    .then(response => response.json())
    .then(trips => trips.trips)
}

export const getDestinations = () => {
  return fetch("http://localhost:3001/api/v1/destinations")
    .then(response => response.json())
    .then(destinations => destinations = destinations.destinations)
    .then(destinations => destinations = destinations.map(destination => {
      return new Destination(destination)
    }))
}

export const addTrip = (trip) => {
  let postBody = {
    id: trip.id,
    userID: trip.userID,
    destinationID: trip.destinationID, 
    travelers: trip.travelers, 
    date: trip.date, 
    duration: trip.duration, 
    status: trip.status, 
    suggestedActivities: trip.suggestedActivities
  }
  console.log(postBody)
  return fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postBody)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

export const updateTrip = (id, status, suggestedActivities) => {
  let postBody = {
    id: id,
    status: status, 
    suggestedActivities: suggestedActivities
  }
  console.log(postBody)
  return fetch("http://localhost:3001/api/v1/updateTrip", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postBody)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

export const deleteTrip = (tripID) => {
  return fetch(`http://localhost:3001/api/v1/trips/${tripID}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}