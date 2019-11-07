import React from "react";

const ShoppingList = () => (
    <div className="summary-card">
        <div className="summary-card__header">
            <span className="summary-card__title">Shopping List</span>
            <button className="summary-card__button" type="button">
                Add item
            </button>
        </div>
        <div className="summary-card__content">
            <ul className="shopping-list">
                <li>
                    <p>Olive oil</p>
                    <input type="checkbox" />
                </li>
                <li>
                    <p>Water</p>
                    <input type="checkbox" />
                </li>
                <li>
                    <p>Coffe</p>
                    <input type="checkbox" />
                </li>
            </ul>
        </div>
    </div>
);

export default ShoppingList;
