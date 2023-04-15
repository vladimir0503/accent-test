import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isActive: false
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state.isActive = action.payload
        }
    }
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;