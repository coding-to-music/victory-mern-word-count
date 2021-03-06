# victory-mern-word-count

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/victory-mern-word-count

https://victory-mern-word-count.herokuapp.com

by Joseph Sintum https://github.com/josephsintum

https://words-stats.vercel.app/

https://github.com/josephsintum/words-visualizations

# Words-Visualization

Words Visualization

> A web app for visualizing most popular words in the news cycle

![demo](https://raw.githubusercontent.com/josephsintum/words-visualizations/master/public/screenshot.png)

Built with these and more:

-   [News API](https://newsapi.org/)
-   [Next.js](https://nextjs.org/)
-   [Base Web](https://baseweb.design/)
-   [Victory Charts](https://formidable.com/open-source/victory/)
-   [Mongoose](https://mongoosejs.com/)

## Setup

1. Create an `.env` file in the root of the project based on `.env.example`

1. [Create a newsAPI account and get API key](https://newsapi.org/) and add the News API key as `API_KEY=XXXX` in `.env` file

1. For MongoDB<br/>
   use [docker](https://www.docker.com/), run `docker-compose up`<br/>
   or install [MongoDB](https://docs.mongodb.com/manual/installation/) <br/>
   or create a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

1. Add MongoDB URI string to `.env` as `MONGO_URL:...`

1. Run

    ```bash
    yarn
    yarn run dev
    ```

1. Visit [localhost:3000](http://localhost:3000)

1. Change line 22 of `./github/workflows/cron.yml`, run command which adds news to data to your hosted version of this project,
   Setup cron job using Github by just hosting code on Github

## About the Website: Maper

-   A location-based website using React as Frontend and NodeJs, ExpressJS as backend, and MongoDB as Database. On this website, I had use MapBox for the world map and React-Mapbox-gl for configuration. We can select the place where we had visited and added the photo URL, so the entry will be seen on the map and in the visited place area. We can delete or modify the changes in the Entry we had created. It is a responsive website with live location of a point on the map. The Backend is deployed on Heroku and the frontend is deployed on Netlify.

#### The Password for the Entry: maper01

## Technology Stack

-   React js
-   Node js
-   Express js
-   MongoDB
-   MapBox, React Mapbox-gl
-   Heroku
-   Netlify
-   Flexbox
-   Material-ui

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/victory-mern-word-count.git
git push -u origin main
```

## Heroku

```java
heroku create victory-mern-word-count
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

# NewsAPI(process.env.API_KEY)

heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/victory-mern-word-count?retryWrites=true&w=majority"
heroku config:set PASSWORD="something-secret"

heroku config:set PUBLIC_URL="https://victory-mern-word-count.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

## Getting this error

```java
npm run dev
```

```java
> victory-mern-word-count@1.0.0 dev
> next

node:internal/modules/cjs/loader:936
  throw err;
  ^

Error: Cannot find module './lib/ReactPropTypesSecret'
Require stack:
- /mnt/volume_nyc1_01/victory-mern-word-count/node_modules/prop-types/checkPropTypes.js
- /mnt/volume_nyc1_01/victory-mern-word-count/node_modules/react/cjs/react.development.js
- /mnt/volume_nyc1_01/victory-mern-word-count/node_modules/react/index.js
- /mnt/volume_nyc1_01/victory-mern-word-count/node_modules/next/dist/bin/next
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/mnt/volume_nyc1_01/victory-mern-word-count/node_modules/prop-types/checkPropTypes.js:13:30)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/mnt/volume_nyc1_01/victory-mern-word-count/node_modules/prop-types/checkPropTypes.js',
    '/mnt/volume_nyc1_01/victory-mern-word-count/node_modules/react/cjs/react.development.js',
    '/mnt/volume_nyc1_01/victory-mern-word-count/node_modules/react/index.js',
    '/mnt/volume_nyc1_01/victory-mern-word-count/node_modules/next/dist/bin/next'
  ]
}
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

```java
heroku buildpacks
```

Output:

```java
=== victory-mern-word-count Buildpack URL
heroku/nodejs
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on victory-mern-word-count will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== victory-mern-word-count Buildpack URL
heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-04-09T03:12:56.076028+00:00 app[web.1]: ls: cannot access '/app/build/static/js/*.js': No such file or directory
2022-04-09T03:12:56.076252+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
2022-04-09T03:12:56.253505+00:00 app[web.1]: Starting log redirection...
2022-04-09T03:12:56.253698+00:00 app[web.1]: Starting nginx...
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
Checking /mnt/volume_nyc1_01/victory-mern-word-count/package.json
[====================] 18/18 100%

 @material-ui/core               ^4.11.2  →          ^4.12.4
 @material-ui/data-grid  ^4.0.0-alpha.18  →  ^4.0.0-alpha.35
 @material-ui/icons              ^4.11.2  →          ^4.11.3
 @types/mongoose                 ^5.7.32  →         ^5.11.96
 @types/natural                   ^0.6.3  →           ^5.1.1
 @types/victory                  ^33.1.4  →          ^33.1.5
 date-fns                        ^2.16.0  →          ^2.28.0
 mongoose                        ^5.9.25  →          ^6.2.11
 natural                          ^2.1.5  →          ^5.1.13
 newsapi                          ^2.4.0  →           ^2.4.1
 next                             ^9.5.5  →          ^12.1.5
 next-connect                     ^0.7.2  →          ^0.12.2
 react                          ^16.13.1  →          ^18.0.0
 react-dom                      ^16.13.1  →          ^18.0.0
 victory                         ^35.0.8  →          ^36.3.1
 @types/node                    ^14.0.13  →         ^17.0.23
 @types/react                   ^16.9.36  →          ^18.0.4
 typescript                       ^3.9.5  →           ^4.6.3

Run ncu -u to upgrade package.json

Upgrading /mnt/volume_nyc1_01/victory-mern-word-count/package.json
[====================] 18/18 100%

 @material-ui/core               ^4.11.2  →          ^4.12.4
 @material-ui/data-grid  ^4.0.0-alpha.18  →  ^4.0.0-alpha.35
 @material-ui/icons              ^4.11.2  →          ^4.11.3
 @types/mongoose                 ^5.7.32  →         ^5.11.96
 @types/natural                   ^0.6.3  →           ^5.1.1
 @types/victory                  ^33.1.4  →          ^33.1.5
 date-fns                        ^2.16.0  →          ^2.28.0
 mongoose                        ^5.9.25  →          ^6.2.11
 natural                          ^2.1.5  →          ^5.1.13
 newsapi                          ^2.4.0  →           ^2.4.1
 next                             ^9.5.5  →          ^12.1.5
 next-connect                     ^0.7.2  →          ^0.12.2
 react                          ^16.13.1  →          ^18.0.0
 react-dom                      ^16.13.1  →          ^18.0.0
 victory                         ^35.0.8  →          ^36.3.1
 @types/node                    ^14.0.13  →         ^17.0.23
 @types/react                   ^16.9.36  →          ^18.0.4
 typescript                       ^3.9.5  →           ^4.6.3

Run npm install to install new versions.

npm i --legacy-peer-deps

added 16 packages, removed 660 packages, changed 59 packages, and audited 177 packages in 1m

12 packages are looking for funding
  run `npm fund` for details

1 high severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/victory-mern-word-count/client/package.json
[====================] 18/18 100%

 @testing-library/jest-dom     ^5.11.4  →  ^5.16.4
 @testing-library/react        ^11.1.0  →  ^13.0.0
 @testing-library/user-event  ^12.1.10  →  ^14.0.4
 axios                         ^0.21.0  →  ^0.26.1
 dotenv                         ^8.2.0  →  ^16.0.0
 js-cookie                      ^2.2.1  →   ^3.0.1
 node-sass                     ^4.14.1  →   ^7.0.1
 react                         ^17.0.1  →  ^18.0.0
 react-dom                     ^17.0.1  →  ^18.0.0
 react-redux                    ^7.2.2  →   ^7.2.8
 react-router-dom               ^5.2.0  →   ^6.3.0
 react-scripts                   4.0.0  →    5.0.0
 reactjs-popup                  ^2.0.4  →   ^2.0.5
 redux                          ^4.0.5  →   ^4.1.2
 redux-thunk                    ^2.3.0  →   ^2.4.1
 web-vitals                     ^0.2.4  →   ^2.1.4

Run npm install to install new versions.
```
