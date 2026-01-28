// Importing

import axios from 'axios';

import config from './config';

//Exporting async fuction

//1. User Login

export async function loginUser(email,password) {
    const URL = config.BASE_URL + "/users/signin";
    const body = {email,password};
    const response = await axios.post(URL,body);
    return response.data;
}

//2. User Register
export async function registerUser(name,email,password,mobile){
    const URL = config.BASE_URL + "/users/signup";
    const body = {name,email,password,mobile};
    const response = await axios.post(URL,body);
    return response.data;
}