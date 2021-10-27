import React from 'react'
import './feature.css'
export default function Features() {
    return (
        <div style={{
            background:'white',
            paddingBottom:'5rem ',
            paddingTop:'2.5rem'
        }} className="features_root">
            <p style={{
                textAlign:'center',
                fontSize:'1.5rem',
               
                marginTop:0,
                paddingTop:'1rem'
            }} >Farmhouse provides </p>
            <div className="feature">
                <div className="single-feature">
                    <span>Feature 1</span>
                    <span>Something idk here</span>
                </div>
                <div className="single-feature">
                    <span>Feature 1</span>
                    <span>Something idk here</span>
                </div>
                <div className="single-feature">
                    <span>Feature 1</span>
                    <span>Something idk here</span>
                </div>
                <div className="single-feature">
                    <span>Feature 1</span>
                    <span>Something idk here</span>
                </div>

            </div>
        </div>
    )
}
