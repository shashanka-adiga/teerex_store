import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchString:""
}

export const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        setSearchString:(state, action) => {
            const string = action.payload
            state.searchString = string
        }
       
    }

})

export const { setSearchString } = searchSlice.actions
export default searchSlice.reducer