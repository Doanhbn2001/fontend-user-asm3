import axiosClient from './axiosClient';
import axios from 'axios';
const url = require('./Url');

const HistoryAPI = {
  getHistoryAPI: () => {
    console.log('f1');
    // const url = `/histories${query}`;
    return axios({
      method: 'get',
      //url: `https://backend-asm3.vercel.app/histories`,
      url: `${url}histories`,
      // credentials: 'include',
      withCredentials: true,
    });
  },

  getDetail: (id) => {
    const url = `/histories/${id}`;
    return axiosClient.get(url);
  },
};

export default HistoryAPI;
