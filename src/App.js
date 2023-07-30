import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSilice";
import CustomerCard from "./components/CustomerCard";

function App() {
    const [reservationNameIp, setReservationNameIp] = useState("");
    const reservations = useSelector((state) => state.reservations.value);
    const customers = useSelector((state) => state.customers.value);

    const dispatch = useDispatch();

    const handleAddReservations = () => {
        if (!reservationNameIp) return;
        dispatch(addReservation(reservationNameIp));
        setReservationNameIp("");
    };

    return (
        <div className="App">
            <div className="container">
                <div className="reservation-container">
                    <div>
                        <h5 className="reservation-header">Reservations</h5>
                        <div className="reservation-cards-container">
                            {reservations.map((name, i) => (
                                <ReservationCard key={i} name={name} id={i} />
                            ))}
                        </div>
                    </div>
                    <div className="reservation-input-container">
                        <input
                            value={reservationNameIp}
                            onChange={(e) =>
                                setReservationNameIp(e.target.value)
                            }
                        />
                        <button onClick={handleAddReservations}>Add</button>
                    </div>
                </div>
                <div className="customer-food-container">
                    {customers.map((customer, i) => (
                        <CustomerCard customer={customer} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
