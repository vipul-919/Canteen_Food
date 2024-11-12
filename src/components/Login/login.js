import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                if (res.status === 200) {
                    alert("Login successful"); // Display the login successful message
                    setLoginUser(res.data.user); // Set the logged-in user if available
                    navigate("/home"); // Redirect to the home page
                } else {
                    alert(res.data.message); // Display any other messages from the server
                }
            })
            .catch(error => {
                alert("Error logging in. Please try again later.");
                console.error("Error logging in:", error);
            });
    };
    

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ width: "400px", background: "#fff", border: "1px solid #dddfe2", boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)", borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
                <h1>Login</h1>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" style={{ borderRadius: "8px", border: "2px solid #dddfe2", outline: "none", color: "#1d2129", margin: "0.5rem 0", padding: "0.5rem 0.75rem", width: "92%", fontSize: "1rem" }} />
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" style={{ borderRadius: "8px", border: "2px solid #dddfe2", outline: "none", color: "#1d2129", margin: "0.5rem 0", padding: "0.5rem 0.75rem", width: "92%", fontSize: "1rem" }} />
                <div className="button" style={{ background: "#1877f2", border: "1px solid #1877f2", color: "#fff", fontSize: "1.25rem", padding: "0.5rem", margin: "0.5rem 0", borderRadius: "8px", outline: "none", cursor: "pointer" }} onClick={login}>Login</div>
                <div>or</div>
                <div className="button" style={{ background: "#1877f2", border: "1px solid #1877f2", color: "#fff", fontSize: "1.25rem", padding: "0.5rem", margin: "0.5rem 0", borderRadius: "8px", outline: "none", cursor: "pointer" }} onClick={() => navigate("/register")}>Register</div>
            </div>
        </div>
    );
};

export default Login;
