import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: '',
    currentItems: []
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.item = action.payload;
            document.getElementById('itemName').value = '';
            state.currentItems.push({ name: state.item, quantity: 1, grabbed: false });
        },
    }
})

export const { addItem } = itemSlice.actions;

export default itemSlice.reducer;