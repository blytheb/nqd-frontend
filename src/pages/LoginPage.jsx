import React, { useEffect } from "react";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    const { currentUser } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate ('/');
        }
    }, [currentUser, navigate]);


    const handleLogin = async (email,password) => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            console.error("Login failed:", err.message);
            alert(err.message);
        }
    };

    return (
        <LoginForm onLogin={handleLogin} />
    )
};
