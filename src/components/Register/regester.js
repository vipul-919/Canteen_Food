import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        let isValid = true;
    
        if (name === "name" && (/^[A-Za-z ]+$/.test(value) || value === "")) {
            setUser({ ...user, [name]: value });
        } else if (name === "email") {
            // Email validation
            isValid = /^\S+@\S+\.\S+$/.test(value);
            setUser({ ...user, [name]: value });
        } else if (name === "password" || name === "reEnterPassword") {
            // Password validation
            isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/.test(value);
            setUser({ ...user, [name]: value });
        }
    
        // Set validation error messages if necessary
        // For simplicity, you can handle error messages separately
    };
    

    const register = () => {
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message);
                    navigate("/login");
                })
                .catch(error => {
                    alert("Error registering user. Please try again later.");
                    console.error("Error registering user:", error);
                });
        } else {
            alert("Invalid input");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ width: "400px", background: "#fff", border: "1px solid #dddfe2", boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)", borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
                <h1>Register</h1>
                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} style={{ borderRadius: "8px", border: "2px solid #dddfe2", outline: "none", color: "#1d2129", margin: "0.5rem 0", padding: "0.5rem 0.75rem", width: "92%", fontSize: "1rem" }} />
                <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={handleChange} style={{ borderRadius: "8px", border: "2px solid #dddfe2", outline: "none", color: "#1d2129", margin: "0.5rem 0", padding: "0.5rem 0.75rem", width: "92%", fontSize: "1rem" }} />
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange} style={{ borderRadius: "8px", border: "2px solid #dddfe2", outline: "none", color: "#1d2129", margin: "0.5rem 0", padding: "0.5rem 0.75rem", width: "92%", fontSize: "1rem" }} />
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange} style={{ borderRadius: "8px", border: "2px solid #dddfe2", outline: "none", color: "#1d2129", margin: "0.5rem 0", padding: "0.5rem 0.75rem", width: "92%", fontSize: "1rem" }} />
                <div className="button" style={{ background: "#1877f2", border: "1px solid #1877f2", color: "#fff", fontSize: "1.25rem", padding: "0.5rem", margin: "0.5rem 0", borderRadius: "8px", outline: "none", cursor: "pointer" }} onClick={register}>Register</div>
                <div>or</div>
                <div className="button" style={{ background: "#1877f2", border: "1px solid #1877f2", color: "#fff", fontSize: "1.25rem", padding: "0.5rem", margin: "0.5rem 0", borderRadius: "8px", outline: "none", cursor: "pointer" }} onClick={() => navigate("/login")}>Login</div>
            </div>
        </div>
    );
};

export default Register;
