import React from 'react';
import gallery1 from '../Images/g1.png';
import gallery2 from '../Images/g4.png';
import gallery3 from '../Images/fac1.png';
import gallery4 from '../Images/nfac5.png';
import gallery5 from '../Images/fac3.png';
import gallery6 from '../Images/fac4.png';
import gallery7 from '../Images/fac9.png';
import gallery8 from '../Images/nfac5.png';
import gallery9 from '../Images/nfac8.png';

const Gallery = () => {
  return (
    <>
      <div className='container mt-2 text-center'>
        <div className='row d-sm-flex flex-sm-row gap-2'>
          <div className='col-sm-4'>
            <img src={gallery1} style={{height:'200px'}}/>
          </div>
          <div className='col-sm-4'>
            <img src={gallery2} style={{height:'200px'}}/>
          </div>
          <div className='col-sm-4'>
            <img src={gallery3} style={{height:'200px'}}/>
          </div>
          <div className='col-sm-4'>
            <img src={gallery4} style={{height:'200px'}}/>
          </div>
        </div>
        <div className='row mt-2 d-sm-flex flex-sm-row gap-2'>
          <div className='col-sm-4'>
            <img src={gallery5} style={{height:'200px'}}/>
          </div>
          <div className='col-sm-4'>
            <img src={gallery6} style={{height:'200px'}}/>
          </div>
          <div className='col-sm-4'>
            <img src={gallery7} style={{height:'200px'}}/>
          </div>
          <div className='col-sm-4'>
            <img src={gallery9} style={{height:'200px'}}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
