# Spacebook

## Description
A social media startup where users can share their thoughts, react to friends' thoughts, and create a friend list

---

## Deployed Site
Coming Soon!
<!-- [Spacebook Site](#) -->

---

## Table of Contents

* [Built With](#built-with)
* [Installation](#installation)
* [Usage](#usage)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [See It For Yourself](#screenshots)

---

## Built With
* JavaScript
* Express
* MongoDB
* Mongoose
* Node.js

---

## Installation
Clone the Github repo.
```https://github.com/ashryan125/spacebook.git```

### Node.js must be installer prior to installing any other packages. Install below in the order as shown

Once in the properly cloned folder, run ```npm install``` to install the following dependencies:
 * Express:  ```npm i express``` to use Express.js for your server
* MongoDB: ``` npm install mongodb``` to use Mongo Database for the database storage
* Mongoose: ``` npm install mongoose ```
 * Alernatively, you can run all at once with ```npm install express mongodb mongoose```

 ---

## Usuage
 #### **LOCAL USAGE:** 
 Enter ```npm start``` in your command line and press ```ENTER```.  
 Open Insomnia Core and run ```CRUD``` operations - ``` GET POST PUT DELETE```
 
---

## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
  
## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
---
## Screenshots

## Video in Action!
[Walkthrough Full Size Video](https://drive.google.com/file/d/163hjHpMLv2AbtO6SV7zNVcFHvLphM--A/view)

![Walkthrough Video Preview](./mongoDb-walkthrough.gif)

### Home Page View
Coming Soon!

<!-- ![Homepage](#) -->

