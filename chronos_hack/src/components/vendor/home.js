import React from 'react'
import { useHistory } from 'react-router'
import NavBar from '../nav'
import './home.css'
export default function VendorHome() {
    return (
        <div>
            <NavBar/>
            <p style={{
                textAlign:'center',
                fontSize:'2rem'
            }} >Availabe Orders</p>
            <div className="four">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>


            
        </div>
    )
}

const Card = ()=>{
    const history = useHistory()

    return <div onClick={()=>history.push('/details')} className='card'>
        <span>Rice</span> 
        <span>Quantity - 1 ton</span> 
        <span>Price : ₹10,000/-</span>
    </div>
}