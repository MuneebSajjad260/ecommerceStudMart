import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import {Base_Url} from "../../constants/constants";

import {
  Consumer_Params,
  endPoints,
  userTypeEnum,
  Consumer_Key,
  Consumer_Secret,
} from "../../constants/constants";

export const UpdateProfile = createAsyncThunk(
  "updateProfile/UpdateProfile",
  async (data, thunkAPI) => {
    try {
        console.log("data api-,",data)
        console.log("urll-", `${ Base_Url + endPoints.updateProfile}/${data.Id}${Consumer_Params}`)
      const response = await axios.post(
        `${ Base_Url + endPoints.updateProfile}/${data.Id}${Consumer_Params}`,
        {
            first_name:data.profileData.first_name,
            last_name:data.profileData.last_name,
            billing_phone:data.profileData.billing_phone,
            user_email:data.profileData.user_email,
            billing_address_1:data.profileData.billing_address_1,
            shipping_address_1:data.profileData.shipping_address_1,
            zone:data.profileData.zone,
            building:data.profileData.building,
            street:data.profileData.street,
        },
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
