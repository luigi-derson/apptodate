import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
    <nav className="main-nav">
        <ul className="main-nav__list">
            <li className="main-nav__item">
                <NavLink
                    to="/"
                    className="home"
                    activeClassName="is-active"
                    exact
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="main-nav__icon"
                    >
                        <path
                            fillRule="evenodd"
                            d="M17.8913288,10 L11.8900003,3.99867157 L5.88867192,10 L5.89001465,10 L5.89001465,20 L17.8900146,20 L17.8900146,10 L17.8913288,10 Z M19.8900146,11.9986859 L19.8900146,20 C19.8900146,21.1045695 18.9945841,22 17.8900146,22 L5.89001465,22 C4.78544515,22 3.89001465,21.1045695 3.89001465,20 L3.89001465,11.9986573 L2.41319817,13.4754737 L1,12.0622756 L10.4769858,2.5852898 C11.2573722,1.8049034 12.5226285,1.8049034 13.3030149,2.5852898 L22.7800007,12.0622756 L21.3668025,13.4754737 L19.8900146,11.9986859 Z"
                        />
                    </svg>
                </NavLink>
            </li>
            <li className="main-nav__item">
                <NavLink to="/expenses" activeClassName="is-active" exact>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="main-nav__icon"
                    >
                        <path d="M7.03359712,6 C7.32758585,3.8151893 9.51095328,2 12,2 C14.4890467,2 16.6724142,3.8151893 16.9664029,6 L19.8469903,6 C20.9515598,6 21.8469903,6.8954305 21.8469903,8 C21.8469903,8.09463774 21.8402731,8.18915613 21.8268893,8.28284271 L20.1126036,20.2828427 C19.9718468,21.2681402 19.1280054,22 18.1327046,22 L5.8672954,22 C4.87199465,22 4.0281532,21.2681402 3.88739641,20.2828427 L2.1731107,8.28284271 C2.01690098,7.1893747 2.77669896,6.17631073 3.87016697,6.02010101 C3.96385356,6.00671722 4.05837195,6 4.15300969,6 L7.03359712,6 Z M9.07212004,6 L14.92788,6 C14.6238899,4.9380773 13.3980321,4 12,4 C10.6019679,4 9.37611011,4.9380773 9.07212004,6 Z M7,8 L4.15300969,8 L5.8672954,20 L18.1327046,20 L19.8469903,8 L17,8 L17,10 L15,10 L15,8 L9,8 L9,10 L7,10 L7,8 Z" />
                    </svg>
                </NavLink>
            </li>
            <li className="main-nav__item">
                <NavLink to="/cleaning" activeClassName="is-active" exact>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="main-nav__icon"
                    >
                        <path
                            fillRule="evenodd"
                            d="M20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 L20,8 Z M20,10 L4,10 L4,20 L20,20 L20,10 Z M18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 Z M9,14 L7,14 L7,12 L9,12 L9,14 Z M13,14 L11,14 L11,12 L13,12 L13,14 Z M17,14 L15,14 L15,12 L17,12 L17,14 Z M9,18 L7,18 L7,16 L9,16 L9,18 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z"
                        />
                    </svg>
                </NavLink>
            </li>
            <li className="main-nav__item">
                <NavLink to="/bills" activeClassName="is-active" exact>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="main-nav__icon"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9,15 L3.91937515,15 L15,1.14921894 L15,9 L20.0806248,9 L9,22.8507811 L9,15 Z M8.08062485,13 L11,13 L11,17.1492189 L15.9193752,11 L13,11 L13,6.85078106 L8.08062485,13 Z"
                        />
                    </svg>
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navigation;
