import Traveler from './Traveler'


export const getTraveler = (userId) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${userId}`)
    .then(response => response.json())
    .then(traveler => traveler)
}

export const getTrips = () => {
  return fetch("http://localhost:3001/api/v1/trips")
    .then(response => response.json())
    .then(data => data)
}

export const getDestinations = () => {
  return fetch("http://localhost:3001/api/v1/destinations")
    .then(response => response.json())
    .then(cookbook => new Cookbook(cookbook))
}

export const addTrip = (id, userID, destinationID, travelers, date, duration, status, suggestedActivities) => {
  let postBody = {
    id: id,
    userID: userID,
    destinationID: destinationID, 
    travelers: travelers, 
    date: date, 
    duration: duration, 
    status: status, 
    suggestedActivities: suggestedActivities
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