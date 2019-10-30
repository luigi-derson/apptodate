import React from "react";

const ShoppingList = () => (
    <div className="resume-card">
        <div className="resume-card__header">
            <span className="resume-card__title">Shopping List</span>
            <button className="resume-card__button" type="button">
                Add item
            </button>
        </div>
        <div className="resume-card__content">
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
