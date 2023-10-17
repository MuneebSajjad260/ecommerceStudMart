import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios' ;
import {Base_Url} from '../../constants/constants';
import instance from '../../utils/interceptor';
import {
  Consumer_Params,
  endPoints,
  userTypeEnum,
} from '../../constants/constants';

export const GiveReviewPost = createAsyncThunk('giveReviewPost/GiveReviewPost', async (data, thunkAPI) => {
  try {
    // console.log('hellouu=>>>>', data);
    const response = await instance.post(   Base_Url + endPoints.uploadVendorRating + Consumer_Params
        , data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    // console.log('--333--', response.data);

    return response.data;
  } catch (error) {
    console.log('error', error);
    return thunkAPI.rejectWithValue(error.response.data);

  }
});