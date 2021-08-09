const express = require("express");
const app = express();
const morgan = require("morgan");
const config = require("./configs/config.json");
require("./configs/mongoose");

const cors = require("cors");
// const errorHandler = require("./_helpers/error-handler");

// parse requests of content-type - application/json
app.use(express.json());

// for log
app.use(morgan("tiny"));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const APIRoutes = require("./routes/api.route");

// allow cors requests from any origin and with credentials
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);

// api routes
const api = config.API_URL;
app.use(`${api}/`, APIRoutes);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Ecommerce Application." });
});

// start server
const port = config.PORT;
app.listen(port, () => console.log("Server listening on port " + port));

//For error handling
app.use(function (err, req, res, next) {
  console.log("Error handling middleware", err);
  res.status(err.status || 400).json({
    message: err.message || err,
    status: err.status || 400,
  });
});
