import React,{useState, useEffect} from 'react'
import {  Link } from "react-router-dom";
import axios from "axios";

const EmployeeTable = (props) => {

  useEffect(()=>{
    props.loadUsers();
  },[])


  //Delete Employee Records 

  const deleteUser = async(id) =>{
    window.confirm('Are you sure to Delete ?')
        const res = await axios.delete(`http://localhost:8000/employees/${id}`);
        
        props.loadUsers(); //Rerender the User Data
  }
    return (
        <>
           <table class="table mt-5 border shadow-lg">
              <thead class="thead-dark">
                <tr>
                 {/* < th scope="col">SL No</th> */}
                  <th scope="col">Emp Name</th>
                  <th scope="col">Email </th>
                  <th scope="col">Contact</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Operaton</th>
                </tr>
              </thead>
              <tbody>
                {props.users.map((user, index) =>(
                  <tr>
                  <th scope="row" className="text-capitalize">{user.name}</th>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>{user.salary}</td>
                  <td>
                      <Link className="btn btn-success  font-weight-bold mr-3" to= {`/view/${user._id}`}>View</Link>
                      <Link className="btn btn-primary btn-outline-primary font-weight-bold mr-3" to= {`/update/${user._id}`}>Edit</Link>
                      <Link className="btn btn-danger text-white font-weight-bold " onClick={() => deleteUser(user._id)}>Delete</Link>
                  </td>
                </tr>
                ))}
                
                {/* */}
              </tbody>
            </table> 
        </>
    )
}

export default EmployeeTable
