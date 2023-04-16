import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalPrice: 0
};

const getTotalPrice = arr => {
    return arr.reduce((sum, { regular_price }) => {
        return sum + regular_price.value
    }, 0).toFixed(2)
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload];
            state.totalPrice = getTotalPrice(state.cartItems);
        },

        deleteItems: (state, action) => {
            let found = false;
            state.cartItems = state.cartItems.filter(item => {
                if (!found && item.id === action.payload) {
                    found = true;
                    return false;
                } else {
                    return true;
                }
            });
            state.totalPrice = getTotalPrice(state.cartItems);
        },

        clearCart: state => {
            state.cartItems = [];
            state.totalPrice = 0;
        },
    }
});

export const { addItems, deleteItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;