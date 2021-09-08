import React from 'react';
import LoginImg from '../../Assets/images/login.svg';
import Form from '../Form';
import Illustration from '../Illustration';
import classes from '../../styles/Login.module.css';
import TextInput from '../TextInput';
import Button from '../Button';

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div class="column">
                <Illustration src={LoginImg} />
                <Form className={classes.login}>
                    <TextInput icon="alternate_email" type="text" placeholder="Enter email" />
                    <TextInput icon="lock" type="password" placeholder="Enter password" />
                    <Button>Submit now</Button>
                    <div className="info">
                        Don't have an account? <a href="signup.html">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    )
}
