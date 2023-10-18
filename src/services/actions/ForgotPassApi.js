import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { endPoints, Consumer_Params, Base_Url } from '../../constants/constants';
import { setUser } from '../../store/userSlice';
import instance from '../../utils/interceptor';


export const ForgotPassApi = createAsyncThunk('forgotPassApi/ForgotPassApi', async (data, thunkAPI) => {
    try {
        console.log("----signup 333333 a------", data);

        const response = await instance.post(Base_Url + endPoints.forgotPass, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return response?.data
    } catch (error) {
      
        return thunkAPI.rejectWithValue(error.response.data);
      
    }
})

