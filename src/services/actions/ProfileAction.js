import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { endPoints,Consumer_Params, Base_Url } from '../../constants/constants';
import { setUser } from '../../store/userSlice';


let loginUrl = "https://studmart.com/api/login.php";

export const GetProfileAction = createAsyncThunk('profile/getProfile', async (data, thunkAPI) => {
    try {
        console.log("----GetProfileAction 333333 a------", data);
        const response = await axios.post(Base_Url+endPoints.GetProfile+data?.userid+Consumer_Params, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        console.log("----GetProfileAction screen API call----",response?.data )
        let dataObj= {
            data: response?.data,
            token: data?.token
        }
        await thunkAPI.dispatch(setUser(dataObj))
        return response?.data

    } catch (error) {
        console.log("---error GetProfileAction---")
        console.log("error GetProfileAction: ", error?.response?.data)
        console.log("error", error)
        // return error
        return thunkAPI.rejectWithValue(error?.response?.data)
        // return thunkAPI.rejectWithValue(error?.response?.data)

    }
})

export const UpdateProfileAction = createAsyncThunk('profile/updateProfile', async (data, thunkAPI) => {
    try {
        console.log("----UpdateProfileAction 333333 a------", data);
        const datam ={
            Consumer_Key,
            Consumer_Secret,
            data,
        }

        const response = await axios.post(Base_Url+endPoints.SignUp+Consumer_Params, datam, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        
        console.log("--UpdateProfileAction response res 444444--", response);
        console.log("--UpdateProfileAction response 444444--", response?.data);
        // await thunkAPI.dispatch(setUser(response?.data))
        // await thunkAPI.dispatch(setUserType({type: userTypeEnum.PASSENGER}))

        return response?.data
    } catch (error) {
        console.log("---error---")
        console.log("error UpdateProfileAction: ", error?.response?.data)

        console.log("error", error)
        // return error
        return thunkAPI.rejectWithValue(error)
        // return thunkAPI.rejectWithValue(error?.response?.data)

    }
})

