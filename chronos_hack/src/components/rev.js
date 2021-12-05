import React, { useState } from 'react'
import InputField from './input'
import "./rev.css"
export default function Rev() {
    const [facultyLoginBar, setFacultyLoginBar] = useState(false)
    return (
        <div className="container">
            <p className = "heading">A.R.M.A</p>
            <p className = "subHead">Automating and Digitilizing Event Organization</p>

            <div className="loginbar"  >
                <div style={{
                    backgroundColor:facultyLoginBar? "#F5F5F5" :"#139BEB",
                    color:facultyLoginBar? "black" : "white",
                    zIndex: facultyLoginBar? "0" : "10",
                    paddingRight: facultyLoginBar? "3.5rem" : "2.5rem"
                }} className="forumbar" onClick={(e)=>{
                    setFacultyLoginBar(false)
                }}><span>Forum</span></div>
                <div style={{
                    backgroundColor:facultyLoginBar? "#139BEB" : "#F5F5F5",
                    color: facultyLoginBar? "white" : "black",
                    zIndex: facultyLoginBar? "10" : "0",
                    paddingLeft: facultyLoginBar? "2.5rem" : "3.5rem"

                }}  className="facultybar" onClick={(e)=>{
                    setFacultyLoginBar(true)
                }}><span>Faculty</span></div>
            </div>
            <div className = "inputboxes">
            <InputField placeholder="ID" type="text"></InputField>
            <InputField placeholder="PASSWORD"  type="text"></InputField>
            </div>
            
            <button className = "loginy">Login</button>
            <p style ={{
                color: "#0B5B8A",
                textAlign: "center",
                marginRight: "25px",
                fontWeight: "bold"
            }}>Forgot Password?</p>

        </div>
    )
}
