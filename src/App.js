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

    const handleIsLoggedIn = (event) => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(event);
    };

    return (
        <div>
            {!isLoggedIn && <Login onLogin={handleIsLoggedIn} />}
            {isLoggedIn && <Home />}
        </div>
    );
}

export default App;
