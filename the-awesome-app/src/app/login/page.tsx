'use client'

import { ChangeEvent, useState } from "react"

export default function LoginPage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsernameChange(evt: ChangeEvent<HTMLInputElement>){

        const value = evt.target.value;
        setUsername(value);
    }

    return (
        <div>
            <h4>Login</h4>
            <p>Login to your Next.js application.</p>

            <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input className="form-control" type="text" id="userName" value={username} onChange={handleUsernameChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" id="password" value={password} 
                                                                onChange={evt => setPassword(evt.target.value)}/>
            </div>

            <br />
            <button className="btn btn-success">Login</button>

        </div>
    )

}