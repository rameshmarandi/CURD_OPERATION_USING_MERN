import React,{useState } from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";

const InsertRecordFrom = (props) => {
    const [user, setUser] = useState({
    name : "",
    email : "",
    contact : "",
    salary : ""
  });

  const {name , email , contact , salary} = user;

  const onInputChange= (e)=>{      
       setUser({...user, [e.target.name] : e.target.value})
  }
  
// Adding Employee Details into Database

  const postData = async(e) =>{
    e.preventDefault();
    
    const {name , email , contact , salary} = user;
    
    if(!name || !email || !contact || !salary){

      alert(" Filed Can't be Empty!");

    }else{

      const res = await axios.post("http://localhost:8000/employee",user)  
      alert("Data Inserted Successfully");     
      props.loadUsers();
           
      // Empty input Fild After inserted the Data Successfully
      
      setUser({
      name : "",
      email : "",
      contact : "",
      salary : ""});
    }     
  }
    return (
        <>
          <form onSubmit={(e) =>postData(e)} method="POST" className="border p-4 box-shadow">
               <div className="indert_heading">
               <h5 className="text-center  font-weight-bold mb-3 ">Insert Employee Records</h5>
               </div>
                <div class="form-group">                
                  <input type="text" class="form-control"
                  name="name"
                  onChange={(e) => onInputChange(e)}
                  value={name}
                  placeholder="Enter Employee Name"/>
                </div>
                <div class="form-group">                
                  <input type="email" class="form-control"
                  name="email"
                  onChange={(e) => onInputChange(e)}
                  value={email}
                  placeholder="Enter email"/>
                </div>
                <div class="form-group">                
                  <input type="number" class="form-control"
                  name="contact"
                  onChange={(e) => onInputChange(e)}
                  value={contact}
                  placeholder="Enter Contact"/>
                </div>
                <div class="form-group">                
                  <input type="text" class="form-control"
                  name="salary"
                  onChange={(e) => onInputChange(e)}
                  value={salary}
                   placeholder="Enter Salary"/>
                </div>               
                <button type="submit"
                  class="btn btn-primary btn-block font-weight-bold"
                  >Insert Records</button>
              </form>
        </>
    )
}

// onClick={postData}
export default InsertRecordFrom
