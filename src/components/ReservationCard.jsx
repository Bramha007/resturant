import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSilice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

function ReservationCard({ name }) {
    const dispatch = useDispatch();

    const handleRemoveReservation = () => {
        dispatch(removeReservation(name));
        dispatch(addCustomer({ name, id: uuid(), food: [] }));
    };
    return (
        <div
            className="reservation-card-container"
            onClick={handleRemoveReservation}
        >
            {name}
        </div>
    );
}

export default ReservationCard;
