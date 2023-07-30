import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            state.value.push(action.payload);
        },
        addFood: (state, action) => {
            const customer = state.value.find(
                (customer) => customer.id === action.payload.id
            );
            customer.food.push(action.payload.foodItem);
        },
    },
});

export const { addCustomer, addFood } = customerSlice.actions;

export default customerSlice.reducer;
