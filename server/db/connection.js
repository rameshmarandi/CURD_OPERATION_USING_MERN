

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:"./config.env"});

const DB = process.env.DATABASE;

const database = () =>{
    mongoose.connect(DB , {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    }).then(() =>{
        console.log("Connection Successful");
    }).catch((err) =>{
        console.log("No Connection");
    })
    
}


module.exports = database; 