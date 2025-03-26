import "./App.css";
import {
    Routes,
    Route,
    Link,
    BrowserRouter as Router,
    useNavigate,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import React, { useState } from "react";

function App() {
    const [user, setUser] = useState(null); // Store logged-in user
    const navigate = useNavigate();

    // Login function to authenticate user
    const login = async (username, password) => {
        try {
            const res = await fetch(
                "https://nodelogin-production.up.railway.app/login",
                // "http://localhost:5000/login",
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
            navigate("/");
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    // Register function to create a new user
    const register = async (username, password) => {
        try {
            const res = await fetch(
                "https://nodelogin-production.up.railway.app/register",
                // "http://localhost:5000/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password }),
                }
            );

            if (!res.ok) throw new Error("Registration failed");
            // alert("Registration successful! Please log in.");
            navigate("/login");
        } catch (error) {
            console.error("Error registering:", error);
        }
    };

    // Logout function to clear the user
    const logout = async () => {
        await fetch(
            "https://nodelogin-production.up.railway.app/logout",
            // "http://localhost:5000/logout",
            {
                method: "POST",
                credentials: "include", // Send cookies with the request
            }
        );
        setUser(null);
    };
    return (
        <div className="main-container">
            <Routes>
                <Route path="/" element={<Home u={user} />} />
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
