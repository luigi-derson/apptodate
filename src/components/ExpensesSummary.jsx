import React from "react";

const ExpensesSummary = () => (
    <div className="summary-card">
        <div className="summary-card__header">
            <span className="summary-card__title">Current expenses</span>
            <button className="summary-card__button" type="button">
                Add purchase
            </button>
        </div>
        <div className="summary-card__content">
            <ul>
                <li>Luigi</li>
                <li>Andrea</li>
                <li>Leo</li>
                <li>Wilson</li>
                <li>Noelia</li>
            </ul>
            <ul>
                <li>£8.68</li>
                <li>£8.68</li>
                <li>£8.68</li>
                <li>£8.68</li>
                <li>£8.68</li>
            </ul>
        </div>
    </div>
);

export default ExpensesSummary;
