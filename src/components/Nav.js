import React from 'react';
import Account from './Account';
import classes from '../styles/Nav.module.css';
import logo from '../Assets/images/logo-bg.png';
import {Link} from "react-router-dom";

export default function NAV() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                <Link to="/" className={classes.brand}>
                    <img src={logo} alt="Learn with Sumit Logo" />
                    <h3>Learn with Sumit</h3>
                </Link>
                </li>
            </ul>
            <Account />
        </nav>
    )
}
