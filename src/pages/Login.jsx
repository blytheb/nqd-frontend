import React, { useState, useEffect } from "react";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { currentUser } = useAuth();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (currentUser) {
            navigate ('/');
        }
    }, [currentUser, navigate]);


    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div>
            <h1> Login page </h1>
            <form onSubmit={handleLogin}> 
                <div>
                    <label> Email </label>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label> Password </label>
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit"> Log in</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
};
