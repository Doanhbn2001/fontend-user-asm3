import axiosClient from './axiosClient';
import axios from 'axios';

const HistoryAPI = {
  getHistoryAPI: () => {
    console.log('f1');
    // const url = `/histories${query}`;
    return axios({
      method: 'get',
      url: `http://localhost:5000/histories`,
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
