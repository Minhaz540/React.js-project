import React from 'react';
import Form from '../Form';
import Illustration from '../Illustration';
import classes from '../../styles/Form.module.css';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';
import SignupImg from '../../Assets/images/signup.svg';


export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration src={SignupImg} />
                <Form className={classes.signup}>
                    <TextInput icon="person" type="text" placeholder="Enter name" />
                    <TextInput icon="alternate_email" type="email" placeholder="Enter email" />
                    <TextInput icon="lock" type="password" placeholder="Enter password" />
                    <TextInput icon="lock_clock" type="password" placeholder="Confirm password" />
                    <Checkbox text="I agree to the Terms &amp; Conditions" />
                    <Button>
                        <span>Submit now</span> 
                    </Button>
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    )
}
