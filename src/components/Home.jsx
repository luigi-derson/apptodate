import React from "react";
import ExpensesResume from "./ExpensesResume";
import CleaningResume from "./CleaningResume";
import BillsResume from "./BillsResume";
import ShoppingList from "./ShoppingList";

const Home = () => (
    <div className="body-section">
        <ExpensesResume />
        <CleaningResume />
        <BillsResume />
        <ShoppingList />
    </div>
);

export default Home;
