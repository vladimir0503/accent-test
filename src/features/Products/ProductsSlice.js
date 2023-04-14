import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../api/api";

const initialState = {
    products: [],
    productsList: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products = [...state.products, ...Object.values(action.payload)];
        },

        deleteProducts: (state, action) => {
            state.products = state.products.filter((product) => product.brand !== action.payload)
        },

        clearProducts: state => {
            state.products = [];
            state.productsList = [];
        },

        updateProductsList: state => {
            state.productsList = state.products
        }
    }
});

export const fetchProducts = id => async dispatch => {
    const products = await API.getData('products', id);
    dispatch(addProducts(products));
};

export const { addProducts, deleteProducts, clearProducts, updateProductsList } = productsSlice.actions;
export default productsSlice.reducer;