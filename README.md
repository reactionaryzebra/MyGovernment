# MyGovernment
For full commit histories please visit these repo's - [Express Server](https://github.com/reactionaryzebra/mygovernment-backend), [React Front-end](https://github.com/reactionaryzebra/mygovernment-frontend).  This repo was created to merge the two apps for hosting on Heroku.

## Introduction
MyGovernment is a website conceived from this simple idea: people need greater access to those elected to be their voice.  This is true at all levels of government.  As someone who recently relocated to Los Angeles, I found myself entirely uneducated on the officials who represent my new home at the local, state, and even federal levels.  MyGovernment is intended to be a centralized source of information for people to learn about their representatives, and even contact them if they feel so inclined.  

## Initial UI Design
The design of this site was intended to be simple and clean - allowing the users easy access to all of the information available.  The information is open to anyone, though authentication was built in with the intention that a user could authenticate, have their address validated by MyGovernment, and this would then open functionality for them to be able to discuss those who represent them via comment boards.

Find the original wireframes [here](https://xd.adobe.com/view/3fef8620-c453-48ff-5459-fc0d390847a6-49de/)

## Technologies Used

* MongoDB
* Node
* Express
* GraphQL
* React
* [Google Civic Information API](https://developers.google.com/civic-information/)
* [ProPublica Congress API](https://www.propublica.org/datastore/api/propublica-congress-api)
* [News API](https://newsapi.org/)

## Future Improvements
* Implement a comment feature for registered users
* Make use of the elections data provided in the Google API for supporting more robust features around election time
