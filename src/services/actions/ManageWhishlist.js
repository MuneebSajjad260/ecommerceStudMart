import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios' ;
import instance from '../../utils/interceptor';
import {Base_Url} from '../../constants/constants';
import {
  Consumer_Params,
  endPoints,
  userTypeEnum,
} from '../../constants/constants';

export const ManageWhishlist = createAsyncThunk(
  'manageWhishlist/ManageWhishlist',
  async (data, thunkAPI) => {
    try {
      let payload = {
        data,
      };

      const response = await instance.post(
        Base_Url + endPoints.manageWhishlist + Consumer_Params,
        data,
        {
          headers: {
        //    'Content-Type': 'application/json',
          },
        },
      );

      return response?.data;

    } catch (error) {
      console.log("error", error);
      // return error
      return thunkAPI.rejectWithValue(error) ;
      // return thunkAPI.rejectWithValue(error?.response?.data)
    }
  },
);
