import React, { useEffect, useState } from 'react'
import { AlumniRoute } from '../../utils/ApiRoutes';

const AlumniList = () => {
  const [alumniData,setAlumniData]=useState();

  const callProfilePage = async () => {
        
    const res = await fetch(AlumniRoute, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });

    const data = await res.json();
    console.log(data);
    setAlumniData(data);
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
      <th scope="col">Address</th>
      <th scope="col">Profession</th>
      <th scope="col">Passyear</th>
    </tr>
  </thead>
    {alumniData?.map((cur,i)=>{
      return(
  <tbody>
    <tr>
      <th scope="row">{cur._id}</th>
      <td>{cur.name}</td>
      <td>{cur.email}</td>
      <td>{cur.contact}</td>
      <td>{cur.address}</td>
      <td>{cur.occupation}</td>
      <td>{cur.passyear}</td>
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


export default AlumniList
