import {useState, useEffect} from "react";
// import qs from 'qs';
import axios from 'axios';
import { requestMethods } from "../constants/constants";
import { Consumer_Key, Consumer_Secret } from "../constants/constants";

 const Pay_load = {
    consumer_key: Consumer_Key,
    consumer_secret: Consumer_Secret 

  }

const useAxios = (reqMethod, payload, url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const controller = new AbortController();

  useEffect(() => {

    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

   /** `data` is the data to be sent as the request body
   // Only applicable for request methods 'PUT', 'POST', 'DELETE , and 'PATCH' */
   let options
   if(reqMethod === requestMethods.POST){
     options = {
        method: reqMethod,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: JSON.stringify(...payload, Pay_load),
        url,
      };
   }else{
     options = {
        method: reqMethod, //'get'
        headers: { 'content-type': 'application/json' },
        params: Pay_load,
        //! signal: controller.signal //if 'get' ?
        url,
      };
   }

      axios(options)
      .then((response)=>{
        setData(response.data);
        setIsPending(false);
        setError(null);
        // console.log("----API Response---",response.data);
        console.log("----API Response---",response.data[0]?.images);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
      })
      .catch(function (error) {

        setIsPending(false);

        if (error?.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setError(error.response?.message);

        } else if (error?.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);

        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error?.message);
          setError(error?.message);

        }
        console.log(error?.config);
      });

    // fetch(options)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error("Could not fetch the data for that resource");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setData(data.record);
    //     setIsPending(false);
    //     setError(null);
    //   })
    //   .catch((err) => {
    //     setIsPending(false);
    //     setError(err.message);
    //   });
  }, [url]);

  return {data, isPending, error};
};

export default useAxios;
