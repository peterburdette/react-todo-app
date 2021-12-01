import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from '../../store/auth';

import {
    Card,
    CardContent,
    CardActions,
    TextField,
    Button,
} from "@mui/material";
import styles from "./Login.module.css";

const Login = (props) => {
    const dispatch = useDispatch();

    // retrieves and stores credential values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // sets the username
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    // sets the password
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    // submits the login form and dispatches to 'store/index.js' => 'store/auth.js'
    const submitHandler = (event) => {
        event.preventDefault();

        const userCreds = {
            username: username,
            password: password,
        }
        dispatch(authActions.login(userCreds));
    };

    return (
        <Card id={styles.loginFormWrapper}>
            <form onSubmit={submitHandler}>
                <CardContent>
                    <TextField
                        id="username"
                        className={styles.inputField}
                        type="text"
                        label="Username"
                        variant="outlined"
                        onChange={handleUsername}
                    />
                    <TextField
                        id="password"
                        className={styles.inputField}
                        type="password"
                        label="Password"
                        variant="outlined"
                        onChange={handlePassword}
                    />
                </CardContent>
                <CardActions id={styles.formActions}>
                    <Button type="submit" variant="contained">
                        Login
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};

export default Login;
