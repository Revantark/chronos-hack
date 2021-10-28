import React from 'react'
import { useHistory } from 'react-router'
import './home.css'
import logo from '../../assets/logo.png'

export default function Shop() {
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
            <a  href="/loginVendor" >Login as Vendor</a>
            <a  href="/loginFarmer" >Login as Farmer</a>
            <a  href="/advice" >Expert Advice</a>

        </div>
        
        </div>
            <p style={{
                textAlign:'center',
                fontSize:'2rem'
            }} >Availabe Products</p>
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

    return <div onClick={()=>history.push('/shopDetails')} className='card'>
        <img src="https://images.unsplash.com/photo-1508748169069-82590c9f26e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" alt="" />
        <div className="dets">
        <span className='name'>Methi seeds</span> 
        <span className='qt' >Quantity - 1 Bag</span> 
        <span className='rupee' >Rs. 30/-</span>
        </div>
    </div>
}
const Card2 = ()=>{
    const history = useHistory()

    return <div onClick={()=>history.push('/shopDetails')} className='card'>
        <img src="https://images-eu.ssl-images-amazon.com/images/I/31go7fFAqUL._SX300_SY300_QL70_ML2_.jpg" alt="" />
        <div className="dets">
        <span className='name'>Shovel</span> 
        <span className='qt' >Quantity - 1 </span> 
        <span className='rupee' >Rs. 300/-</span>
        </div>
    </div>
}
const Card1 = ()=>{
    const history = useHistory()

    return <div onClick={()=>history.push('/shopDetails')} className='card'>
        <img src="https://m.media-amazon.com/images/I/51P1vHcDqbL._SL1200_.jpg" alt="" />
        <div className="dets">
        <span className='name'>Fertilizer</span> 
        <span className='qt' >Quantity - 1 </span> 
        <span className='rupee' >Rs. 500/-</span>
        </div>
    </div>
}