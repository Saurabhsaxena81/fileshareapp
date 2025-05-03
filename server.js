require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.options("*", cors()); // Handle preflight for all routes

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

const path = require("path");
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "public")));
const connectDB = require("./config/db");
connectDB();

app.use(express.json());

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, console.log(`Listening on port ${PORT}.`));
