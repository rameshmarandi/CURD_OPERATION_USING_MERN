import React,{useState} from 'react'
import InsertRecordFrom from '../Components/InsertRecordFrom';
import EmployeeTable from '../Components/EmployeeTable';
import axios from "axios";
const Container = () => {

    const[users , setUsers] = useState([]);
 
    //Fetching the data from Database
    
      const loadUsers = async()=>{
        const result = await axios.get(`http://localhost:8000/employees`);
        setUsers(result.data.reverse());
      }
      
    return (
        <>
          <h2 className="text-center m-3">CURD Operation In MERN</h2>
            <div className="container-fluid">
            <div className="center_div">
            <div className="row">
                <div className="col-md-4 sm-10 col-sm-center box-shadow d-flex justify-contenct-center align-items-center mt-5">
                    <InsertRecordFrom loadUsers={loadUsers}/>
                </div>
                {/* Second Col */}

                <div className="col-md-8 col-sm-12  ">
                <EmployeeTable users={users} loadUsers={loadUsers}/>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Container
