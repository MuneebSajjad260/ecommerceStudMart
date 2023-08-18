import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios' ;
// import RestApi from '../../services/RestApi';
// import { Base_Url } from '../../constants/url';
import {Base_Url} from '../../constants/constants';
// import { setUser, setUserType } from '../slices/userSlice';
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

      const response = await axios.post(
        Base_Url + endPoints.manageWhishlist + Consumer_Params,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
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
