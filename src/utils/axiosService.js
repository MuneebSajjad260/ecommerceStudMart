import axios from 'axios';
import { Payload_Keys, Base_Url } from '../constants/constants';

// Create an instance of axios with the base URL
const wooAPI = axios.create({
    baseURL: Base_Url,
    // timeout: 2500,
    params: Payload_Keys,
    headers: {"Content-Type": "application/json", "Accept":"application/json"}
  });

  // Request Interceptor
wooAPI.interceptors.request.use(
    (config) => {
        console.log("----request config axios----")
      // Modify the request config here (if needed)
      return config;
    },
    (error) => {
      // Handle request errors here
      return Promise.reject(error);
    }
  );
  
  // Response Interceptor
wooAPI.interceptors.response.use(
    (response) => {
      // Modify the response data here (if needed)
      console.log("----response config axios----")

      return response;
    },
    (error) => {
        // if (error instanceof AxiosError && error.message === 'Network Error') {
        if (error.message === 'Network Error') {
            // Handle network-related errors here
            // console.error(error);
            console.log("----ERROR response config axios----")

            return Promise.reject(error)
            // You can return a custom error or take other actions as needed
          }
          console.error(error);

      // Handle response errors here
      return Promise.reject(error);
    }
  );
  
  export default wooAPI;