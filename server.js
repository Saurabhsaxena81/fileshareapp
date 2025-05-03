require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.options("*", cors()); // Handle preflight for all routes
app.use(express.json()); // Parse JSON requests
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Set up view engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

// Start server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
