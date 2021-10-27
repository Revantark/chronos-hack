import React from 'react'
import NavBar from './nav'
import './details.css'
import { useHistory } from 'react-router'
export default function PostDetails() {
    const history = useHistory()
    return (
        <div className='details_root' >
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
            <div className="buttons">
            <button onClick={()=>{
                history.goBack()
            }} className='btn' >Back   </button>

            <button className='btn' >Purchase</button>
            </div>
            
        </div>
    )
}
