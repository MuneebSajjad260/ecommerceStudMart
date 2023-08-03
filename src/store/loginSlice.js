
import { createSlice } from '@reduxjs/toolkit'
import { LoginAction } from '../services/actions/AuthAction'
const initialState = {
    loading: false,
    data: null,
    error: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(LoginAction.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(LoginAction.fulfilled, (state, action) => {
                console.log("action11", action.payload)
                state.loading = false
                state.data = action.payload
            })
            .addCase(LoginAction.rejected, (state, action) => {
                console.log("action22", action.payload)
                state.loading = false
                state.error = action.payload
            })
            .addCase("logout", () => {
                return initialState
              })
    }
})

export const selectLoginUser = (state) => state.login.data


export default loginSlice.reducer