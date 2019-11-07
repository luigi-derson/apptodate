import React from "react";

const BillsSummary = () => (
    <div className="summary-card">
        <div className="summary-card__header">
            <span className="summary-card__title">Bills summary</span>
            <span className="summary-card__date">November</span>
        </div>
        <div className="summary-card__content">
            <div>
                <p>Total amount this month</p>
                <p>Each one</p>
            </div>
            <div>
                <p>£1500</p>
                <p>£253</p>
            </div>
        </div>
    </div>
);

export default BillsSummary;
