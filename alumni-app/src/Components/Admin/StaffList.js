import React, { useEffect, useState } from 'react'
import { StaffRoute } from '../../utils/ApiRoutes';

const StaffList = () => {
  const [staffData,setStaffData]=useState();

  const callProfilePage = async () => {
        
    const res = await fetch(StaffRoute, {
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
      <th scope="col">Birth</th>
      <th scope="col">Date of Join</th>
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
      <td>{cur.birth}</td>
      <td>{cur.join}</td>
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

export default StaffList
