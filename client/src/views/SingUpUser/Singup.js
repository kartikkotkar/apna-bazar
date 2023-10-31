import React, { useState } from "react"
import axios from 'axios';
import "./Singup.css"
import {Link} from "react-router-dom";

function Signup() {

    const [name, setNmae] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("female");

    const signupUser = async () => {
        if (!name) {
            alert("Nmae is requred");
            return;
        }

        if (!email) {
            alert("Email is requred");
            return;
        }

        if (!password) {
            alert("Password is requred");
            return;
        }

        if (!mobile) {
            alert("Mobile is requred");
            return;
        }

        if (!address) {
            alert("Address is requred");
            return;
        }

        const response = await axios.post("/signup", {
            name: name,
            email: email,
            password: password,
            mobile: mobile,
            address: address,
            gender: gender
        })

        alert(response?.data?.message);

        if (response?.data?.success) {

            window.location.href = "/login";
        }


    };

    return (
        <div>
            <from className="signup-from">
                <h1 className="text-center">Sign Up</h1>
                <div>
                    <label htmlFor="name">Nmae</label>
                    <input type="text"
                        placeholder="Enter your name"
                        id="name"
                        className="from-control"
                        value={name}
                        onChange={(e) => {
                            setNmae(e.target.value);
                        }} />
                </div>

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

                <div>
                    <label htmlFor="mobile">mobile</label>
                    <input type="mobile"
                        placeholder="Enter your mobile"
                        id="mobile"
                        className="from-control"
                        value={mobile}
                        onChange={(e) => {
                            setMobile(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input type="address"
                        placeholder="Enter your address"
                        id="address"
                        className="from-control"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }} />
                </div>
                <div>

                    <input type="radio"
                        id="male"
                        name="gender"
                        checked={gender === "male"}
                        onClick={() => {
                            setGender("male");
                        }}
                    />
                    <label htmlFor='male'>male</label>


                    <input type="radio"
                        id="femlae"
                        name="gender"
                        checked={gender === "female"}
                        onClick={() => {
                            setGender("female");
                        }}
                    />
                    <label htmlFor='female'>female</label>
                </div>

                <button type="button"
                    className="btn singup-btn"
                    onClick={signupUser}>

                    Singup
                </button>

                
                <p className="text-right">
                     <Link to="/login">Already have an account</Link>
                   </p>

            </from>
        </div>
    )
}


export default Signup;