import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: {},
  
}

export const categorySlice = createSlice({
    name: 'categoryDetail',
    initialState,
    reducers: {
        setCategorySlice: (state, action) => {
            state.category = action.payload
        },
       
    }
})

export const {
    setCategorySlice,
  
} = categorySlice.actions

//selector
export const selectCategorySlice = (state) => state.categoryDetail.category


export default categorySlice.reducer