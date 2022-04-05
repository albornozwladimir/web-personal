const express = require("express");
const app = express();

// Load routings
const userRoutes = require("./routers/user");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { API_VERSION } = require("./config");

// Configure Header HTTP
// ...

// Basic Router
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
