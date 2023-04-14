import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../api/api";

const initialState = {
    brands: []
};

export const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {
        addBrands: (state, action) => {
            state.brands = action.payload
        },
        toggleChecked: (state, action) => {
            state.brands = state.brands.map(item => item.id === action.payload ? {...item, checked: !item.checked} : item)
        },
        clearCheckbox: state => {
            state.brands = state.brands.map(item => {
                return {...item, checked: false}
            })
        }
    }
});

export const fetchBrands = () => async dispatch => {
    const brands = await API.getData('brands');
    dispatch(addBrands(brands));
    return brands;
};

export const { addBrands, toggleChecked, clearCheckbox } = brandsSlice.actions;
export default brandsSlice.reducer;