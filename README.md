# ExcusiOnward: Travel Tracker
## Overview
ExcusiOnward allows Travelers to keep track of their traveling.
- The dashboard displays a Traveler's trips (**Past**, **Current**, and **Upcoming**).
- Travelers can also see their yearly spending.
- And travelers can book a trip, including flight costs and daily expenses.

## Contributors
- [Drew Bradley](https://github.com/DrewBradley)
- [Mike Duke](https://github.com/mike-duke) - Code Reviewer (Drew's Mentor)
- [Eric Campbell](https://github.com/mainlyetcetera) - Code Reviewer

## Use
![Mobile View](https://media.giphy.com/media/2yAweEYAY9nr3Ajaw0/giphy.gif)

![Login Page](https://media.giphy.com/media/q0XNz8Joeg6uAzBqNt/giphy.gif)

![Desktop View](https://media.giphy.com/media/FioMDMdCqx9IcBKwLe/giphy.gif)

![Desktop View](https://media.giphy.com/media/EuQxGb48lLso7PHkPM/giphy.gif)

## Technologies
ExcusiOnward was built using JavaScript on an HTML framework with SCSS styling.

## Architecture

The JavaScript is handled by six file: ```index.js```, ```domUpdate.js```, ```Traveler.js```, ```Trip.js```, ```Destination.js```, and ```utility.js```
  * ```domUpdate.js``` handles all DOM manipulation, and also houses all querySelectors and event listeners. Any time something changes visually on the page, that is handled by functions within ```domUpdate.js```. This separation prevents the DOM from being manipulated by methods that are meant to update data, and vice versa.
  * ```index.js``` handles any data model function that are not handled in class files, including retrieving data from input forms.
  * ```Traveler.js``` instantiates Traveler objects from a class constructor, and uses the associated methods to find data that corresponds with the Traveler.
  * ```Destination.js``` uses a class constructor to instantiate all the Destinations.
  * ```Trip.js``` uses a class constructor to instantiate a new Trip and handles all the function that return trip data and cost.
  * ```utility.js``` holds all the network requests.

## Download
Clone BOTH of these repositories to your local machine:
 - ```git clone git@github.com:DrewBradley/travel-tracker.git```
 - ```git clone git@github.com:turingschool-examples/travel-tracker-api.git```

Change directories:
 - ```cd travel-tracker```

Download any dependencies:
 - ```npm install```
 
 Change to this directory:
 - ```cd travel-tracker-api```

Download any dependencies:
 - ```npm install```

Run ```npm start``` for BOTH repositories and open the application on ```localhost:8080``` in your browser.


## Wins/Challenges
Wins:
 - Building an app that does all the functions it is supposed to.
 - Keeping DOM and data model seperated throughout MOST of the project.
 - Getting network requests to work write away.
 - Achieving 100 accessibility rating on Lighthouse and ZERO errors on Wave.

Challenges:
 - Using Sass.
 - Writing DRY javascript and keeping data separate from DOM.
 - Using media queries in their own separate file.
 - Passing all tests using Chai.
 - Staying organized and focused under a time crunch and pressure.

## Future Iterations
- Add Agency feature to:
  - Allow agents to approve trip requests.
  - Calculate how much they have made.
- Persistant login.
  - Application stays logged in after being refreshed.
  - A User's password is hidden while they are logging in.
