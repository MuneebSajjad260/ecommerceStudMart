import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import RestApi from '../../services/RestApi';
// import { Base_Url } from '../../constants/url';
import { Base_Url } from '../../constants/constants';
// import { setUser, setUserType } from '../slices/userSlice';
import { Consumer_Params, endPoints, userTypeEnum } from '../../constants/constants';

export const PlaceOrderAction = createAsyncThunk('order/placeOrder', async (data, thunkAPI) => {
  
    try {
        let payload = {
            data,
        }

        console.log("----Place order 22222 a------", data);
        console.log("----Place order 22222 abc------", Base_Url+endPoints.PlaceOrder+Consumer_Params);
        const response = await axios.post(Base_Url+endPoints.PlaceOrder+Consumer_Params, data , {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        
        console.log("--Place order response 22222 b--", response?.data);

        return response?.data
    } catch (error) {
        console.log("---error---")
        console.log("error", error)
        // return error
        return thunkAPI.rejectWithValue(error)
        // return thunkAPI.rejectWithValue(error?.response?.data)

    }
})