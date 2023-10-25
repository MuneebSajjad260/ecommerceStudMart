import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { endPoints, Consumer_Params, Base_Url } from '../../constants/constants';
import { setUser } from '../../store/userSlice';
import instance from '../../utils/interceptor';


export const OfferListApi = createAsyncThunk('offerListApi/OfferListApi', async (data, thunkAPI) => {
    try {
       
        const response = await instance.get( `${Base_Url + endPoints.offerList}/${data.id}${Consumer_Params}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return response?.data
    } catch (error) {
      
        return thunkAPI.rejectWithValue(error.response.data);
      
    }
})

