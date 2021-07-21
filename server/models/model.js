const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type : String, 
        required:true,       

    },
   contact:{
       type:Number, 
       required:true,
      
   }, 
   salary:{
      type:Number, 
      required:true
   }
})

const Employee = new mongoose.model("Employee", schema);

module.exports = Employee;