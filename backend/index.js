const express = require("express");
const dbConnection = require("./config/db");

const app = express(); // assign express framework into app variable

//DB connection
dbConnection();

app.get("/", (req,res)=>res.send("hello world"));

const PORT = 3030;
app.listen(PORT,()=>console.log(`server running on PORT ${PORT}`));