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
          <div className='row d-flex flex-sm-row gap-3 mt-4'>
            <div className='col-12'>
            <div className='text-center d-flex flex-column gap-3 border border-dark p-3'>
              <div className='fw-bold text-warning'>MCA</div>
              <p>Master of Computer Applications or MCA is a professional degree in computer science. MCA is a two year long professional post-graduate degree course for students who deeply want to learn computer application development. The MCA course is a combination of both theoretical and practical knowledge</p>
            </div>
            </div>
            <div className='col-12'>
            <div className='text-center d-flex flex-column gap-3 border border-dark p-3'>
              <div className='fw-bold text-warning'>MBA</div>
              <p>A Master of Business Administration (MBA; also Master in Business Administration) is a postgraduate degree focused on business administration. The core courses in an MBA program cover various areas of business administration such as accounting, applied statistics, human resources, business communication, business ethics, business law, strategic management, business strategy, finance, managerial economics, management, entrepreneurship, marketing, supply-chain management, and operations management in a manner most relevant to management analysis and strategy.</p>
            </div>
            </div>
            <div className='col-12'>
            <div className='text-center d-flex flex-column gap-3 border border-dark p-3'>
              <div className='fw-bold text-warning'>MBA (Travel & Tourism)</div>
              <p>MBA Travel and Tourism is a 2 year PG program which includes the introduction of the travel and tourism industry . It focuses on Tourism Marketing, Communication skills, Tourism policy and law, Fundamentals of tourism etc. Candidates need to have a UG degree with 50% aggregate marks in relevant streams from a recognised University for getting admission in the course. For admission to colleges offering MBA in travel and tourism degree candidates have to get good scores in entrance exams like MAT, XAT, GMAT, CAT etc. </p>
            </div>
            </div>
            <div className='col-12'>
            <div className='text-center d-flex flex-column gap-3 border border-dark p-3'>
              <div className='fw-bold text-warning'>MBA (Integrated)</div>
              <p>The Integrated MBA program, commonly known as IPM (Integrated Programme in Management), is a five-year management program that combines both undergraduate (BBA) and postgraduate (MBA). It is one of the coveted programmes students can enroll in for MBA after class 12.</p>
            </div>
            </div>
            <div className='col-12'>
            <div className='text-center d-flex flex-column gap-3 border border-dark p-3'>
              <div className='fw-bold text-warning'>MCA (Integrated)</div>
              <p>MCA (Integrated) is an on-campus five-year full-time course designed to prepare aspiring students for a bright career as software professionals after 10+2. The course comprises ten semesters (two semesters in each academic year).</p>
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
