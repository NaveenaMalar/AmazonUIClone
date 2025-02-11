import React, { useContext } from 'react'
import './navbarmenu.css';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../App.js';


const Navbarmenu = () => {

  const {showSidebar} = useContext(MyContext)
  return (
    
    <div className='navbarmenu'>
      <div className='navbarmenuleft'>
        <div className="menu" onClick={showSidebar}>
          <i class="fa-solid fa-bars"></i>
          <span className='MenuAll' >All</span>
        </div>
        <div className='menuitems'>
          <Link to="/electronics" className='Electronics'>Electronics</Link>
          <Link to="/Todaydeals" className='Electronics'>Today's Deals</Link>
          <span className='item Fresh'>Fresh</span> 
          <span className='item MXPlayer'>MXPlayer</span>
          <span className='item Sell'>Sell</span>
          <span className='item estSellers'>Best Sellers</span>
          <span className='item Mobiles'>Mobiles</span>
          <span className='item Home&Kitchen'>Home & Kitchen</span>
          <span className='item CustomerService'>Customer Service</span>

        </div>
      </div>
      <div className='navbarmenuright'>
        <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Vettaiyan/400x39-SWM-NP._CB543047660_.jpg' alt='primeloc' />
        
      </div>
    </div>
  )
}

export default Navbarmenu;