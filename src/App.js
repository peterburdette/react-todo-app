import React from 'react';
import { useSelector } from "react-redux";

import Login from "./components/login/Login";
import Home from "./components/home/Home";

import "./App.css";

function App() {
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

    return (
        <div>
            {!isLoggedIn && <Login />}
            {isLoggedIn && <Home />}
        </div>
    );
}

export default App;
