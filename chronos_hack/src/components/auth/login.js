import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import "./login.css";

function Login({farmer=true}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const histrory = useHistory()
  useEffect(() => {
    
  }, []);

  return (
    <div>
      <div id='nav-bar' className='nav-bar'
        >
        <div className="logo">
            <span>FarmHouse</span>
        </div>    
        <div  className='nav-links'>
      
            <a  href="/">Home</a>
            <a  href={`/login${farmer?"Vendor":"Farmer"}`} >Login as {farmer?"Vendor":'Farmer'}</a>
        </div>
        
        </div>
    <div class="box">
      
        <form>
            <span class="textCenter">LOGIN {farmer?"Farmer":"Vendor"}</span>
            <div class="input-container">
                <input type="text" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <label>Username</label>		
            </div>
            <div class="input-container">		
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <label>Password</label>
            </div>
            <button type="button" class="btn" onClick={()=>{
              if(farmer){
                histrory.push('/farmer')
              }else{
                histrory.push('/vendor')
              }
            }}>submit</button>
        </form>	
    </div>
    </div>

  );
}

export default Login;