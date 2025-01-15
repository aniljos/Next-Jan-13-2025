'use client'

import axios from 'axios';
import { ChangeEvent, useState } from "react"
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();

    function handleUsernameChange(evt: ChangeEvent<HTMLInputElement>) {

        const value = evt.target.value;
        setUsername(value);
    }

    async function login() {

        if (!username || !password) {
            setMessage("Enter the credentials!");
        }
        else {

            //validate the credentials

            const url = "http://localhost:9000/login"
            // axios
            //     .post(url, {name: username, password})
            //     .then((response) => {
            //         console.log("fullfilled", response)
            //     }) //fullfilled
            //     .catch((error) => {
            //         console.log("rejected", error)
            //     }) //rejected
            //     .finally(() => {
            //         console.log("in finally");
            //     })

            try {

                const response = await axios.post(url, { name: username, password });
                //fullfilled
                console.log("fullfilled", response)
                setMessage("");
                //dispatch action

                dispatch({
                    type: "auth_login", payload: {

                        isAuthenticated: true,
                        userName: username,
                        accessToken: response.data.accessToken,
                        refreshToken: response.data.refreshToken

                    }
                })
                router.push("/products");

            } catch (error) {
                //rejected
                console.log("rejected", error)
                setMessage("Invalid Credentials");
                dispatch({type: "auth_logout"})
            }
            finally {
                console.log("in finally");
            }


        }
    }

    return (
        <div>
            <h4>Login</h4>
            <p>Login to your Next.js application.</p>

            {message ? <div className="alert alert-warning">{message}</div> : null}

            <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input className="form-control" type="text" id="userName" value={username} onChange={handleUsernameChange} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" id="password" value={password}
                    onChange={evt => setPassword(evt.target.value)} />
            </div>

            <br />
            <button className="btn btn-success" onClick={login}>Login</button>

        </div>
    )

}