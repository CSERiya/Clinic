import React from 'react'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className='navbar'>
        <h2>A M R U T A M</h2>
      
     <div className='contents'>
       <span>Home</span>
       <span className='doctor'>Find Doctors</span>
       <span>About Us</span>
        </div>
      <div className='navlogincart'> 
      <button className='login'>Login</button>
      <button className='signup'>Sign-up</button>
      </div>
    </div>
  )
}
 
export default Navbar
