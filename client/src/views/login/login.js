import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = async () => {
        const response = await axios.post("/login", {
            email: email,
            password: password
        });

        alert(response?.data?.message);

        if (response?.data?.success) {
            localStorage.setItem("user", JSON.stringify(response?.data?.data));
            window.location.href = "/"
        }
    }
    return (
        <>
            <div>
                <from className="login-from">
                    <h1 className="text-center">Login</h1>

                    <div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                placeholder="Enter your email"
                                id="email"
                                className="from-control"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                placeholder="Enter your password"
                                id="password"
                                className="from-control"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                        </div>
                    </div>

                    <button type="button" className="btn login-btn"
                        onClick={Login} >
                        Login
                    </button>

                    <p className="text-right">
                        <Link to="/signup">Create a new account?</Link>
                    </p>
                </from>
            </div>
        </>
    );
};

export default Login;