import React from 'react'
import logo from '../assets/logo.png'

import './details.css'
import { useHistory } from 'react-router'
export default function ShopDetails() {
    const history = useHistory()
    return (
        <div className='details_root' >
            <div id='nav-bar' className='nav-bar'
        >
        <div className="logo">
            <img src={logo} alt="" />
            <span>Farmhouse</span>
        </div>    
        <div  className='nav-links'>
      
           
            <a  href="/shop" >Home</a>
            <a  href="/home" >Logout</a>

        </div>
        
        </div>
            <p style={{
                textAlign:'center',
                fontSize:'2rem',
                marginTop:'2rem',
                marginBottom:'5rem'
            }} >Order details</p>
            <div className="amazon">
                <img src="https://m.media-amazon.com/images/I/51P1vHcDqbL._SL1200_.jpg" alt="" />
            <div className="amazon-det">
            
            <div className="details">
                <span>Fertilizer</span>
                <span>Price : <p style={{
                    marginTop:'0.3rem',
                    marginBottom:'0.5rem'
                }} > ₹500/-</p></span>
                <span>Quantity : <p style={{
                    marginTop:'0.3rem',
                    marginBottom:'0.5rem'
                }} > 1</p></span>
                <span>Name : 
                <p style={{
                    marginTop:'0.3rem',
                    marginBottom:'0.5rem'
                }} > Poojitha. M</p>
                
                </span>
                <span>Contact : 
                <p style={{
                    marginTop:'0.3rem',
                    marginBottom:'0.5rem'
                }} > 9704145656</p>
                
                </span>
                
        </div>
            </div>
            </div>
            <div className="buttons">
            <button  onClick={()=>{
                history.goBack()
            }}  >Back   </button>

            <button  >Purchase</button>
            </div>
            <p style={{
                textAlign:'center',
                marginTop: '3rem',
                fontSize: '2rem'
            }}>Reviews</p>
            <div className="review">
            <span style = {{
                fontSize: '1.5rem'
            }}> Revanth</span>
                <p>Using this product earned me a great profit in the previous yield cycle</p>
            </div>

        </div>
    )
}
