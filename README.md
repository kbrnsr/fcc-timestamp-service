This project was bootstrapped with [express-generator](https://github.com/expressjs/generator#readme) the following command from the parent folder
```shell
npx express-generator fcc-timestamp-service --no-view --force --git 
```

# Timestamp microservice

A microservice providing parsing of date strings as well as timestamp of the current date/time, based on the description from [freecodecamp.org's backend project: Timestamp Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice)

The project uses Babel to convert ES6 style code to compatible JS code

## API

The project provides the following routes and responses:
- [project url]/api will respond with the current date/time JSON and 200
```json
{
  unix :1660556043896,
  utc: "Mon, 15 Aug 2022 09:34:03 GMT"
}
```
- [project url]/api/parameter where parameter can be a [valid date/time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#datestring) as well as unix timestamp in milliseconds will respond with JSON and 200
```json
{
  unix: 1451001600000
  utc: "Fri, 25 Dec 2015 00:00:00 GMT"
}
```
- [project url]/api/invalidParameter will respond with JSON and 400
```json
{
  error: "Invalid Date"
}
```

## Setup

### Development

Run the following command for continuous rebuilds. It will be triggered by changes to source files in /server and /public as well as serve content via localhost:3000
```shell
npm run watch:dev
```

## Deployment

Assuming the Heroku app is set up with GitHub, Heroku will continuously poll the main branch and deploy at every update/push to it.

## Tech

Some, but not all tech used

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest#readme)
- [ESlint](https://eslint.org/)

## Credits

-  Jonathan Cunanan for his guide: [How to enable ES6 (and beyond) syntax with Node and Express](https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/)
-  Kyle Luke on his guide: [Testing your Express.js Backend Server](https://dev.to/lukekyl/testing-your-express-js-backend-server-3ae6)
-  [freeCodeCamp](https://www.freecodecamp.org/) for the learning resources they provide all developers
-  [MDN](https://developer.mozilla.org/en-US/)