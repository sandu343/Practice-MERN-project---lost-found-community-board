const express = require("express");

const app = express(); // assign express framework into app variable

app.get("/", (req,res)=>res.send("hello world"));

const PORT = 3030;

app.listen(PORT,()=>console.log('server running on PORT $(PORT)'));