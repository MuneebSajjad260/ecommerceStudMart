import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import RestApi from '../../services/RestApi';
// import { Base_Url } from '../../constants/url';
import { Base_Url } from '../../constants/constants';
// import { setUser, setUserType } from '../slices/userSlice';
import { Consumer_Params, endPoints, userTypeEnum } from '../../constants/constants';

export const RetrieveOrder = createAsyncThunk('retrieveOrder/RetrieveOrder', async (data, thunkAPI) => {
  
    try {
        let payload = {
            data,
        }

        console.log("----retrieve order------", data);
        console.log("----retrieve order abc------", Base_Url+endPoints.PlaceOrder+Consumer_Params);
       // console.log("url retrieve order--",`${Base_Url+endPoints.RetrieveOrder}${data}${Consumer_Params}`)
        const response = await axios.get(`${Base_Url+endPoints.RetrieveOrder}${data}${Consumer_Params}`, {
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        
      
        console.log("--retrieve order b--", response?.data);

        return response?.data
    } catch (error) {
        console.log("---error---")
        console.log("error", error)
        // return error
        return thunkAPI.rejectWithValue(error)
        // return thunkAPI.rejectWithValue(error?.response?.data)

    }
})