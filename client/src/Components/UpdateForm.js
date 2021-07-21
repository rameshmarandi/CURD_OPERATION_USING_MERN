import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {  useHistory,useParams} from "react-router-dom";

 const UpdateForm = () => {
   const {id} = useParams()
   const history = useHistory();
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

  const loadUsers = async()=>{
    const result = await axios.get(`http://localhost:8000/employees`);
   }

// Post the Form Data Into Database

  const postData = async(e) =>{
    e.preventDefault();
    const res = await axios.patch(`http://localhost:8000/employees/${id}`,user)
    alert("Data Updated Successfully")
    loadUsers();
    history.push("/");
    
  }

  useEffect(() =>{
    loadUser();
  },[])
  const loadUser = async() =>{
   const res =  await axios.get(`http://localhost:8000/employees/${id}`);
   setUser(res.data)
  }

    return (
        <> 
         <h2 className="text-center m-5 railway_font">CURD Operation In MERN</h2>
            <div className="update_container">
            <form method="POST" className="border p-4 form_design">
              <div className="update_heading"> 
              <h5 className="text-center font-weight-bold mb-3 ">Update Employee Records</h5>
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
                         onClick={postData}>Update Records</button>
              </form>
            </div>
        </>
    )
}

export default UpdateForm
