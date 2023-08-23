import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios' ;
import {Base_Url,Consumer_Key,Consumer_Secret} from '../../constants/constants';
import {
  Consumer_Params,
  endPoints,
  userTypeEnum,
} from '../../constants/constants';

export const DeleteWishlist = createAsyncThunk(
  'wishlistItems/WishlistItems',
  async (data, thunkAPI) => {
    try {
      let payload = {
        data,
      };
console.log("urll--", Base_Url + endPoints.deleteWishlist + Consumer_Params,'data--',data)
      const response = await axios.delete(
        Base_Url + endPoints.deleteWishlist + Consumer_Params,
        {  params: data, // Pass the data as query parameters
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
console.log("response?.data--",response?.data)
      return response?.data;
    } catch (error) {
      console.log('error', error);
      // return error
      return thunkAPI.rejectWithValue(error);
      // return thunkAPI.rejectWithValue(error?.response?.data)
    }
  },
);

