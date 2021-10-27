import React, { useEffect, useState } from "react";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    
  }, []);

  return (
    <div class="box">
        <form>
            <span class="textCenter">LOGIN</span>
            <div class="input-container">
                <input type="text" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <label>Username</label>		
            </div>
            <div class="input-container">		
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <label>Password</label>
            </div>
            <button type="button" class="btn" onClick={()=>{}}>submit</button>
        </form>	
    </div>
  );
}

export default Login;