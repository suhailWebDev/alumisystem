import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { adminlogoutRoute, logoutRoute, logoutstaffRoute } from '../utils/ApiRoutes';
import { UserContext } from './ContextProvider/Context';
import {AdminContext} from './ContextProvider/ContextAdmin';
import {StaffContext} from './ContextProvider/ContextStaff';

const Navbar = () => {
  const navigate=useNavigate();

  const {state,dispatch}=useContext(UserContext);
  const {adminstate,dispatchadmin}=useContext(AdminContext);
  const{staffstate,dispatchstaff}=useContext(StaffContext);
  const logoutuser = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch(logoutRoute, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            Accept: "application/json"
        },
        credentials: "include"
    });

    const data = await res.json();
    console.log(data);

    if (data.status == 201) {
        console.log("use logout");
        localStorage.removeItem("usersdatatoken");
        dispatch({type:"USER",payload:false});
        navigate('/login');
    } else {
        console.log("error");
    }
}

const logoutstaff = async () => {
  let token = localStorage.getItem("usersdatatoken");

  const res = await fetch(logoutRoute, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": token,
          Accept: "application/json"
      },
      credentials: "include"
  });

  const data = await res.json();
  console.log(data);

  if (data.status == 201) {
      console.log("use logout");
      localStorage.removeItem("usersdatatoken");
      dispatchstaff({type:"STAFF",payload:false});
      navigate('/login');
  } else {
      console.log("error");
  }
}



const logoutadmin=async()=>{
  let token = localStorage.getItem("admindatatoken");

    const res = await fetch(adminlogoutRoute, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            Accept: "application/json"
        },
        credentials: "include"
    });

    const data = await res.json();
    console.log(data);

    if (data.status == 201) {
        console.log("Admin logout");
        localStorage.removeItem("admindatatoken");
        dispatchadmin({type:"ADMIN",payload:false});
        navigate('/adminlogin');
    } else {
        console.log("error");
    }
}


const RenderMenu=()=>{
  if(state){
    return(
      <>
        <li className="nav-item">
          <Link className="nav-link active list-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link list-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/events' className="nav-link list-link">Events</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link list-link">Contact</Link>
        </li>
        <li>
        <Link to='/gallery' className="nav-link list-link">Gallery</Link>
        </li>
        <li>
        <Link to='/myprofile' className="nav-link list-link">MyProfile</Link>
        </li>
        <li>
            <button className='btn btn-primary' id='btn-logout' onClick={logoutuser}>Logout</button>
        </li>
      </>
    )
  }else if(adminstate){
    return(
      <>
        <li className="nav-item">
          <Link className="nav-link active list-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link list-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/newevents' className="nav-link list-link">New Events</Link>
        </li>
        <li className="nav-item">
          <Link to='/newadmin' className="nav-link list-link">New Admin</Link>
        </li>
        <li>
        <Link to='/stafflist' className="nav-link list-link">Staff List</Link>
        </li>
        <li>
        <Link to='/adminlist' className="nav-link list-link">Admin List</Link>
        </li>
        <li>
        <Link to='/alumnilist' className="nav-link list-link">Alumni List</Link>
        </li>
        <li>
        <Link to='/eventlist' className="nav-link list-link">Event List</Link>
        </li>
        <li>
            <button className='btn btn-primary' id='btn-logout' onClick={logoutadmin}>Logout</button>
        </li>
      </>
    )}else if(staffstate){
      return(
        <>
                  <li className="nav-item">
          <Link className="nav-link active list-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active list-link" aria-current="page" to="/adminlogin">Admin</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link list-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/events' className="nav-link list-link">Events</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link list-link">Contact</Link>
        </li>
        <li>
        <Link to='/gallery' className="nav-link list-link">Gallery</Link>
        </li>
        <li>
            <button className='btn btn-primary' id='btn-logout' onClick={logoutstaff}>Logout</button>
        </li>
        </>
      )
    }
    else{
    return(
      <>
        <li className="nav-item">
          <Link className="nav-link active list-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active list-link" aria-current="page" to="/adminlogin">Admin</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link list-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/events' className="nav-link list-link">Events</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link list-link">Contact</Link>
        </li>
        <li>
        <Link to='/gallery' className="nav-link list-link">Gallery</Link>
        </li>
        <li>
        <Link to='/newalumni' className="nav-link list-link">New Alumni</Link>
        </li>
        <li>
        <Link to='/newstaff' className="nav-link list-link">New Staff</Link>
        </li>
        <li>
        <Link to='/myprofile' className="nav-link list-link">MyProfile</Link>
        </li>
        <li>
            <Link to='/login'><button className='btn btn-primary' id='btn-login'>Log In</button></Link>
        </li>
      </>
    )
  }
}
 
  
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex flex-lg-row flex-sm-column align-items-center bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-danger fw-bold" to="/">Alumni Management System</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-light" id="navbarToggleExternalContent">
      <ul className="mb-lg-0 mb-sm-0 d-flex flex-md-row align-items-center gap-4 navbar-list ms-auto p-2">
        <RenderMenu/>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
