var express = require("express")
const employe = require("./controllers/employeControllers")
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/EMPSAVE");
var  app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.post('/insert' , (req,res)=>{
  res.send("all is Done");
})
app.post('/datasave' , (req,res)=>{
  res.send("data Done");
})

app.post("/datasave",employe.empInsert );



app.listen(8000)