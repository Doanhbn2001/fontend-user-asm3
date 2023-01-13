import axiosClient from './axiosClient';
import axios from 'axios';
const url = require('./Url');

const CartAPI = {
  getCarts: (query) => {
    return axios({
      method: 'get',
      // url: `https://backend-asm3.vercel.app/carts${query}`,
      url: `${url}carts${query}`,
      // credentials: 'include',
      withCredentials: true,
    });
  },

  postAddToCart: (query) => {
    // const url = `/carts/add${query}`;
    return axios({
      method: 'post',
      //url: `https://backend-asm3.vercel.app/carts/addCart${query}`,
      url: `${url}carts/addCart${query}`,
      // credentials: 'include',
      withCredentials: true,
    });
  },

  deleteToCart: (query) => {
    // const url = `/carts/delete${query}`;
    return axios({
      method: 'delete',
      //url: `https://backend-asm3.vercel.app/carts/delete${query}`,
      url: `${url}carts/delete${query}`,

      // credentials: 'include',
      withCredentials: true,
    });
  },

  putToCart: (query) => {
    console.log(query);
    return axios({
      method: 'put',
      //url: `https://backend-asm3.vercel.app/carts/update${query}`,
      url: `${url}carts/update${query}`,

      withCredentials: true,
    });
  },
};

export default CartAPI;
