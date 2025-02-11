import React from 'react'
import Navbarheader from './Navbarheader/navbarheader';
import Navbarmenu from './Navbarmenu/navbarmenu';


const Navbar = () => {

  return (
    <div className='navbar'>
      <Navbarheader />
      <Navbarmenu />

    </div>
  )
}

export default Navbar;