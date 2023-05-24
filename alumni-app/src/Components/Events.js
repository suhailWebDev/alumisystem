import React, { useState,useEffect } from 'react'
import { EventRoute, addEventRoute } from '../utils/ApiRoutes';

const Events = () => {
  const [eventData,setEventData]=useState();

  const callProfilePage = async () => {
        
    const res = await fetch(EventRoute, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });

    const data = await res.json();
    console.log(data);
    setEventData(data);
    }

    

useEffect(()=>{
    callProfilePage();
},[])
  return (
    <>
    {eventData?.map((cur,i)=>{
      return(
      <div className='container mt-2 p-sm-5'>
        <div className='d-flex flex-row gap-5 border-dark border p-sm-4'>
        <div className='mx-sm-auto'>
          <h3 className='text-primary'>{cur.eventdate}</h3>
        </div>
        <div className='mx-sm-auto'>{cur.eventname}</div>
        <div className='mx-sm-auto'>{cur.eventdescription}</div>
        </div>
      </div>)
    })}
    </>
  )
}

export default Events
