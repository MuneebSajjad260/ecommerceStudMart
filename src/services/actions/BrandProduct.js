import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Base_Url} from "../../constants/constants";
import {
  Consumer_Params,
  endPoints,
  userTypeEnum,
} from "../../constants/constants";

export const BrandProduct = createAsyncThunk(
  "brandProduct/BrandProduct",
  async (data, thunkAPI) => {
    try {
      let payload = {
        data,
      };
      console.log(' brand data -- ', data);

      `${Base_Url+endPoints.brandProduct}?vendor_id=${data}`
      const response = await axios.get(
       // Base_Url + endPoints.brandProduct + Consumer_Params
       `${Base_Url+endPoints.brandProduct}?vendor_id=${data}`
         ,
        { 
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("response?.data brands---",response?.data)

      return response?.data;
    } catch (error) {
      console.log("error brand prod", error.response?.data);
      // return error
      return thunkAPI.rejectWithValue(error);
      // return thunkAPI.rejectWithValue(error?.response?.data)
    }
  },
);
