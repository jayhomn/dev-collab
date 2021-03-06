require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const usersRoute = require("./src/routes/users");
const projectsRoute = require("./src/routes/projects");

const PORT = process.env.PORT || 4000;
// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
        imgSrc: [
          "'self'",
          "data:",
          "https://avatars.dicebear.com/api/identicon/",
        ],
        connectSrc: ["'self'", "https://dev-fks22fhs.us.auth0.com/oauth/token"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        objectSrc: ["'self'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'self'", "https://dev-fks22fhs.us.auth0.com"],
      },
    },
  })
);

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

app.use("/api/", usersRoute);
app.use("/api/", projectsRoute);

app.use(express.static(__dirname + "/react-ui/build"));

// List of all the files that should be served as-is
let protected = ["transformed.js", "main.css", "favicon.ico"];

app.get("*", (req, res) => {
  if (protected.includes(path)) {
    // Return the actual file
    res.sendFile(`${__dirname}/react-ui/build/${path}`);
  } else {
    // Otherwise, redirect to /build/index.html
    res.sendFile(`${__dirname}/react-ui/build/index.html`);
  }
});

// starting the server
app.listen(PORT, () => {
  console.log("listening on port 3001");
});
