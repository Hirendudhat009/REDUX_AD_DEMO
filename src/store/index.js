import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from './ui-slice'
import { cartReducer } from "./cart-slice";

const store = configureStore({
    reducer:
        { showCart: uiReducer, cart: cartReducer }
})
export default store;