# :cat2: Chatty

## Project Setup

Chatty is a client-side single-page app built with ReactJS, Webpack which includes Babel, JSX, ES6, and webpack dev server, and WebSockets using Node package ws on the server-side, and native WebSocket on client side.

## Final Product

![Screenshot of functionality](https://github.com/racheldallaire/chatty/blob/master/docs/main%20screenshot.gif)

App displays how many users are currently online, assigns each user a random colour, and displays a notification when a user changes their name.

![Screenshot of colours](https://github.com/racheldallaire/chatty/blob/master/docs/colour-screenshot.png)

A user's colour persists even if they change their name. Each new user will be assigned a new, completely random colour.

### Getting Started

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Dependencies

* React
* Webpack
* babel-core
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [uuid](https://github.com/kelektiv/node-uuid)
* [random-color](https://github.com/mock-end/random-color)
* Express
* ws
* WebSockets
