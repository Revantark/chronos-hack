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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, distinctio sed! Commodi minus libero magni atque quod? Maxime culpa ipsa, inventore deserunt blanditiis corrupti vero esse architecto ut reprehenderit necessitatibus.</p>
            
            </div>
            
        </div>
    )
}
