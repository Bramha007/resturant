import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSilice";
import customersReducer from "../features/customerSlice";

export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        customers: customersReducer,
    },
});
