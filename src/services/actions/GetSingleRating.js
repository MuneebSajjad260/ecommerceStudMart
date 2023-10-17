import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import {Base_Url} from "../../constants/constants";
import instance from "../../utils/interceptor";
import {
  Consumer_Params,
  endPoints,
  userTypeEnum,
  Consumer_Key,
  Consumer_Secret,
} from "../../constants/constants";

export const GetSingleRating = createAsyncThunk(
  "getSingleRating/GetSingleRating",
  async (data, thunkAPI) => {
    try {
      const response = await instance.get(
       
        `${Base_Url+endPoints?.getSingleRating}/${Consumer_Params}&vendor_id=${data?.vendorId}&order_id=${data?.orderId}`,
        {
          headers: {
            // 'Content-Type': 'application/json',
            // Authorization: `Bearer ${data?.token}`,
          },
        },
      );
      console.log("response?.data-",response?.data)

      return response?.data;
    } catch (error) {
      console.log("error.response.data-",error.response.data)
    return thunkAPI.rejectWithValue(error.response.data);
   
    }
  },
);
