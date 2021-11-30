require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const usersRoute = require("./routes/users");
const projectsRoute = require("./routes/projects");

const PORT = process.env.PORT || 4000;
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

app.use("/api/", usersRoute);
app.use("/api/", projectsRoute);

// starting the server
app.listen(PORT, () => {
  console.log("listening on port 3001");
});

app.get("*", (req, res) => {
  let url = path.join(__dirname, "../react-ui/build", "index.html");
  if (!url.startsWith("/app/"))
    // since we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});
