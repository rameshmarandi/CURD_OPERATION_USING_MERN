const express = require('express');
const route = express.Router();
const Employee = require('../models/model');


//Create Employee routes


route.post("/employee" ,async(req, res) => {
    try{ 

        const {name , email , contact , salary} = req.body;
        if(!name || !email || !contact || !salary){
           return res.status(400).json({error : "Please Fill the filed Properly"});
        }else{
            const employeeData = new Employee(req.body);
            const createEmp = await employeeData.save();
            res.status(201).send(createEmp);
        }
       
        // console.log(createEmp);
    }catch(e){
        res.status(400).send(e);
    }

})

//Get all the Employee Data

route.get("/employees" , async(req, res) => {
    try{ 
       const resData = await Employee.find()
       res.send(resData);
    }catch(e){
        res.send(e);
    }
})

//Get the Employee Indivisal Data

route.get("/employees/:id" , async(req, res) => {
    try{ 
        const _id = req.params.id;
        const resEmployeeData = await Employee.findById(_id);
        // console.log(resEmployeeData);
        if(!resEmployeeData){
            res.status(404).send();
        }else{
            res.status(200).send(resEmployeeData);
        }
        
    }catch(e){
        res.status(500).send(e);
    }
})

//Delete the Employee By id

route.delete("/employees/:id" , async(req, res) =>{
    try{ 
       const _id = req.params.id; 
       const deleteEmployee = await Employee.findByIdAndDelete(_id);
       if(!deleteEmployee){
             res.status(404).send("Employee not Exist");
       }else{
           res.status(200).send("Employee Delete Sucessfully");
       }

    }catch(e){
        res.status(500).send(e);
    }
})

//Update the Employee


route.patch("/employees/:id", async(req,res) =>{
    try{
     const _id = req.params.id;
    
     const updateEmployee = await Employee.findByIdAndUpdate(_id,req.body,{new:true});
      
     // It is because it display the updated new );
     res.send(updateEmployee);
     
    }catch(e){
        res.status(500).send(e);
    }
})


module.exports = route;
