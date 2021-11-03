import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardActions,
    TextField,
    Button,
} from "@mui/material";
import styles from "./Login.module.css";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(username, password);
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
