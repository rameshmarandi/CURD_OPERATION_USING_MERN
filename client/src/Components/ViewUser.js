import React,{useState,useEffect} from 'react'
import {  Link, useHistory,useParams} from "react-router-dom";
import axios from "axios";
const ViewUser = () => {
   const {id} = useParams();
    const[user , setUser] = useState({
        name:"",
        email :"",
        contact:"",
        salary : ""
    });

    useEffect(() =>{
        userLoader();
    },[])

    const userLoader =async() =>{
        const result = await axios.get(`http://localhost:8000/employees/${id}`);
       
        setUser(result.data)
    }

    return (
        <>
        <div className="container d-flex justify-content-center align-items-center mt-5">
            
            <div className="user_data border shadow ">
                <Link className="btn btn-primary btn-outline-primary font-weight-bold mr-3" to= {"/"}>
                   <i class="fas fa-arrow-circle-left mr-3"></i>
                   Go Back
                </Link>
                <div className="heading">
                <h3 className="text-center font-weight-bold text-white">Employee Information</h3>
                </div>
                <hr />
                 <h5 className="ml-4 ">Employee Name : <span className="ml-2 text-uppercase"> {user.name}</span></h5>
                 <hr />
                 <h5 className="ml-4">Employee Email : <span className="ml-2">{user.email}</span></h5>
                 <hr />
                 <h5 className="ml-4">Employee Contact :<span className="ml-2"> {user.contact}</span></h5>
                 <hr />
                 <h5 className="ml-4">Employee Salary :<span className="ml-2"> {user.salary}</span></h5>
               
            </div>     
            
        </div> 
        </>
    )
}

export default ViewUser
