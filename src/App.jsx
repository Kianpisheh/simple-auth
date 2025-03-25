import "./App.css";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import React, { useState } from "react";

function App() {
    const [user, setUser] = useState(null); // Store logged-in user

    // Login function to authenticate user
    const login = async (username, password) => {
        try {
            const res = await fetch(
                "https://angelic-gentleness.railway.app/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include", // Include cookies in the request
                    body: JSON.stringify({ username, password }),
                }
            );

            if (!res.ok) throw new Error("Login failed");

            const data = await res.json();
            setUser(data.user); // Set logged-in user data
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    // Register function to create a new user
    const register = async (username, password) => {
        console.log(username);
        console.log(password);

        try {
            const res = await fetch(
                "https://angelic-gentleness.railway.app/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password }),
                }
            );

            if (!res.ok) throw new Error("Registration failed");
            alert("Registration successful! Please log in.");
        } catch (error) {
            console.error("Error registering:", error);
        }
    };

    // Logout function to clear the user
    const logout = async () => {
        await fetch("https://angelic-gentleness.railway.app/logout", {
            method: "POST",
            credentials: "include", // Send cookies with the request
        });
        setUser(null);
    };
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {user ? (
                        <>
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login onLogin={login} />} />
                <Route
                    path="/register"
                    element={<Register onRegister={register} />}
                />
            </Routes>
        </div>
    );
}

export default App;
