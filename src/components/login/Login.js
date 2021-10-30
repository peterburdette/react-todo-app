import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

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
        <form onSubmit={submitHandler}>
            <Input
                label="Username"
                id="username"
                type="text"
                onChange={handleUsername}
            />
            <Input
                label="Password"
                id="password"
                type="password"
                onChange={handlePassword}
            />
            <Button type="submit" title="Login" />
        </form>
    );
};

export default Login;
