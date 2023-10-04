import axios from 'axios';
import { Base_Url } from '../constants/constants';

import { store } from '../store/store';


const instance = axios.create({
  baseURL: Base_Url, // Your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
instance.interceptors.request.use(
 
  async (config) => {
    console.log('store---',store.getState().login?.data?.token);
    const token = store.getState().login?.data?.token;
    console.log('interceptor token--',token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log('config---',config);
    return config;
  },
  (error) => {
    console.log('error---',error);
    return Promise.reject(error);
  }
);

  


export default instance;