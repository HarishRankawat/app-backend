const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const appLinksRouter = require('./routes/appLinks'); // Import the routes

const app = express();
const port = 5000; // You can change the port if needed

const cors = require('cors');
app.use(cors());

// Middleware
app.use(bodyParser.json()); // To parse JSON data

// Connect to MongoDB 
mongoose.connect("mongodb+srv://rankawat613:Harish11@my-app-cluster.vc3qr.mongodb.net/?retryWrites=true&w=majority&appName=my-app-cluster")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Error connecting to MongoDB: ", err));

// // Define a simple route
// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// Routes
app.use('/api/appLinks', appLinksRouter); // Use the app links routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Handle connection errors
mongoose.connection.on('error', (err) => {
  console.log("MongoDB connection error:", err);
});

mongoose.connection.on('disconnected', () => {
  console.log("MongoDB disconnected");
});
