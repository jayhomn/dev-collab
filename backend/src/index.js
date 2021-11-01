const client = require("./database/postgresUtil");

require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

require("../models/Associations")();

const usersRoute = require("./routes/users");
const projectsRoute = require("./routes/projects");

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

app.use("/api/users", usersRoute);
app.use("/api/projects", projectsRoute);

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});
client
  .authenticate()
  .then(function () {
    console.log("CONNECTED! ");
  })
  .catch(function (err) {
    console.log("SOMETHING DONE GOOFED");
  });

// try {
//   postgresUtil.connectToDb(function (err, client) {
//     if (err) console.log(err);

// } catch (err) {
//   console.log(err);
// }
