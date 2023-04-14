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
            state.totalPrice = state.cartItems.reduce((sum, { regular_price }) => {
                return sum + regular_price.value
            }, 0);
        },

        deleteItems: (state, action) => {
            let found = false;
            state.cartItems = state.cartItems.filter(item => {
                if (!found && item.id === action.payload.id) {
                    found = true;
                    return false;
                } else {
                    return true;
                }
            });
            state.totalPrice = state.cartItems.reduce((sum, { regular_price }) => {
                return sum + regular_price.value
            }, 0);
        },

        clearCart: state => {
            state.cartItems = [];
            state.totalPrice = 0;
        },
    }
});

export const { addItems, deleteItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;