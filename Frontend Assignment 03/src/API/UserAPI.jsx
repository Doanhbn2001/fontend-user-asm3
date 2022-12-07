import axios from 'axios';
import axiosClient from './axiosClient';

const UserAPI = {
  getAllData: () => {
    // const url = '/users';
    // return axiosClient.get(url);
    // console.log('f22');
    return axios({
      method: 'get',
      url: 'http://localhost:5000/users/get-users',
      // credentials: 'include',
      withCredentials: true,
    });
  },

  getDetailData: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  postSignUp: (query) => {
    const url = `/users/signup/${query}`;
    return axiosClient.post(url);
  },

  postSignIn: (user) => {
    return axios({
      method: 'post',
      url: 'http://localhost:5000/users/signin',
      data: user,
      withCredentials: true,
    });
  },

  getLogout: () => {
    console.log('f1');
    return axios({
      method: 'get',
      url: 'http://localhost:5000/users/logout',
      withCredentials: true,
      credentials: 'include',
      // credentials: 'same-origin',
    });
  },
};

export default UserAPI;
