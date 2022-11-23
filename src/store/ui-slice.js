import { createSlice } from '@reduxjs/toolkit'

const initialCartState = { isCart: false }

const UIReducerSlice = createSlice({
    name: 'ui',
    initialState: initialCartState,
    reducers: {
        showCart(state) {
            state.isCart = !state.isCart
        },

    }
})

export const uiAction = UIReducerSlice.actions
export const uiReducer = UIReducerSlice.reducer
