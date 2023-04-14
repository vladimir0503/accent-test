import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalPrice: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload];
        },

        deleteItems: (state, action) => {
            state.products = state.cartItems.filter(item => item.id !== action.payload)
        },

        clearCart: state => {
            state.cartItems = [];
            state.totalPrice = 0;
        },
    }
});

export const { addItems, deleteItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;