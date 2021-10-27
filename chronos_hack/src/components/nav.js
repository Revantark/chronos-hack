import React from 'react'
import './navbar.css'

export default function NavBar() {
    return (
        <div id='nav-bar' className='nav-bar'
        >
        <div className="logo">
            <span>FarmHouse</span>
        </div>    
        <div  className='nav-links'>
      
            <a  href="#landingPage">Home</a>
            <a  href="#dates">About AgriTech</a>       
            <a  href="#codeCraft" >Login</a>
        
        </div>
        
        </div>
    )
}
