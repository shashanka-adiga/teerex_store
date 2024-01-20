import { configureStore } from "@reduxjs/toolkit";
import CartReducers from "./features/cart/cartSlice"
import SearchReducers from "./features/search/searchSlice"
import FilterReducers from "./features/filter/filterSlice"
import ModalReducer from "./features/modal/modalSlice"

export const store = configureStore({
    reducer:{
        cart:CartReducers,
        search:SearchReducers,
        filter:FilterReducers,
        modal:ModalReducer

    }
})