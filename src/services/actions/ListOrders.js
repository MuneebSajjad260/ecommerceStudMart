import {createAsyncThunk} from "@reduxjs/toolkit";;
import axios from "axios";;
// import RestApi from '../../services/RestApi';
// import { Base_Url } from '../../constants/url';
import {Base_Url} from "../../constants/constants";
// import { setUser, setUserType } from '../slices/userSlice';
import {
  Consumer_Params,
  Consumer_Key,
  Consumer_Secret,
  endPoints,
  userTypeEnum,
} from "../../constants/constants";

export const ListOrder = createAsyncThunk(
  "listOrder/ListOrder",
  async (data, thunkAPI) => {
    try {
      let payload = {
        data,
      };;

      console.log('ListOrder-', data);
     
       console.log("url list order order--",`${Base_Url + endPoints.OrderList}?customer=${data}&consumer_key=${Consumer_Key}&consumer_secret=${Consumer_Secret}`)
      const response = await axios.get(
        `${Base_Url + endPoints.OrderList}?customer=${data}&consumer_key=${Consumer_Key}&consumer_secret=${Consumer_Secret}`,
        {
          headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded'
          },
        })


      console.log('--ListOrder b--', response?.data)

      return response?.data;
    } catch (error) {
      console.log("---error---");
      console.log("error", error);
      // return error
      return thunkAPI.rejectWithValue(error);
      // return thunkAPI.rejectWithValue(error?.response?.data)
    }
  },
);

