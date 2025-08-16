import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
    const navigate = useNavigate();

    const handleRegister = async (data) => {
        try{
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            navigate('/');   
        } catch (err) {
            console.error("Registration failed:", err.message);
            alert(err.message);        
        }
    };

    return <RegisterForm onRegister={handleRegister} />
}