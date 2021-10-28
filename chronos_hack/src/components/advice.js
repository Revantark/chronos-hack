import React from 'react'
import NavBar from './nav'
import './advice.css'
export default function Advice() {

    return (
        <div  >
            <NavBar/>
            <div className='advice' >

            <p style={{
                textAlign:'center',
                fontSize:'2rem'
            }} >Expert Advice</p>
            <p>
                Farmers will be able to contact experts and get advice about crop production
            </p>

            <button className="btn">CONTACT</button>
            
            </div>
            
        </div>
    )
}
