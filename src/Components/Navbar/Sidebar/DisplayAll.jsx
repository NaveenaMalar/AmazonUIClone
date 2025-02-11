import React, { useContext } from 'react';
import './DisplayAll.css';
import {MyContext}  from '../../../App.js';

const DisplayAll = () => {

  const {showSidebar} = useContext(MyContext)

  return (
    <div className='AllContents'>
      <div className='transparent'>
        <div className='AllContents'>
          <div className='allHeader'>
            <div>Hello, Welcome!</div>
            <div className='close' onClick={showSidebar}><i class="bi bi-x-square"></i></div>
          </div>
          <div className='list'>
            <div>
              <div className='Title'>Trending</div>
              <div className='lists'>Best Sellers</div>
              <div className='lists'>New Releases</div>
              <div className='lists'>Movers and Shakers</div>
            </div>
            <div>
            <div className='Title'>Help & Settings</div>
              <div className='lists'>Your Account</div>
              <div className='lists'>Customer Service</div>
              <div className='lists'>Exit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayAll