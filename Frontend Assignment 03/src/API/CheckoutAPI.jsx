import axiosClient from './axiosClient';
import axios from 'axios';

const CheckoutAPI = {
  postEmail: (query) => {
    const url = `/email${query}`;
    return axios({
      method: 'get',
      url: `http://localhost:5000/email${query}`,
      // credentials: 'include',
      withCredentials: true,
    });
  },
};

export default CheckoutAPI;
