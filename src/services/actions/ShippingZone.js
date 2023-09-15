import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios' ;
import {Base_Url} from '../../constants/constants';
import {
  Consumer_Params,
  endPoints,
  userTypeEnum,
} from '../../constants/constants';

export const ShippingZone = createAsyncThunk(
  'vendorCount/VendorCount',
  async (data, thunkAPI) => {
    try {
      let payload = {
        data,
      };

      const response = await axios.get(`${Base_Url+endPoints.shippingZone}/${data}/methods${Consumer_Params}`,
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

