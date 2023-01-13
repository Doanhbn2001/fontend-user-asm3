import axios from 'axios';
import axiosClient from './axiosClient';
const url = require('./Url');
// const url = 'http://localhost:5000/';

const ProductAPI = {
  getAPI: () => {
    return axios({
      method: 'get',
      //url: 'https://backend-asm3.vercel.app/products/get-all-products',
      url: `${url}products/get-all-products`,
      // credentials: 'include',
      withCredentials: true,
    });
  },

  getCategory: (query) => {
    const url = `/products/category${query}`;
    return axiosClient.get(url);
  },

  getDetail: (id) => {
    console.log('f1');

    return axios({
      method: 'get',
      //url: `https://backend-asm3.vercel.app/products/${id}`,
      url: `${url}products/${id}`,

      // credentials: 'include',
      withCredentials: true,
    });
  },

  getPagination: (query) => {
    console.log(query);
    // const url = `/products/`;
    return axios({
      method: 'get',
      //url: `https://backend-asm3.vercel.app/products/pagination${query}`,
      url: `${url}products/pagination${query}`,

      // credentials: 'include',
      withCredentials: true,
    });
  },
};

export default ProductAPI;
