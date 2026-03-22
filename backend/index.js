require("dotenv").config(); // 🔥 load .env variables

const express = require("express");
const dbConnection = require("./config/db");

const app = express();

// Middleware 
app.use(express.json());

// DB connection
dbConnection();

app.get("/", (req, res) => res.send("hello world"));

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));