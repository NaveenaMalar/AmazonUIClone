import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footertop'>
        <div className='list 1'>
          <div className='subtitle'>Get to Know us</div>
          <div className='content'>About Amazon</div>
          <div className='content'>Careers</div>
          <div className='content'>Press Releases</div>
          <div className='content'>Amazon Sciences</div>
        </div>
        <div className='list 2'>
          <div className='subtitle'>Connect with us</div>
          <div className='content'>Facebook</div>
          <div className='content'>Twitter</div>
          <div className='content'>Instagram</div>
        </div>
        <div className='list 3'>
          <div className='subtitle'>Make Money with us</div>
          <div className='content'>Sell on Amazon</div>
          <div className='content'>Sell under Amazon Accelerator</div>
          <div className='content'>Protect and Build yourself</div>
          <div className='content'>Supply to Amazon</div>
        </div>
      </div>
      <div className='footerbottom'>© 1996-2024, Amazon.com, Inc. or its affiliates</div>
    </div>
  )
}

export default Footer