require("dotenv").config();
const express = require("express");
const app = express();
const Post = require("./models/post");
const mongoose = require("mongoose");
app.use(express.json());
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

//Define rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

//Handling Cors Issues
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

mongoose
  .connect(process.env.SECRET_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(
  "/assets/images",
  express.static(path.join(__dirname, "assets/images"))
);
app.use(helmet());

const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const user = require("./models/user");

console.log(path.join(__dirname, "assets/images"));

app.use("/api", userRoutes());
app.use("/api", postRoutes());

module.exports = app;
