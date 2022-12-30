import axios from 'axios';
import axiosClient from './axiosClient';
const url = 'http://localhost:5000/';

const UserAPI = {
  getAllData: () => {
    // const url = '/users';
    // return axiosClient.get(url);
    // console.log('f22');
    return axios({
      method: 'get',
      //url: 'https://backend-asm3.vercel.app/users/get-users',
      url: `${url}users/get-users`,
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
    return axios({
      method: 'post',
      //url: `https://backend-asm3.vercel.app/users/signup/${query}`,
      url: `${url}users/signup/${query}`,

      //credentials: 'include',
      withCredentials: true,
    });
  },

  postSignIn: (user) => {
    console.log(user);
    return axios({
      method: 'post',
      //url: 'https://backend-asm3.vercel.app/users/signin',
      url: `${url}users/signin`,

      data: user,
      withCredentials: true,
    });
  },

  getLogout: () => {
    console.log('f1');
    return axios({
      method: 'get',
      //url: 'https://backend-asm3.vercel.app/users/logout',
      url: `${url}users/logout`,
      withCredentials: true,
      credentials: 'include',
      // credentials: 'same-origin',
    });
  },
};

export default UserAPI;
