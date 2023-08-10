import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { endPoints,Consumer_Params, Base_Url } from '../../constants/constants';
import { setUser } from '../../store/userSlice';



let loginUrl = "https://studmart.com/api/login.php";

export const LoginAction = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        // console.log("----login 333333 a------", data);
        const response = await axios.post(loginUrl, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })


        await thunkAPI.dispatch(setUser(response?.data))
        return response?.data

    } catch (error) {
        console.log("---error login---")
        console.log("error login: ", error?.response?.data)
        console.log("error", error)
        // return error
        return thunkAPI.rejectWithValue(error?.response?.data)

    }
})

export const SignupAction = createAsyncThunk('auth/signup', async (data, thunkAPI) => {
    try {
        console.log("----signup 333333 a------", data);
        const datam ={
    "email" : "muneeb1@devbeans.io"
}
        const response = await axios.post(Base_Url+endPoints.SignUp, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        
        console.log("--signup response res 444444 b--", response);
        console.log("--signup response 444444 c--", response?.data);
        // await thunkAPI.dispatch(setUser(response?.data))
        // await thunkAPI.dispatch(setUserType({type: userTypeEnum.PASSENGER}))

        return response?.data
    } catch (error) {
        console.log("---error d---")
        console.log("---error d---", error?.response?.data)
        console.log("error e", error)
        // return error
        return thunkAPI.rejectWithValue(error)
        // return thunkAPI.rejectWithValue(error?.response?.data)

    }
})

