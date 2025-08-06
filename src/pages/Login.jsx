import React, { useState, useEffect } from "react";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (user) {
            navigate ('/home');
        }
    }, [user, navigate]);


    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
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
