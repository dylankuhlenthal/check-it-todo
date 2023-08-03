const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const taskRoute = require("./routes/tasks");

dotenv.config();
const { MONGO_URL, SERVER_PORT } = process.env;

// Init Mongo Status
let mongoStatus = false;

//Clear console start
console.log();
console.log("###############################################");

//Connect to MongoDB
async function connectToMongo() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("🌿 Connected to Mongo!");
    mongoStatus = true;
  } catch (err) {
    console.log("‼️  Error connecting to Mongo: ", err.name, err.message);
    mongoStatus = false;
  }
}

//Start server
app.listen(SERVER_PORT, () => {
  console.log(`💪 The server is live @ http://localhost:${SERVER_PORT}/`);
  console.log("🔌 Attempting to connect to MongoDB...");
  connectToMongo();
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());
// app.use(
//   cors({
//     methods: "GET, POST, PUT, DELETE",
//     origin: "http://localhost:3000",
//   })
// );

//route handlers
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/tasks", taskRoute);

app.use(express.static(__dirname + "/public/"));
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Heartbeat
app.get("/api/heartbeat", (req, res) => {
  res.status(200).json({ database: mongoStatus });
});
``;
