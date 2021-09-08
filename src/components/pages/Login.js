import React from 'react';
import LoginImg from '../../Assets/images/login.svg';
import Form from '../Form';
import Illustration from '../Illustration';
import classes from '../../styles/Login.module.css';
import TextInput from '../TextInput';
import Button from '../Button';
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div class="column">
                <Illustration src={LoginImg} />
                <Form className={classes.login}>
                    <TextInput icon="alternate_email" type="text" placeholder="Enter email" />
                    <TextInput icon="lock" type="password" placeholder="Enter password" />
                    <Button>
                        <span>Submit now</span>
                    </Button>
                    <div className="info">
                        Don't have an account? <Link to="/signup">Signup</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    )
}
