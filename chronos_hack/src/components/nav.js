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
      
            <a  href="/">Home</a>
            <a  href="#aboutUs">About AgriTech</a>       
            <a  href="/loginVendor" >Login as Vendor</a>
            <a  href="/loginFarmer" >Login as Farmer</a>
            <a  href="/shop" >Shop</a>

        </div>
        
        </div>
    )
}
