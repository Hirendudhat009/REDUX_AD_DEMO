import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
    items: [],
    totalQuntity: 0,
}

const cartReducerSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id)
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                })
                state.totalQuntity++
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                state.totalQuntity++
            }
        },
        removeItem(state, action) {
            const product = action.payload;
            const item = state.items.find(item => item.id === product)
            state.totalQuntity--
            if (item.quantity === 1) {
                state.items = state.items.filter(item => item.id !== product)
            }
            else {
                item.quantity--;
                item.totalPrice = item.totalPrice - item.price;
            }
        }
    }
})

export const cartAction = cartReducerSlice.actions
export const cartReducer = cartReducerSlice.reducer