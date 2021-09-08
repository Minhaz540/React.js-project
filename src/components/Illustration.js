import React from 'react';
import SignupImg from '../Assets/images/signup.svg';
import classes from '../styles/Illustration.module.css';

export default function Illustration() {
    return (
        <>
            <div className={classes.illustration}>
                <img src={SignupImg} alt="Signup" />
            </div>
        </>
    )
}
