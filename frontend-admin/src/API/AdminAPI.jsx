import axios from 'axios';
// import axiosClient from './axiosClient';

const AdminAPI = {
  postSignIn: (user) => {
    return axios({
      method: 'post',
      url: 'http://localhost:5000/admin/signin',
      data: user,
      withCredentials: true,
    });
  },

  getLogout: () => {},

  getProduces: () => {
    return axios({
      method: 'get',
      url: 'http://localhost:5000/admin/get-products',
      withCredentials: true,
    });
  },

  deleteProduct: (query) => {
    return axios({
      method: 'delete',
      url: `http://localhost:5000/admin/delete-product?id=${query}`,
      withCredentials: true,
    });
  },
};

export default AdminAPI;
