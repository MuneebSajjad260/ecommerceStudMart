import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import RestApi from '../../services/RestApi';
// import { Base_Url } from '../../constants/url';
// import { setUser, setUserType } from '../slices/userSlice';
import { endPoints, Consumer_Params, Base_Url } from '../../constants/constants';


// const consumer_key = "ck_41443b9d22f6df407deaf10f9b31fb3e32e2acd1"
// const consumer_secret = "cs_62b8d37fc83f6c806a25890192c5e20e776187bf"

// let BASE_URL = "https://woo-slowly-shiny-wombat.wpcomstaging.com/"
// let woo_payload = {
//     consumer_key: Consumer_key,
//     consumer_secret: Consumer_secret
// }

export const getProductsAction = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        console.log("----login 333333 a------", data);
        const response = await axios.post(Base_Url+'login', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        
        console.log("--login response res 444444--", response);
        console.log("--login response 444444--", response?.data);
        // await thunkAPI.dispatch(setUser(response?.data))
        // await thunkAPI.dispatch(setUserType({type: userTypeEnum.PASSENGER}))

        return response?.data
    } catch (error) {
        console.log("---error---")
        console.log("error", error)
        // return error
        return thunkAPI.rejectWithValue(error)
        // return thunkAPI.rejectWithValue(error?.response?.data)

    }
})

export const getCategoriesListAction = createAsyncThunk('product/categories', async (data, thunkAPI) => {
    try {

        // let getAllCategoryList = "wp-json/wc/v3/products/categories"
        console.log("----Categories 333333 a------", data);
        const response = await axios.get(Base_Url+ endPoints.GetAllCategoryList+Consumer_Params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            // params:woo_payload
        })
        
        // console.log("--Categories response res 444444--", response);
        console.log("--Categories response 444444--", response?.data);
        // await thunkAPI.dispatch(setUser(response?.data))
        // await thunkAPI.dispatch(setUserType({type: userTypeEnum.PASSENGER}))

        return response?.data
    } catch (error) {
        console.log("---error---")
        console.log("error", error)
        // return error
        return thunkAPI.rejectWithValue(error)
        // return thunkAPI.rejectWithValue(error?.response?.data)

    }
})