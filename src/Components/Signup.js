import React, { useState } from "react";
import { axiosHelper } from "../Utilities/axiosHelper";
import {useHistory} from 'react-router-dom';

function Signup() {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    function success(res) {
        console.log(res);
        if (res.status == 200) {
            history.push('/login');
        }
    }
    function clickHandler() {

        const method = 'post';
        const url = 'http://localhost:8000/register';
        const data = { name, email, password };

        axiosHelper(method, url, success, data)
    }

    return (
        <div class="container">
            <div class="form-group">
                <h4>Name:</h4>
                <input onChange={e => setname(e.target.value)} value={name} type="text" class="form-control" id="InputName" aria-describedby="emailHelp" placeholder="Enter Name" />
            </div>
            <div class="form-group">
                <h4>Email:</h4>
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
            </div>
            <div class="form-group">
                <h4>New Password:</h4>
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" class="form-control" id="InputPassword" placeholder="Enter Password" />
            </div>
            <button onClick={clickHandler} class="btn btn-primary">Submit</button>
        </div>
    )
}

export default Signup;