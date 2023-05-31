import React, { useEffect, useState } from 'react'
import { AdminRoute } from '../../utils/ApiRoutes';

const AdminList = () => {
    const [staffData,setStaffData]=useState();

    const callProfilePage = async () => {
          
      const res = await fetch(AdminRoute, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          }
      });
  
      const data = await res.json();
      console.log(data);
      setStaffData(data);
      }
  
      
  
  useEffect(()=>{
      callProfilePage();
  },[])
  
    return (
      <>
      <div className='container-fluid'>
            <div className='row'>
            <div className='col-12'>
            <table className="table">
    <thead>
      <tr>
      <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Contact</th>
      </tr>
    </thead>
      {staffData?.map((cur,i)=>{
        return(
    <tbody>
      <tr>
        <th scope="row">{cur._id}</th>
        <td>{cur.name}</td>
        <td>{cur.email}</td>
        <td>{cur.contact}</td>
      </tr>
    </tbody>
        )
      })}
      </table>
  </div>
  </div>
            </div>
      </>
    )
  }

export default AdminList
