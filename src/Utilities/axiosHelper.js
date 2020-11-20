import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

export async function axiosHelper(method, url, func, data = {}, body = {}) {

    // const history = useHistory();


    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
    }
    return await axios(
        {
            method,
            url,
            data,
            body,
            headers,
        }
    ).then(res => func(res))
    .catch(err => console.log('error: ', err));

}