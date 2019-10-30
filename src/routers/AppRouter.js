import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Expenses from "../components/Expenses";
import Cleaning from "../components/Cleaning";
import Bills from "../components/Bills";
import Navigation from "../components/Navigation";

const AppRouter = () => (
    <Router>
        <div className="app-body">
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/expenses" component={Expenses} />
                <Route path="/cleaning" component={Cleaning} />
                <Route path="/bills" component={Bills} />
            </Switch>
            <Navigation />
        </div>
    </Router>
);

export default AppRouter;
