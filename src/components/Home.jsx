import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import CleaningSummary from "./CleaningSummary";
import BillsSummary from "./BillsSummary";
import ShoppingList from "./ShoppingList";

const Home = () => (
    <div className="body-section">
        <ExpensesSummary />
        <CleaningSummary />
        <BillsSummary />
        <ShoppingList />
    </div>
);

export default Home;
