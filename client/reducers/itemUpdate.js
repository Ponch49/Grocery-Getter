import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
    item: '',
    currentItems: []
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const newArr = state.currentItems;
            document.getElementById('itemName').value = '';
            newArr.push({ name: newItem, quantity: 1, grabbed: false });
            state.numItems++;
        },

        incrementQuantity: (state, action) => {
            for(let i = 0; i < state.currentItems.length; i++) {
                if(state.currentItems[i].name === action.payload) {
                    state.currentItems[i].quantity += 1;
                }
            }
        },

        decrementQuantity: (state, action) => {
            for(let i = 0; i < state.currentItems.length; i++) {
                if(state.currentItems[i].name === action.payload) {
                    if(state.currentItems[i].quantity === 1) {
                        state.currentItems.splice(i, 1)
                    } else {
                        state.currentItems[i].quantity -= 1;
                    }
                }
            }
        }
    }
})

export const { addItem, incrementQuantity, decrementQuantity } = itemSlice.actions;

export default itemSlice.reducer;