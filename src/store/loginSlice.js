
import { createSlice } from '@reduxjs/toolkit'
import { LoginAction } from '../services/actions/AuthAction'
import { logout } from '../services/actions/AuthAction'
const initialState = {
    loading: false,
    data: null,
    error: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        resetUser:(state)=>{
            state.data = null;
          },
    },
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
            .addCase(logout.pending, (state) => {
        
                state.loading = true;
                state.error = null;
        
              })
              .addCase(logout.fulfilled, (state) => {
               
                state.loading = false;
                loginSlice.caseReducers.resetUser(state);
              })
              
              .addCase(logout.rejected, (state, action) => {
                console.log('action22', action.payload.error);
                state.loading = false;
                state.error = action.payload;
              })
    }
})

export const selectLoginUser = (state) => state.login.data

export const {resetUser}=loginSlice.actions;
export default loginSlice.reducer