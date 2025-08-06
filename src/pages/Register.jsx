import React, { useState } from "react"
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try{
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/home');   
        } catch (err) {
            setError(err.message);
        }
    };

    return <div>
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
            <div>
                <label>Email:</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
            </div>
            <button type="submit">Register</button>

            {error && <p>{error}</p>}
        </form>
    </div>
}