import React from 'react'
import Navbar from './Navbar';
import college from '../Images/banner0.png'
import Events from './Events';

const Home = () => {
  return (
    <>
      <div className='container-fluid'>
        <img src={college} className='img-fluid' id='college-image' style={{width:'100%'}}/>
        <div className='mt-2'>
          <h1>About College</h1>
          <p>The college has its beginning as a small boarding house for the Rajput community in 1885, before becoming a high school in 1899, an Intermediate College in 1928, and a Degree College in 1940. It is the first college in India to award a postgraduate degree in agriculture.</p>
          <p>RBS College has eight faculties - Arts, Commerce, Education, Science, Agriculture, Engineering pharmacy and Technology, and Management and Computer Application, and six campuses - three in Agra itself besides Bichpuri, Mathura and Awagarh.</p>
        </div>
        <div className='container bg-success p-3'>
        <h1>Courses in Raja Balwant Singh Management Technical Campus</h1>
          <div className='row d-flex flex-sm-row gap-3'>
            <div className='col-sm-2'>
            <div className='text-center d-flex flex-column gap-3 border border-dark p-3'>
              <div className='fw-bold text-warning'>MCA</div>
              <button className='btn btn-danger'>Read More</button>
            </div>
            </div>
            <div className='col-sm-2'>
            <div className='text-center d-flex flex-column gap-3 border border-dark p-3'>
              <div className='fw-bold text-warning'>MBA</div>
              <button className='btn btn-danger'>Read More</button>
            </div>
            </div>
            <div className='col-sm-2'>
            <div className='text-center d-flex flex-column gap-3 border border-dark p-3'>
              <div className='fw-bold text-warning'>MBA (Travel & Tourism)</div>
              <button className='btn btn-danger'>Read More</button>
            </div>
            </div>
            <div className='col-sm-3'>
            <div className='text-center d-flex flex-column gap-3 border border-dark p-3'>
              <div className='fw-bold text-warning'>MBA (Integrated)</div>
              <button className='btn btn-danger'>Read More</button>
            </div>
            </div>
            <div className='col-sm-3'>
            <div className='text-center d-flex flex-column gap-3 border border-dark p-3'>
              <div className='fw-bold text-warning'>MCA (Integrated)</div>
              <button className='btn btn-danger'>Read More</button>
            </div>
            </div>
          </div>
        </div>
        <div className='mt-4 border'>
          <h1 className='text-center text-warning'>Campus Events</h1>
          <Events/>
        </div>
      </div>
    </>
  )
}

export default Home
