import axiosClient from './axiosClient';
import axios from 'axios';

const CartAPI = {
  getCarts: (query) => {
    return axios({
      method: 'get',
      url: `http://localhost:5000/carts${query}`,
      // credentials: 'include',
      withCredentials: true,
    });
  },

  postAddToCart: (query) => {
    const url = `/carts/add${query}`;
    return axios({
      method: 'post',
      url: `http://localhost:5000/carts/addCart${query}`,
      // credentials: 'include',
      withCredentials: true,
    });
  },

  deleteToCart: (query) => {
    const url = `/carts/delete${query}`;
    return axios({
      method: 'delete',
      url: `http://localhost:5000/carts/delete${query}`,
      // credentials: 'include',
      withCredentials: true,
    });
  },

  putToCart: (query) => {
    console.log(query);
    return axios({
      method: 'put',
      url: `http://localhost:5000/carts/update${query}`,
      withCredentials: true,
    });
  },
};

export default CartAPI;
