# StayFit

## Description

StayFit is a modern calorie counting MERN app that makes nutrition tracking easy.

## Technology

The frontend of StayFit is built using React, Bootstrap 5 and Redux.  The backend has been developed using ExpressJS and MongoDB as the database.  

* React
* Redux
* NodeJS
* Express
* MongoDB

## Installing dependencies

This project uses yarn, so you should install yarn globally first if you don't have it already.

```sh
npm i -g yarn
```

Then you can simply install the dependencies using the command "yarn" in the root folder

```sh
yarn
```

## Run

Create a config.env file in the path "src/config/config.env"


```.env
NODE_ENV=development
PORT=5000
BASE_URL=
JWT_SECRET=
MONGO_URI=
```

Change the default url for axios in the client folder. Axios settings can be found on `client/src/App.js`

```jsx
axios.defaults.baseURL = 'https://localhost:3000';
```
