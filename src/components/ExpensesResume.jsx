import React from "react";

const ExpensesResume = () => (
    <div className="resume-card">
        <div className="resume-card__header">
            <span className="resume-card__title">Current expenses</span>
            <button className="resume-card__button" type="button">
                Add purchase
            </button>
        </div>
        <div className="resume-card__content">
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

export default ExpensesResume;
