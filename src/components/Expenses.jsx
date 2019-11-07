import React from "react";

const Expenses = () => (
    <div className="body-section">
        <section className="expenses-intro-container">
            <div className="expenses-intro">
                <div className="expenses-intro__header">
                    <h3>Current expenses</h3>
                </div>
                <div className="expenses-intro__total-container">
                    <span>YOU OWE</span>
                    <p>£5.41</p>
                </div>
                <div className="expenses-intro__total-container">
                    <span>THEY OWE</span>
                    <p>£8.41</p>
                </div>
            </div>
        </section>
        <section className="expenses-list-container">
            <div className="expenses-list__header">
                <ul>
                    <li>Last expenses</li>
                    <li>Filter</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="expenses-list__items">
                <ul>
                    <li>
                        <div className="expenses-list__item">
                            <div className="expenses-list__item-header">
                                <p>User</p>
                                <p>Title</p>
                                <p>Date</p>
                            </div>
                            <div className="expenses-list__item-body">
                                <p>9.48</p>
                                <p>Not paid - 3/5</p>
                                <p>1.90</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
);

export default Expenses;
