import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
// import RestApi from '../../services/RestApi';
// import { Base_Url } from '../../constants/url';
import {Base_Url} from "../../constants/constants";
// import { setUser, setUserType } from '../slices/userSlice';
import {
  Consumer_Params,
  endPoints,
  userTypeEnum,
  Consumer_Key,
  Consumer_Secret,
} from "../../constants/constants";

export const GetProfile = createAsyncThunk(
  "profile/Profile",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `${ Base_Url + endPoints.profile}/${data.Id}${Consumer_Params}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`,
          },
        },
      );

      return response?.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
