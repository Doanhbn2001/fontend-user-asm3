import axios from 'axios';
import axiosClient from './axiosClient';

const ProductAPI = {
  getAPI: () => {
    return axios({
      method: 'get',
      url: 'http://localhost:5000/products/get-all-products',
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
      url: `http://localhost:5000/products/${id}`,
      // credentials: 'include',
      withCredentials: true,
    });
  },

  getPagination: (query) => {
    console.log(query);
    // const url = `/products/`;
    return axios({
      method: 'get',
      url: `http://localhost:5000/products/pagination${query}`,
      // credentials: 'include',
      withCredentials: true,
    });
  },
};

export default ProductAPI;
