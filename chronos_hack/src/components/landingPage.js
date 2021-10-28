import React from 'react'
import './landingPage.css'
import {ReactComponent as Down} from './down.svg'

export default function LandingPage() {

 
    return (
        <div id='landingPage' className="lp_root fullscreen">
           
            
                <div className='caption' >

                <span className='title' >F<span style = {{fontSize: '70px'}} >ARM</span>H<span style = {{fontSize: '70px'}} >OUSE</span></span>
                <span className="subtitle">Right Out Of Farm</span> 
                
                </div>
                
                <div className="downIcon" >
                <Down/>
                </div>
                    </div>
    )
}

 