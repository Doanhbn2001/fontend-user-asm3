import axiosClient from './axiosClient';
import axios from 'axios';
const url = require('./Url');

const CheckoutAPI = {
  postEmail: (query) => {
    // const url = `/email${query}`;
    console.log(url);
    return axios({
      method: 'get',
      //url: `https://backend-asm3.vercel.app/email${query}`,
      url: `${url}email${query}`,
      // credentials: 'include',
      withCredentials: true,
    });
  },
};

export default CheckoutAPI;
