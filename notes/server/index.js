const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

//Database Connection

mongoose.connect("mongodb://localhost:27017/noteapp?readPreference=primary&appname=MongoDB%20Compass&ssl=false", {useNewUrlParser: true }
);

app.post("/addnote", async (req, res) => {
    
  });

app.listen(3001, () => {
    console.log("you are connected")
})



