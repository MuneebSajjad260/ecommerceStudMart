import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    userType: {},
    activeUser: {},
    userProfile: {},
    nexudusToken: {},
    isGoogleLogin: false,
    isGuestLogin: false,
    signUpData: {},
    canDeleteAccount: {}
}

export const userSlice = createSlice({
    name: 'user_details',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        // setUserType: (state, action) => {
        //     state.userType = action.payload
        // },
        setActiveUser: (state, action) => {
            state.activeUser = action.payload
        },
        setUserProfile: (state, action) => {
            state.userProfile = action.payload
        },
        setSignUpData: (state, action) => {
            state.signUpData = action.payload
        },
        setCanDeleteAccount: (state, action) => {
            state.canDeleteAccount = action.payload
        },
    }
})

export const {
    setUser,
    // setUserType,
    setActiveUser,
    setUserProfile,
    setIsGuestLogin,
    setSignUpData,
    setCanDeleteAccount
} = userSlice.actions

//selector
export const selectUser = (state) => state.user_details.user
// export const selectUserType = (state) => state.user_details.userType
export const selectCanDeleteAccount = (state) => state.user_details.canDeleteAccount

export const selectActiveUser = (state) => state.user_details.activeUser

export const selectUserProfile = (state) => state.user_details.userProfile


export const selectIsGuestLogin = (state) => state.user_details.isGuestLogin

export const selectSignUpData = (state) => state.user_details.signUpData

export default userSlice.reducer