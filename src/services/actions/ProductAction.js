import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { endPoints, Consumer_Params, Base_Url } from '../../constants/constants';
import instance from '../../utils/interceptor';

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
        const response = await instance.get(Base_Url+ endPoints.GetAllCategoryList+Consumer_Params, {
            headers: {
              //  'Content-Type': 'application/json'

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