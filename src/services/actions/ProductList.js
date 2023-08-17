import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios' ;
import {Base_Url,Consumer_Key,Consumer_Secret} from '../../constants/constants';
import {
  Consumer_Params,
  endPoints,
  userTypeEnum,
} from '../../constants/constants';

export const ProductList = createAsyncThunk(
  'productList/ProductList',
  async (data, thunkAPI) => {
    try {
      let payload = {
        data,
      };

      const response = await axios.get(
        `${
            Base_Url + endPoints.ProductsList
          }?${data}&consumer_key=${Consumer_Key}&consumer_secret=${Consumer_Secret}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return response?.data;
    } catch (error) {
      console.log('error', error);
      // return error
      return thunkAPI.rejectWithValue(error);
      // return thunkAPI.rejectWithValue(error?.response?.data)
    }
  },
);

