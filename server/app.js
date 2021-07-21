const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./routes/router');

const PORT = process.env.PORT || 8000;

require("./db/connection")(); // Database Initialization
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())


//API routes
app.use(route) ;

app.listen(PORT , () =>{
    console.log(`Server is running at ${PORT}`);
})