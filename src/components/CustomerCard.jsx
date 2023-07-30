import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/customerSlice";

function CustomerCard({ customer }) {
    const [foodItem, setFoodItem] = useState("");

    const dispatch = useDispatch();

    const handleAddFood = () => {
        dispatch(addFood({ foodItem, id: customer.id }));
        setFoodItem("");
    };
    return (
        <div className="customer-food-card-container">
            <p>{customer.name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {customer.food.map((foodItem, i) => (
                        <p>{foodItem}</p>
                    ))}
                </div>
                <div className="customer-food-input-container">
                    <input
                        value={foodItem}
                        onChange={(e) => setFoodItem(e.target.value)}
                    />
                    <button onClick={handleAddFood}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default CustomerCard;
