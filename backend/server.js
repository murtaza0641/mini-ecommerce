require("dotenv").config();
const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, ()=> console.log(`server running on port : ${PORT}`));