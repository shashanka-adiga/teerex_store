import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    colors:[],
    genders:[],
    types:[],
    prices:[]
}

const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        setColor:(state,action) => {
            const color = action.payload
            const index = state.colors.indexOf(color)
            if(index == -1){
                state.colors.push(action.payload)
            }else{
                state.colors = state.colors.filter(c => c != color)
            }
            
        },
        setGender:(state,action) => {
            const gender = action.payload
            const index = state.genders.indexOf(gender)
            if(index == -1){
                state.genders.push(action.payload)
            }else{
                state.genders = state.genders.filter(g => g != gender)
            }
        },
        setType:(state,action) => {
            const type = action.payload
            const index = state.types.indexOf(type)
            if(index == -1){
                state.types.push(action.payload)
            }else{
                state.types = state.types.filter(t => t != type)
            }
        },
        setPrice:(state,action) => {
            const price = Number(action.payload)
            const index = state.prices.indexOf(price)
            if(index == -1){
                state.prices.push(price)
            }else{
                state.prices = state.prices.filter(p => p != price)
            }
        }
    }
})


export const { setColor , setType, setGender , setPrice} = filterSlice.actions
export default filterSlice.reducer