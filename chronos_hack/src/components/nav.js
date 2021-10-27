import React from 'react';
import { Navbar } from "react-bootstrap";
import './navbar.css';
import logo from '../global_ui/logo';

export default function NavBar() {
    return (
        <div id='nav-bar' className='nav-bar'
        >
        <div className="logo">
        <Navbar.Brand varaint="light">
        <img src={logo} alt="" height="25" style={{paddingRight:'10px'}}/>
        Farmhouse
        </Navbar.Brand>
        </div>    
        <div  className='nav-links'>
      
            <a  href="/">Home</a>
            <a  href="#aboutUs">About</a>       
            <a  href="/loginVendor" >Login as Vendor</a>
            <a  href="/loginFarmer" >Login as Farmer</a>
            <a  href="/shop" >Shop</a>

        </div>
        
        </div>
    )
}
