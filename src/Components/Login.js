import React, { useState, useContext } from "react";
import { axiosHelper } from "../Utilities/axiosHelper";
import {useHistory} from 'react-router-dom';
import AppContext from '../Utilities/AppContext'

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const { setToken } = useContext(AppContext);

    function success(res) {
        console.log(res);
        if (res.status == 200) {
            setToken(res.data.access_token)
            sessionStorage.setItem('token', res.data.access_token);
            history.push('/profile');
        }
    }

    function clickHandler() {
        const method = 'post';
        const url = 'http://localhost:8000/v1/oauth/token';
        const data = { username: email, password, grant_type: "password", client_id: 2, client_secret: "fUJpoAQBiW3peMhPtImTZrMhmq0VFc9SJIiUhcAt", scope: ""};

        axiosHelper(method, url, success, data)
    }

    return (
        <div class="container">
            <div class="form-group">
                <h4>Enter Email:</h4>
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
            </div>
            <div class="form-group">
                <h4>Enter Password:</h4>
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" class="form-control" id="InputPassword" placeholder="Enter Password" />
            </div>
            <button onClick={clickHandler} class="btn btn-primary">Submit</button>
        </div>
    )
}

export default Login;