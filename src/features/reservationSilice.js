import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};
export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action) => {
            state.value.push(action.payload);
        },
        removeReservation: (state, action) => {
            state.value = state.value.filter((res) => res !== action.payload);
        },
    },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
