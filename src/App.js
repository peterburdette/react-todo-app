import React, { useState, useEffect } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import "./App.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const storedUserLoggedInInformation =
            localStorage.getItem("isLoggedIn");

        if (storedUserLoggedInInformation === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (event) => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(event);
    };

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <div>
            {!isLoggedIn && <Login onLogin={handleLogin} />}
            {isLoggedIn && <Home onLogout={handleLogout} />}
        </div>
    );
}

export default App;
