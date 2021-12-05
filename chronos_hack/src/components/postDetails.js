import React from 'react'
import logo from '../assets/logo.png'

import './details.css'
import { useHistory } from 'react-router'
export default function PostDetails() {
    const history = useHistory()
    const index = history.location.state?history.location.state.index:0;
    return (
        <div className='details_root'>
            <div id='nav-bar' className='nav-bar'
        >
        <div className="logo">
            <img src={logo} alt="" />
            <span>Farmhouse</span>
        </div>    
        <div  className='nav-links'>
      
           
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
                <img src="https://images.unsplash.com/photo-1604752466548-d452d280fd7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80" alt="" />
            <div className="amazon-det">
            
            <div className="details">
                <span>Potatoes</span>
                <span>Price : <p style={{
                    marginTop:'0.3rem',
                    marginBottom:'0.5rem'
                }} > ₹10,000/-</p></span>
                <span>Quantity : <p style={{
                    marginTop:'0.3rem',
                    marginBottom:'0.5rem'
                }} > 1000 kgs</p></span>
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
            <button onClick={()=>{
                history.goBack()
            }} className='btn' >Back   </button>

            <button className='btn' onClick={()=>
            {
                const r = localStorage.getItem('items')
                if(r){
                    const rrr = localStorage.getItem('items-b');
                    const r1 = JSON.parse(rrr)
                    const d1 = JSON.parse(r)
                    const dd = d1[index]
                    r1.push(dd)
                    let d = [...d1]
                    d.splice(index,1)
                    localStorage.setItem('items-b',JSON.stringify(r1))
                    localStorage.setItem('items',JSON.stringify(d))
                }
            }
            } >Purchase</button>
            </div>
            
        </div>
    )
}
