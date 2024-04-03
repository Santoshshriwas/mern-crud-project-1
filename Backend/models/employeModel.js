const mongoose = require ( 'mongoose' );

const empSchema = mongoose.Schema({

  empno:Number,
  name:String,
  age:Number,
  salary: Number,
})

module.exports = mongoose.model('employe',empSchema);