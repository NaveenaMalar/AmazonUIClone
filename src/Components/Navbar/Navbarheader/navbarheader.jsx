import React,{useContext} from 'react';
import amazonlogo from '../../../Images/amazonlogo.PNG';
import './navbarheader.css';
import IndianFlag from '../../../Images/IndianFlag.png';
import {MyContext} from '../../../App';
import { Link } from 'react-router-dom';

const Navbarheader = () => {
    
  const data = useContext(MyContext);

  return (
    <div className='navbarheader'>
        <div className='navbarheaderleft'>
            <div className='navbarheaderleftlogo'>
               <a href="https://naveenamalar.github.io/AmazonUIClone"> <img className='amazonlogo' src={amazonlogo} alt='amazonlogo' /> </a>
                <span className='navbar_inlogo'>.in</span>
            </div>  
            <div className='navbarheaderlocation'>
            
            <i class="bi bi-geo-alt locationsvg"></i>
               
                <div className='deliveryaddress'>
                    <p className='deliveryloc'>Delivering to coimbatore 641018</p>
                    <p className='updateloc'>Update location</p>
                </div> 
            </div>  
        </div>
        <div className='navbarheadercenter'>
            <div className='searchdropdown'>
                <div className='searchname'>All</div>
                <i className='fa fa-caret-down searchdropdownimg'></i>
            </div>
            <input className='searchbar' placeholder='Search Amazon.in' /> 
            
            <div className='searchicon'>
            <i className='fa fa-search '></i></div>          
        </div>
        <div className='navbarheaderright'>
            <div className='country'>
                <img className='Flag' src={IndianFlag} alt='country Name and Flag' />
                <span className='countryName'>EN</span>
                <i className='fa fa-caret-down searchdropdownimg1'></i>
            </div>
            <div className='accountsorders'>
                <div className='Accountlist'>
                    <span className='signin'>Hello,sign in</span>
                    <span className='Accounts'>Account & Lists</span>
                </div>
                <div className='searchdropdownimg2'>
                    <i className='fa fa-caret-down'></i>
                </div>
            </div>
            <div className='orderreplacement'>
                <span className='returns'>Returns</span>
                <span className='orders'>& Orders</span>
            </div>
            <Link className='cart' to="/mycart">
                <div className='navbarcart'>
                    <span className='cartcount'>{data.count}</span>
                    <i class="bi bi-cart"></i>
                </div>
                <span className='cartname'>Cart</span>
            </Link>
       </div>
    </div>
  )
}

export default Navbarheader;