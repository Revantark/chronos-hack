import React from 'react'
import NavBar from './nav'
import './details.css'
export default function PostDetails() {
    return (
        <div>
            <NavBar/>
            <p style={{
                textAlign:'center',
                fontSize:'2rem'
            }} >Order details</p>
            <div className="details">
                <span>Product Name : Rice</span>
                <span>Quantity : 1000 kgs</span>
                <span>Price : ₹10,000/-</span>
                <span>Contact : 9999999999</span>
            </div>
        </div>
    )
}
