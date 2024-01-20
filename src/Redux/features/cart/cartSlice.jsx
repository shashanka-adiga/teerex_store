import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalCartAmount:0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const itemIndex = state.cart?.findIndex((p) => p.id == action.payload.id);
      
      if (itemIndex == -1) {
        const payload = { ...action.payload, quantity: 1 };
        state.cart.push(payload);
        state.totalCartAmount = state.totalCartAmount + payload.price
      } else {
        const newArr = [...state.cart];
        if(newArr[itemIndex].quantity < action.payload.maxQuantity){
          state.totalCartAmount = state.totalCartAmount + action.payload.price
            newArr[itemIndex].quantity = newArr[itemIndex].quantity + 1;
        }
       
        
        state.cart = newArr;
      }
    },
    removeCartItem: (state, action) => {
     const newArr = [...state.cart].filter(item => item.id != action.payload.id)
     state.totalCartAmount = state.totalCartAmount - (action.payload.quantity*action.payload.price)
      state.cart = newArr
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
