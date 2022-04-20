const Router = require("express").Router;

Router.use("/auth/", require("./auth"));
// Add different categories for the different actions like storage, WebSocket and server status.

module.exports = Router;
