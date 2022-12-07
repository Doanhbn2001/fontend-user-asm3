import axiosClient from './axiosClient';
import axios from 'axios';

const CartAPI = {
  getCarts: (query) => {
    console.log(query);
    return axios({
      method: 'get',
      url: `http://localhost:5000/carts${query}`,
      // credentials: 'include',
      withCredentials: true,
    });
  },

  postAddToCart: (query) => {
    const url = `/carts/add${query}`;
    return axiosClient.post(url);
  },

  deleteToCart: (query) => {
    const url = `/carts/delete${query}`;
    return axiosClient.delete(url);
  },

  putToCart: (query) => {
    const url = `/carts/update${query}`;
    return axiosClient.put(url);
  },
};

export default CartAPI;
