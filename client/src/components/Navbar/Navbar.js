
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

    const [user, setUser] = useState({});

    useEffect(() => {
        const storageUse = JSON.parse(localStorage.getItem("user") || '{}');
        setUser(storageUse);
    }, [])
    return (
        <div className="navbar">

            <Link to="/" className="navbar-brand">
                Apna Bazar.🛒🛍️
            </Link>


            <div>
                <Link to="/Login" className="navbar-link">
                    Login
                </Link>

                <Link to="/Signup" className="navbar-link">
                    Signup
                </Link>


                <Link to="/orders" className="navbar-link">
                    orders
                </Link>

            </div>

            <div>
                Hello, {user.name || 'guest!'}
            </div>

            {
                user?.name ?
                    (
                        <span className="navbar-logout" onClick={() => {
                            localStorage.removeItem("user");
                            window.location.href = "/login";
                        }}>
                            Logout
                        </span>
                    )
                    :
                     null
            }
        </div>
    )
}

export default Navbar