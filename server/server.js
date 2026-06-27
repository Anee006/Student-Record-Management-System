require("dotenv").config();

const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");

// Import database connection
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(studentRoutes);

app.get("/", (req, res) => {
    res.send("Student Record Management API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});