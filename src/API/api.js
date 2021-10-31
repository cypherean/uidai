import axios, from 'axios';
var base64enc = "";
var txnid = "";
var data;
export const capgen = () => {
    return axios.get('http:/localhost:5000/captcha')
};