import React from 'react'
import { useHistory } from 'react-router'
import './home.css'
import logo from '../../assets/logo.png'

export default function VendorHome() {
    return (
        <div>
            <div id='nav-bar' className='nav-bar'
        >
        <div className="logo">
            <img src={logo} alt="" />
            <span>Farmhouse</span>
        </div>    
        <div  className='nav-links'>
      
            <a  href="/">Home</a>     
            <a  href="/shop" >Shop</a>
            <a  href="/" >Subscription</a>

            <a  href="/" >Logout</a>


        </div>
        
        </div>
            <p style={{
                textAlign:'center',
                fontSize:'2rem'
            }} >Availabe Orders</p>
            <div className="four">
            <Card1/>
            <Card0/>
            <Card2/>
            <Card1/>
            <Card2/>
            <Card0/>
            <Card1/>
            <Card0/>
            </div>


            
        </div>
    )
}

const Card0 = ()=>{
    const history = useHistory()

    return <div onClick={()=>history.push('/details')} className='card'>
        <img src="https://images.unsplash.com/photo-1592997571659-0b21ff64313b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
        <div className="dets">
        <span className='name'>Rice</span> 
        <span className='qt' >Quantity - 1 ton</span> 
        <span className='rupee' >Rs. 10,000/-</span>
        </div>
    </div>
}
const Card2 = ()=>{
    const history = useHistory()

    return <div onClick={()=>history.push('/details')} className='card'>
        <img src="https://images.unsplash.com/photo-1601493700750-58796129ebb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" alt="" />
        <div className="dets">
        <span className='name'>Rice</span> 
        <span className='qt' >Quantity - 1 ton</span> 
        <span className='rupee' >Rs. 10,000/-</span>
        </div>
    </div>
}
const Card1 = ()=>{
    const history = useHistory()

    return <div onClick={()=>history.push('/details')} className='card'>
        <img src="https://images.unsplash.com/photo-1604752466548-d452d280fd7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80" alt="" />
        <div className="dets">
        <span className='name'>Rice</span> 
        <span className='qt' >Quantity - 1 ton</span> 
        <span className='rupee' >Rs. 10,000/-</span>
        </div>
    </div>
}