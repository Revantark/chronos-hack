import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png'

export default function NavBar() {
    return (
        <div id='nav-bar' className='nav-bar'
        >
        <div className="logo">
            <img src={logo} alt="" />
            <span>Farmhouse</span>
        </div>    
        <div  className='nav-links'>
      
            <a  href="/">Home</a>
            <a  href="#aboutUs">About FarmHouse</a>       
            <a  href="/loginVendor" >Login as Vendor</a>
            <a  href="/loginFarmer" >Login as Farmer</a>
            <a  href="/shop" >Shop</a>
            <a  href="/advice" >Expert Advice</a>

        </div>
        
        </div>
    )
}
